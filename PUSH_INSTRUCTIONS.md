# How to Push This Branch and Create a PR

The changes are committed to branch `seo-schema-improvements` but not yet pushed to GitHub (authentication needed).

## Option 1: Push from your local machine

```bash
cd /path/to/claude-code-for-marketers
git fetch origin
git checkout seo-schema-improvements
git push -u origin seo-schema-improvements
```

Then create a PR on GitHub:
- Go to: https://github.com/kkoppenhaver/claude-code-for-marketers/pulls
- Click "New Pull Request"
- Select `seo-schema-improvements` → `main`
- Title: "Add comprehensive schema markup and SEO improvements"
- Body: (see suggested text below)

## Option 2: Use GitHub CLI (if you have `gh` installed)

```bash
cd /root/clawd/cc4m
gh auth login  # if not already authenticated
git push -u origin seo-schema-improvements
gh pr create --title "Add comprehensive schema markup and SEO improvements" --body "$(cat PR_DESCRIPTION.md)"
```

---

## Suggested PR Description

```markdown
## Overview
Implements schema.org structured data recommendations from SEO audit. These changes help Google better understand and index our content, leading to richer search results and improved rankings.

## What's Included

### Automatic SEO Components (No Action Needed)
- ✅ **Article schema** - Every blog post gets structured data (author, dates, images)
- ✅ **Organization schema** - Homepage establishes CC4M as an entity
- ✅ **Breadcrumb schema** - Visual + structured breadcrumbs on all posts
- ✅ **Related Posts widget** - Auto-shows 3 relevant articles at bottom of posts
- ✅ **Website schema** - Homepage and non-article pages

### New Optional Components
- ✅ **HowToSchema component** - For step-by-step tutorials (ready to use in frontmatter)

## Files Changed

**New Components:**
- `src/components/Breadcrumbs.astro` - Breadcrumb navigation with schema
- `src/components/OrganizationSchema.astro` - Organization structured data
- `src/components/RelatedPosts.astro` - Smart related content recommendations
- `src/components/HowToSchema.astro` - Tutorial schema component

**Updated:**
- `src/components/SEO.astro` - Added Article and Website schema
- `src/layouts/BlogPost.astro` - Integrated breadcrumbs and related posts
- `src/pages/index.astro` - Added organization schema

**Documentation:**
- `SEO_IMPROVEMENTS.md` - Full implementation guide and roadmap
- `WRITER_GUIDE.md` - Guide for writers on using new SEO features

## Testing Checklist

Before merging:
- [ ] Run `npm run build` - verify no build errors
- [ ] Run `npm run preview` - check that pages render correctly
- [ ] Verify breadcrumbs appear at top of blog posts
- [ ] Verify related posts appear at bottom of blog posts
- [ ] Test 2-3 URLs at https://search.google.com/test/rich-results
- [ ] No console errors in browser

## Next Steps (After Merge)

1. **Test schema markup**: https://search.google.com/test/rich-results
2. **Submit to Google Search Console** for faster indexing
3. **Add HowTo schema** to tutorial posts (see WRITER_GUIDE.md)
4. **Cross-link existing posts** manually for better internal linking

## Documentation

See:
- `SEO_IMPROVEMENTS.md` for full technical details and roadmap
- `WRITER_GUIDE.md` for how writers should use these features
```

---

## Files in this branch

- SEO_IMPROVEMENTS.md (technical implementation guide)
- WRITER_GUIDE.md (writer-facing documentation)
- All component files and updates listed above

The branch is ready to push!
