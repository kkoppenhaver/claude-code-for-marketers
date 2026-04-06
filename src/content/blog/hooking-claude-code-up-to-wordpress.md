---
title: "Claude Code is my new WordPress editor"
description: "The WordPress MCP lets Claude Code create, edit, and publish posts on your site. Here's how I set it up and my draft-to-publish workflow."
pubDate: 2026-03-24
author: "Keanan Koppenhaver"
draft: false
tags: ["wordpress", "mcp", "integrations", "workflow"]
categories: ["Use Cases"]
kitTagId: "14154457"
---

I'd just spent an evening building a Discord bot that cloned my texting personality. The blog post practically wrote itself: I told Claude Code about the project, gave it my notes, and it drafted the whole thing. Title, excerpt, formatted content, the works.

Then came the part I always dread. Copying the markdown into WordPress. Fixing the formatting that broke. Adding the excerpt...

It's not hard, but it's tedious. And after spending an hour in Claude Code where everything felt effortless, switching to the WordPress admin to manually set up a post felt like going backward.

That's when I decided to hook Claude Code directly into my WordPress site. One MCP server and about five minutes of setup later, I was publishing posts from my terminal.

## What is the WordPress MCP?

If you've read my post on [MCP servers](/blog/giving-claude-code-superpowers-with-mcp-servers/), you know that MCPs are bridges that connect Claude Code to external tools. The WordPress MCP connects Claude Code to your WordPress site via the REST API.

Once it's set up, Claude can create posts, update them, change their status from draft to published, search your existing content, and even check what plugins you have installed. All through natural conversation.

WordPress has an [official MCP Adapter](https://github.com/WordPress/mcp-adapter) that bridges the WordPress Abilities API with MCP. You install it as a plugin on your WordPress site, and it automatically exposes your site's capabilities as MCP tools that Claude Code can use.

## Setting it up

There are two pieces: installing the adapter on your WordPress site, and connecting Claude Code to it.

### Step 1: Install the MCP Adapter on your WordPress site

The adapter is a WordPress plugin. If you're comfortable with Composer (a PHP package manager), it's one command:

```bash
composer require wordpress/abilities-api wordpress/mcp-adapter
```

You can also [download it from GitHub](https://github.com/WordPress/mcp-adapter/releases) and install it like any other WordPress plugin. Once it's installed, activate it in your WordPress admin and you're done on the WordPress side.

### Step 2: Create an application password

You need a way for Claude Code to authenticate with your site. WordPress has a built-in feature called [Application Passwords](https://developer.wordpress.org/advanced-administration/security/application-passwords/) that handles this securely.

1. Log into your WordPress admin
2. Go to **Users**, then click on your profile
3. Scroll down to **Application Passwords**
4. Enter a name (something like "Claude Code") and click **Add New**
5. Copy the generated password immediately. You won't see it again.

This password only works through the API. It can't be used to log into your WordPress admin directly, which is a nice security feature.

### Step 3: Connect Claude Code

For most people with a live WordPress site, the easiest connection method uses the `@automattic/mcp-wordpress-remote` proxy. Add this to your Claude Code settings (in `~/.claude.json`):

```json
{
  "mcpServers": {
    "wordpress": {
      "command": "npx",
      "args": ["-y", "@automattic/mcp-wordpress-remote@latest"],
      "env": {
        "WP_API_URL": "https://your-site.com/wp-json/mcp/mcp-adapter-default-server",
        "WP_API_USERNAME": "your-username",
        "WP_API_PASSWORD": "xxxx-xxxx-xxxx-xxxx"
      }
    }
  }
}
```

Replace the URL, username, and application password with your own. Restart Claude Code, and run `/mcp` to verify the WordPress server shows up.

If you're running WordPress locally for development, there's also a STDIO transport option that connects through WP-CLI. The [adapter's README](https://github.com/WordPress/mcp-adapter) has the details on that setup.

### Step 4: Register abilities for content management

Here's the part that tripped me up at first. Installing the MCP Adapter gives Claude Code a connection to your WordPress site, but it doesn't automatically know how to create or edit posts. The adapter is the bridge, but you still need to tell it what it's allowed to do.

WordPress has a new Abilities API that lets plugins register specific capabilities. The MCP Adapter looks for abilities that have been flagged as publicly available, and exposes those as tools Claude Code can use. Out of the box, WordPress ships with a couple of read-only abilities (site info, environment info), but nothing for creating or updating content.

You need a small plugin that registers the abilities you want. I built one that registers three:

- **Get posts** — retrieve posts and pages with their content, categories, and tags
- **Create draft** — create a new draft post or page (with automatic Gutenberg block conversion)
- **Update post** — update the title, content, status, or excerpt of an existing post

Here's what registering a "create draft" ability looks like:

```php
add_action( 'wp_abilities_api_init', 'my_register_abilities' );
function my_register_abilities() {
    wp_register_ability(
        'my-plugin/create-draft',
        array(
            'label'               => 'Create Draft Post',
            'description'         => 'Create a new draft post or page.',
            'category'            => 'my-plugin',
            'input_schema'        => array(
                'type'       => 'object',
                'required'   => array( 'title', 'content' ),
                'properties' => array(
                    'title'   => array( 'type' => 'string' ),
                    'content' => array( 'type' => 'string' ),
                ),
            ),
            'permission_callback' => function () {
                return current_user_can( 'edit_posts' );
            },
            'execute_callback'    => 'my_create_draft_function',
            'meta'                => array(
                'show_in_rest' => true,
                'mcp'          => array( 'public' => true ),
            ),
        )
    );
}
```

A few things to note:

- The hook is `wp_abilities_api_init`, not `init`. If you register on the wrong hook, your abilities just silently don't show up. (I spent some time debugging that one.)
- The `meta` array needs both `show_in_rest` and `mcp.public` set to `true`. Without `mcp.public`, the MCP Adapter won't expose the ability to Claude Code.
- If you want categories registered before your abilities, use the `wp_abilities_api_categories_init` hook for those.

The `execute_callback` is a regular PHP function that receives the input parameters and returns a result. In my case, it calls `wp_insert_post` with the title and content, handles category and tag creation, and returns the new post ID and edit URL. If the content comes in as plain HTML instead of Gutenberg block markup, I convert it automatically.

Once this plugin is active on your site, restart Claude Code and you should see your abilities show up. You can verify by asking Claude to discover what it can do on your WordPress site.

## The workflow: draft, review, publish

With the adapter installed, your abilities registered, and Claude Code connected, you're ready to go. Here's how I actually use this day to day. I'll walk through what I did when I published that Discord bot post.

### Writing the post

The writing happens the same way you'd write any content in Claude Code. I had my notes and project context already in the session, so I asked Claude to draft the post:

> "Write a blog post about building the Discord bot. Focus on the fine-tuning angle: when does it make sense vs. just using a good prompt?"

Claude wrote the draft as a local file. I reviewed it, asked for tweaks, and got it to a place I was happy with.

### Pushing to WordPress as a draft

Once the content was ready, I told Claude to create it in WordPress:

> "Create this as a draft post on my WordPress site"

Claude used the create-draft ability we registered in Step 4, passing the title, content, excerpt, and draft status. A few seconds later, the post existed on my site as a draft.

This is the part that surprised me the first time. Claude automatically wrapped the content in WordPress block markup (the `<!-- wp:paragraph -->` tags that Gutenberg uses). I didn't have to think about formatting at all.

### Reviewing and publishing

With the draft live, I could preview it on my actual site to make sure everything looked right. Then:

> "Great, let's publish this post."

Claude called the update-post ability to flip the status from draft to published. Done. The post was live, with the correct URL, formatting, and everything.

The whole process from "I have a finished draft" to "it's live on my site" took about 30 seconds. No browser, no WordPress admin, no copy-paste dance.

## Beyond publishing

Publishing posts is the obvious use case, but the WordPress MCP gives Claude access to a broader set of tools that come in handy for content management.

**Content audits.** I'll sometimes ask Claude to show me all my draft posts or search for posts containing a specific keyword. It's a quick way to find content that's been sitting in draft limbo or to check if I've already written about a topic.

> "Show me all draft posts on my WordPress site"

> "Search for posts about 'AI tools'"

**Site reconnaissance.** When I'm working on a site I haven't touched in a while, I'll ask Claude to get the lay of the land:

> "What plugins are installed on my site? Which ones are active?"

> "List the most recent 10 posts"

This is especially useful if you manage multiple WordPress sites. Instead of logging into each one and clicking around the admin, you can just ask.

**Batch updates.** Need to update the excerpt on a handful of posts? Or change the status of several drafts at once? Claude can do this in a loop without you touching the WordPress admin.

## A note on what it can't do (yet)

The Abilities API is still new, and the ecosystem of pre-built abilities is small. The core abilities that ship with WordPress are read-only (site info, environment info). Everything else, including creating and editing posts, requires registering your own abilities like we did in Step 4.

That sounds like a lot of work, but once you've written one ability, the pattern is the same for everything else. The plugin I use handles post creation, updates, and category/tag management in about 200 lines of PHP.

The biggest gap I'm still hitting is media uploads. I set featured images manually in the WordPress admin. Custom post types, comments, and WooCommerce data are all things that could be exposed as abilities, but someone has to write them. I expect the community and plugin authors will start shipping their own abilities as the API matures.

For the core writing-to-publishing workflow, which is what I do most often, the setup I've described here handles everything I need.

## Getting started

If you have a WordPress site and you're already using Claude Code, this is a low-effort, high-reward integration. Five minutes of setup, and you never have to copy-paste a blog post into the WordPress editor again.

Start with a draft. Write something in Claude Code, push it to WordPress as a draft, preview it on your site, and publish it when you're ready. Once you've done the round trip once, the old copy-paste workflow will feel painful by comparison!