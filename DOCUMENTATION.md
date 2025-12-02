# Complete Portfolio Website Documentation

**Louis Schmalisch's Portfolio Website**
**Last Updated:** 2025-11-28
**Version:** 1.0

---

## Table of Contents

1. [Setup Guide](#setup-guide)
2. [Content Loading System](#content-loading-system)
3. [Projects List View](#projects-list-view)
4. [Logo Management](#logo-management)
5. [Code Explanation](#code-explanation)
6. [Assets Needed](#assets-needed)
7. [Quick Reference](#quick-reference)
8. [Troubleshooting](#troubleshooting)

---

# Setup Guide

## Initial Setup Checklist

### Required Actions

- [ ] **Update social media links** in `static/about.md`
- [ ] **Add CV PDF** to `assets/Louis_Schmalisch_CV.pdf`
- [ ] **Add favicon** to `assets/favicon.ico`

### Optional Enhancements

- [ ] Add profile photo (`assets/profile-photo.jpg`)
- [ ] Add project screenshots to `assets/` folder
- [ ] Customize colors in `style.css`

---

## Social Media Icons

### Location

`static/about.md` - Top of the about section

### Current Icons

- 🐙 GitHub
- 💼 LinkedIn
- 🐦 Twitter/X
- 📧 Email
- 🔬 ORCID (academic publications)

### How to Update

Edit `static/about.md` and replace placeholder URLs:

**GitHub** (Line ~4):

```html
<a href="https://github.com/schmlou" target="_blank"></a>
```

Replace `yourusername` with your GitHub username

**LinkedIn** (Line ~10):

```html
<a href="https://linkedin.com/in/yourusername" target="_blank"></a>
```

Replace `yourusername` with your LinkedIn username

**Twitter/X** (Line ~16):

```html
<a href="https://twitter.com/yourusername" target="_blank"></a>
```

Replace `yourusername` with your Twitter handle

**Email** (Line ~22):

```html
<a href="mailto:your.email@example.com"></a>
```

Replace with your actual email address

**ORCID** (Line ~28):

```html
<a href="https://orcid.org/0000-0000-0000-0000" target="_blank"></a>
```

Replace with your ORCID ID (or delete this entire `<a>...</a>` block if you don't have one)

### Remove an Icon

To remove a social media icon, delete the entire `<a>...</a>` block for that platform (from `<a href=...>` to `</a>`).

### Add More Icons

**ResearchGate:**

```html
<a
  href="https://researchgate.net/profile/Your-Name"
  target="_blank"
  style="text-decoration: none;"
>
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path
      d="M19.586 0c-.818 0-1.508.19-2.073.565-.563.377-.97.936-1.213 1.68..."
    />
  </svg>
</a>
```

**Google Scholar:**

```html
<a
  href="https://scholar.google.com/citations?user=YOUR_ID"
  target="_blank"
  style="text-decoration: none;"
>
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94..." />
  </svg>
</a>
```

---

## CV Download Button

### Location

`static/cv.md` - At the bottom of the CV section

### Setup Steps

1. **Export your CV as PDF**

   - Use Word, Google Docs, LaTeX, etc.
   - Export/Save as PDF

2. **Name the file**

   - Exact name: `Louis_Schmalisch_CV.pdf`

3. **Save location**

   - Place in: `assets/Louis_Schmalisch_CV.pdf`

4. **Test**
   - Open your website
   - Navigate to CV section
   - Click "📄 Download Full CV (PDF)"
   - PDF should download

### Customize Button Text

Edit `static/cv.md` (bottom of file):

```html
<a href="assets/Louis_Schmalisch_CV.pdf" download="Louis_Schmalisch_CV.pdf">
  📄 Download Full CV (PDF)
</a>
```

Change text between `>` and `</a>` to customize button label.

---

# Content Loading System

## Overview

Your portfolio website automatically loads different content based on which page visitors are viewing:

- **Home page (index.html)**: Shows brief summaries
- **Detail pages** (about.html, experience.html, cv.html): Shows full detailed content

---

## How It Works

### Visual Flow Diagram

```
User visits a page
       ↓
JavaScript detects: "Which page am I on?"
       ↓
   ┌───────────────────────┐
   │  Is this index.html?  │
   └───────────────────────┘
       ↓            ↓
     YES           NO
       ↓            ↓
  Load .md     Load -full.md
  (short)      (detailed)
```

### Step-by-Step Process

1. **User visits a page** (e.g., about.html)
2. **Page loads** and includes script.js
3. **Script runs** and creates a `MarkdownLoader` object
4. **For each section** (about, experience, cv):
   - Script checks: "What page am I on?"
   - If on index.html → load `section.md`
   - If on about.html → load `about-full.md`
   - If on experience.html → load `experience-full.md`
   - If on cv.html → load `cv-full.md`
5. **Content is loaded** and displayed

---

## File Structure

### Static Folder Organization

```
static/
├── about.md              ← Short version (for home page)
├── about-full.md         ← Detailed version (for about.html)
├── experience.md         ← Short version (for home page)
├── experience-full.md    ← Detailed version (for experience.html)
├── cv.md                 ← Short version (for home page)
├── cv-full.md            ← Detailed version (for cv.html)
└── projects.json         ← Projects data (all pages)
```

### Page Mapping

| Page File       | Content Loaded     | File Used          |
| --------------- | ------------------ | ------------------ |
| index.html      | About section      | about.md           |
| index.html      | Experience section | experience.md      |
| index.html      | CV section         | cv.md              |
| about.html      | About section      | about-full.md      |
| experience.html | Experience section | experience-full.md |
| cv.html         | CV section         | cv-full.md         |

---

## The Code Explained

### Modified: script.js (Lines 333-349)

#### 1. Get Current Page

```javascript
const currentPage = window.location.pathname.split("/").pop() || "index.html";
```

**What it does:**

- Gets the filename from the URL
- Example: `/about.html` → `"about.html"`
- Defaults to `"index.html"` if empty

#### 2. Check if Detail Page

```javascript
const isDetailPage = currentPage.includes(section + ".html");
```

**What it does:**

- Checks if current page matches the section
- Example: `"about.html".includes("about.html")` → `true`
- Example: `"index.html".includes("about.html")` → `false`

#### 3. Choose File

```javascript
const fileName = isDetailPage ? `${section}-full.md` : `${section}.md`;
```

**What it does:**

- If detail page → load `-full.md` version
- If home page → load regular `.md` version

**Examples:**

```javascript
// On about.html loading "about" section
fileName = "about-full.md" ✓

// On index.html loading "about" section
fileName = "about.md" ✓
```

---

## How to Edit Content

### For Home Page (Short Summaries)

Edit these files for brief content on index.html:

- `static/about.md` - 2-3 paragraphs
- `static/experience.md` - Key highlights only
- `static/cv.md` - Brief overview

**Example - static/about.md:**

```markdown
## About Me

I'm Louis Schmalisch, a Master's student at Z_GIS, University of Salzburg.

I specialize in GIS and remote sensing, with a passion for environmental monitoring.
```

### For Detail Pages (Full Content)

Edit these files for detailed content on dedicated pages:

- `static/about-full.md` - Complete background, interests, skills
- `static/experience-full.md` - Full job details, education
- `static/cv-full.md` - Complete CV with all details

**Example - static/about-full.md:**

```markdown
## About Me

I'm Louis Schmalisch, a Master's student at Z_GIS, University of Salzburg.

## Background

My journey into geoinformatics began during my undergraduate studies...
[Much more detailed content here]

## Research Interests

I'm particularly interested in:

- Environmental monitoring
- Machine learning in GIS
- Urban planning
  [etc...]
```

---

# Projects List View

## Overview

The projects section displays differently based on page:

- **Home page (index.html)**: Carousel view (swipeable cards)
- **Projects page (projects.html)**: List view (sorted by year, newest first)

---

## Visual Comparison

### Home Page (Carousel)

```
┌─────────────────────────────────┐
│     [Project Card - Swipeable]  │
│                                 │
│         ← • • • →               │
└─────────────────────────────────┘
```

One project at a time

### Projects Page (List)

```
┌─────────────────────────────────┐
│  2024 | Project Title 1         │
│        Description...           │
└─────────────────────────────────┘
┌─────────────────────────────────┐
│  2023 | Project Title 2         │
│        Description...           │
└─────────────────────────────────┘
```

All projects visible, sorted by year

---

## How Projects List Works

### 1. Page Detection

**Location:** script.js lines 456-458

```javascript
const currentPage = window.location.pathname.split("/").pop() || "index.html";
const isProjectsPage = currentPage === "projects.html";
```

### 2. Conditional Rendering

**Location:** script.js line 461

```javascript
const html = isProjectsPage
  ? this.renderProjectsList(projects)
  : this.renderProjects(projects);
```

- If on projects.html → show list
- Otherwise → show carousel

### 3. Sorting by Year

**Location:** script.js lines 714-719

```javascript
const sortedProjects = [...projects].sort((a, b) => {
  const yearA = parseInt(a.year) || 0;
  const yearB = parseInt(b.year) || 0;
  return yearB - yearA; // Newest first
});
```

**How sorting works:**

- Converts year to number
- Defaults to 0 if missing
- Sorts descending (2024, 2023, 2022...)

---

## Projects Data Format

### JSON Structure

Your `static/projects.json` should follow this format:

```json
[
  {
    "title": "Project Title",
    "year": 2024,
    "venue": "Conference Name",
    "authors": "Author 1, Author 2",
    "description": "Project description...",
    "image": "path/to/image.jpg",
    "tags": ["GIS", "Remote Sensing", "Python"],
    "links": {
      "paper": "https://...",
      "code": "https://github.com/...",
      "demo": "https://..."
    }
  }
]
```

### Important Fields

- **year**: Required for sorting (use number, not string)
- **title**: Project name
- **venue**: Where published/presented
- **authors**: Author names
- **description**: Brief summary
- **image**: Path to project image
- **tags**: Array of technology/topic tags
- **links**: Object with paper/code/demo URLs

---

## CSS Styling for Projects List

### List Container

**Location:** style.css lines 1592-1597

```css
.projects-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2rem;
}
```

### Project Item Card

**Location:** style.css lines 1599-1609

```css
.project-list-item {
  background: var(--color-card-bg);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px var(--color-shadow);
  transition: all 0.3s ease;
  display: flex;
  gap: 1.5rem;
  flex-direction: column; /* Mobile: vertical */
}
```

### Hover Effect

**Location:** style.css lines 1611-1615

```css
.project-list-item:hover {
  transform: translateY(-4px); /* Lift up */
  box-shadow: 0 4px 16px var(--color-shadow);
  border-color: var(--color-accent);
}
```

### Year Badge

**Location:** style.css lines 1657-1666

```css
.project-list-year {
  display: inline-block;
  background: var(--color-accent);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 600;
  width: fit-content;
}
```

### Responsive Design

**Mobile (Default):**

- Vertical layout (image on top, content below)

**Tablet & Up (768px+):**

```css
@media (min-width: 768px) {
  .project-list-item {
    flex-direction: row; /* Side by side */
  }
  .project-list-image {
    max-width: 250px;
  }
}
```

**Desktop (1024px+):**

```css
@media (min-width: 1024px) {
  .project-list-item {
    padding: 2rem;
  }
  .project-list-image {
    max-width: 300px;
  }
  .project-list-title {
    font-size: 1.75rem;
  }
}
```

---

# Logo Management

## Current Logo

Your website uses an **"LS" logo** representing your initials (Louis Schmalisch):

- Green isometric blocks forming "L"
- Purple isometric blocks forming "S"
- All pages show the same consistent logo

---

## How to Change the Logo

### Method 1: Edit and Sync (Recommended)

1. **Edit logo in index.html**

   - Open index.html
   - Find the logo SVG (lines 51-289)
   - Make your changes

2. **Run the sync script**

   ```bash
   python -c "
   import re

   with open(r'c:\Users\louis\Documents\eP_self\index.html', 'r', encoding='utf-8') as f:
       index_content = f.read()

   logo_match = re.search(r'(<a href=\"index\.html\" class=\"group header-logo.*?</a>)', index_content, re.DOTALL)
   if logo_match:
       standard_logo = logo_match.group(1)

       for page in ['about.html', 'projects.html', 'experience.html', 'cv.html']:
           filepath = rf'c:\Users\louis\Documents\eP_self\{page}'
           with open(filepath, 'r', encoding='utf-8') as f:
               content = f.read()

           new_content = re.sub(
               r'<a href=\"index\.html\" class=\"group header-logo.*?</a>',
               standard_logo,
               content,
               flags=re.DOTALL
           )

           with open(filepath, 'w', encoding='utf-8') as f:
               f.write(new_content)

           print(f'Updated {page}')
   "
   ```

### Method 2: Use Image Logo

Replace the inline SVG with an image:

1. Save your logo as `assets/logo.svg` or `assets/logo.png`
2. Edit index.html:
   ```html
   <a href="index.html" class="group header-logo flex items-center">
     <img src="assets/logo.svg" alt="Logo" class="h-10 w-6 sm:h-20 sm:w-12" />
   </a>
   ```
3. Run the sync script to apply to all pages

### Method 3: Change Colors

Edit the SVG fill colors in index.html:

**Current colors:**

```html
<!-- Green -->
fill="#5ff26b"
<!-- Light green -->
fill="#98ff9c"
<!-- Lighter green -->
fill="#0cbe3b"
<!-- Dark green -->

<!-- Purple -->
fill="#af67ff"
<!-- Light purple -->
fill="#e497ff"
<!-- Lighter purple -->
fill="#7b38cb"
<!-- Dark purple -->
```

**Example: Blue and Orange**

```html
<!-- Blue -->
fill="#5f9dff" fill="#98c8ff" fill="#0c5ebe"

<!-- Orange -->
fill="#ff8c67" fill="#ffc397" fill="#cb6938"
```

---

# Quick Reference

## File Locations

### HTML Pages

- `index.html` - Home page
- `about.html` - About detail page
- `projects.html` - Projects list page
- `experience.html` - Experience detail page
- `cv.html` - CV detail page

### Content Files

- `static/about.md` - Home page about (short)
- `static/about-full.md` - About page (detailed)
- `static/experience.md` - Home page experience (short)
- `static/experience-full.md` - Experience page (detailed)
- `static/cv.md` - Home page CV (short)
- `static/cv-full.md` - CV page (detailed)
- `static/projects.json` - Projects data

### Code Files

- `script.js` - JavaScript functionality
- `style.css` - Styling

---

## Common Tasks

### Add New Project

1. Open `static/projects.json`
2. Add new project object:
   ```json
   {
     "title": "New Project",
     "year": 2024,
     "venue": "Conference",
     "authors": "Your Name",
     "description": "Description...",
     "tags": ["Tag1", "Tag2"],
     "links": {
       "paper": "https://...",
       "code": "https://github.com/..."
     }
   }
   ```
3. Save file
4. Refresh browser

### Edit About Content

**For home page:**

1. Edit `static/about.md`
2. Keep it brief (2-3 paragraphs)

**For detail page:**

1. Edit `static/about-full.md`
2. Add full details

### Change Logo

1. Edit logo in `index.html` (lines 51-289)
2. Run sync script (see Logo Management section)

---

# Troubleshooting

## Content Issues

### Content Not Loading

**Symptoms:** Section shows "Loading..." or error

**Check:**

1. File exists in `static/` folder
2. Filename is correct (case-sensitive)
3. Browser console (F12) for errors

**Common errors:**

```
Error loading about content - all paths failed: HTTP 404
```

**Solution:** File missing or misnamed

### Wrong Content Showing

**Symptoms:** Detail page shows short content

**Debug:**

```javascript
// Add to script.js temporarily
console.log("Current page:", currentPage);
console.log("Is detail page?", isDetailPage);
console.log("Loading file:", fileName);
```

**Check:**

1. Browser console shows which file is loading
2. Verify correct file exists
3. Hard refresh (Ctrl+F5)

### Same Content Everywhere

**Cause:** Both `.md` and `-full.md` files are identical

**Solution:** Edit `-full.md` files to add more detail

---

## Projects Issues

### Projects Not Sorted

**Check:**

1. Each project has `year` field
2. Year is a number: `2024` not `"2024"`
3. No typos: `year` not `Year`

**Debug:**

```javascript
console.log(
  "Sorted:",
  projects.map((p) => p.year)
);
```

### List Not Showing

**Symptoms:** Carousel shows on projects.html

**Check:**

1. Filename is exactly `projects.html`
2. Hard refresh (Ctrl+F5)
3. Check console for errors

---

## Logo Issues

### Logo Different on Pages

**Cause:** Logos weren't synced

**Solution:** Run the logo sync script (see Logo Management)

### Logo Not Appearing

**Check:**

1. SVG code is complete
2. No syntax errors in HTML
3. Check browser console

---

## General Issues

### Changes Not Appearing

**Try:**

1. Hard refresh: Ctrl+F5 (Windows) or Cmd+Shift+R (Mac)
2. Clear browser cache
3. Check if you saved the file
4. Verify you're editing the correct file

### Browser Console Errors

**How to check:**

1. Press F12 (or right-click → Inspect)
2. Click "Console" tab
3. Look for red error messages
4. Read the error and file location

---

## Testing Checklist

### After Editing Content

- [ ] Open index.html - short versions show?
- [ ] Open about.html - full about content?
- [ ] Open experience.html - full experience?
- [ ] Open cv.html - full CV?
- [ ] Open projects.html - list view?
- [ ] All pages - same logo?

### After Adding Project

- [ ] Project appears in carousel (index.html)
- [ ] Project appears in list (projects.html)
- [ ] Projects sorted by year (newest first)
- [ ] All links work
- [ ] Images load

### After Changing Logo

- [ ] Logo appears on all 5 pages
- [ ] Logo looks consistent
- [ ] Logo is correct size
- [ ] Logo animation works (if applicable)

---

## Key Concepts

### Conditional Loading

The system automatically chooses content based on the page:

- **Home page** → short `.md` files
- **Detail pages** → full `-full.md` files

### Page Detection

JavaScript checks the URL to determine which page:

```javascript
const currentPage = window.location.pathname.split("/").pop();
```

### Responsive Design

Layouts adapt to screen size:

- **Mobile:** Vertical stacking
- **Tablet:** Side-by-side
- **Desktop:** More spacing

### Dynamic Content

Content is loaded from files, not hardcoded:

- Easy to update
- No code changes needed
- Just edit markdown/JSON

---

## Best Practices

### Content

1. **Home page:** Brief, engaging summaries
2. **Detail pages:** Comprehensive information
3. **Consistency:** Same headings in both versions
4. **Testing:** Always test after changes

### Files

1. **Naming:** Use exact names (case-sensitive)
2. **Organization:** Keep files in `static/` folder
3. **Backup:** Save copies before major changes

### Code

1. **Don't edit:** Unless you understand it
2. **Test locally:** Before deploying
3. **Browser console:** Check for errors
4. **Version control:** Use git for tracking

---

## Summary

✅ **Content System:** Automatically loads short/full versions
✅ **Projects:** Carousel on home, list on projects page
✅ **Logo:** Consistent "LS" logo across all pages
✅ **Responsive:** Works on mobile, tablet, desktop
✅ **Easy Updates:** Edit markdown/JSON files

---

**Questions?** Check browser console (F12) for errors, or review the specific sections above.

**Last Updated:** 2025-11-28

---

# Code Explanation

## File Structure

```
eP_self/
├── index.html          # Main landing page
├── about.html          # About detail page
├── projects.html       # Projects list page
├── experience.html     # Experience detail page
├── cv.html             # CV detail page
├── style.css           # All visual styling
├── script.js           # Dynamic functionality
├── static/             # Content folder
│   ├── about.md        # Short about content
│   ├── about-full.md   # Full about content
│   ├── experience.md   # Short experience
│   ├── experience-full.md # Full experience
│   ├── cv.md           # Short CV
│   ├── cv-full.md      # Full CV
│   └── projects.json   # Projects data
└── assets/             # Images and downloads
    ├── favicon.ico     # Browser tab icon
    └── Louis_Schmalisch_CV.pdf  # CV download
```

---

## How Files Work Together

### 1. HTML Files

**Purpose:** Structure and layout

**index.html (Landing Page):**

- Shows all sections on one page
- Loads short content (`.md` files)
- Carousel view for projects

**Detail Pages (about.html, etc.):**

- Each shows one section
- Loads full content (`-full.md` files)
- List view for projects (projects.html)

### 2. CSS (style.css)

**Purpose:** Visual styling and theming

**CSS Variables:**

```css
:root {
  --color-global-bg: oklch(98.48% 0 0);
  --color-accent: #af67ff;
}
```

### 3. JavaScript (script.js)

**Purpose:** Dynamic functionality and content loading

**Main Classes:**

- ThemeManager: Light/dark theme
- MobileNavigation: Mobile menu
- SmoothScroll: Smooth scrolling
- MarkdownLoader: Content loading

---

## Markdown Syntax Reference

```markdown
## Heading 2 → <h2>Heading 2</h2>

**bold text** → <strong>bold text</strong>
[Link](https://...) → <a href="...">Link</a>

- List item → <li>List item</li>
```

---

## Projects JSON Format

```json
{
  "title": "Project Name",
  "year": 2024,
  "description": "What it does...",
  "tags": ["tag1", "tag2"],
  "links": {
    "paper": "https://...",
    "code": "https://github.com/...",
    "demo": "https://...",
    "pdf": "assets/projects/project-paper.pdf"
  }
}
```

**Link Types:**

- `paper` - External link to published paper
- `code` - GitHub repository or code link
- `demo` - Live demo or website link
- `pdf` - Local PDF file for download (shows as "📄 Download PDF" button)

**Common Tags:** `"python"`, `"gis"`, `"machine-learning"`, `"remote-sensing"`

**PDF Downloads:**
To add a downloadable PDF to a project:

1. Place PDF in `assets/projects/` folder (e.g., `assets/projects/wildfire-paper.pdf`)
2. Add `"pdf": "assets/projects/wildfire-paper.pdf"` to the project's links
3. The button will automatically appear with special styling

---

# Assets Needed

## Required Files

### 1. Favicon

- **File:** `assets/favicon.ico`
- **Size:** 16x16 or 32x32 pixels
- **Create at:** https://favicon.io/favicon-generator/

### 2. CV PDF

- **File:** `assets/Louis_Schmalisch_CV.pdf`
- **Format:** PDF
- **Purpose:** Downloadable from CV section

---

## Optional Files

### 3. Profile Photo

- **File:** `assets/profile-photo.jpg`
- **Size:** 400x400 pixels (square)
- **How to add:**
  ```markdown
  <img src="assets/profile-photo.jpg" alt="Your Name"
       style="float: right; max-width: 200px; border-radius: 10px;">
  ```

### 4. Project Screenshots

- **Size:** 800x600 pixels or 16:9 ratio
- **Format:** JPG or PNG
- **Optimize:** Use https://tinypng.com/

---

## Image Optimization Tips

1. **Resize:** Keep under 800px wide
2. **Compress:** Use https://tinypng.com/
3. **Target:** Under 500KB each

---
