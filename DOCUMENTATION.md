# ePortfolio Website Documentation

**Louis Schmalisch's Portfolio Website**
**Last Updated:** 2025-12-16
**Version:** 2.1

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Technology Stack](#technology-stack)
3. [Project Structure](#project-structure)
4. [Setup and Installation](#setup-and-installation)
5. [Content Management](#content-management)
6. [Features](#features)
7. [Customization Guide](#customization-guide)
8. [Deployment](#deployment)
9. [Troubleshooting](#troubleshooting)
10. [Development Notes](#development-notes)

---

## Project Overview

This is a modern, responsive portfolio website built with vanilla HTML, CSS, and JavaScript. The website showcases Louis Schmalisch's work as a Master's student at Z_GIS, University of Salzburg, specializing in Geographic Information Systems and remote sensing.

### Key Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Dark/Light Theme**: Toggle between themes with localStorage persistence
- **Dynamic Content Loading**: Markdown-based content system for easy updates
- **Two-Tier Project Descriptions**: Short summaries for carousel, detailed descriptions for project page
- **Project Navigation**: Click project titles in carousel to navigate to detailed view
- **Project Carousel**: Interactive swipeable carousel for showcasing projects on the home page
- **Project List View**: Detailed list view sorted by year on the projects page
- **Timeline Visualization**: Education history displayed as visual timeline
- **Profile Photo**: Circular profile image in the header
- **Social Media Integration**: GitHub, LinkedIn, and email links
- **Smooth Scrolling**: Enhanced navigation experience with anchor linking
- **CV Download**: Integrated CV download button on Experience page

---

## Technology Stack

### Frontend

- **HTML5**: Semantic markup for content structure
- **CSS3**: Modern styling with CSS custom properties (variables) for theming
- **JavaScript (ES6+)**: Vanilla JS with classes for functionality

### Content Format

- **Markdown**: `.md` files for text content (parsed client-side)
- **JSON**: `projects.json` for project data with dual description fields

### Fonts

- **JetBrains Mono**: Google Font for consistent typography

### Version Control

- **Git**: Version control system
- **GitHub**: Repository hosting and GitHub Pages deployment

---

## Project Structure

```
ePortfolio/
├── index.html              # Main landing page (home)
├── about.html              # About detail page
├── projects.html           # Projects list page
├── experience.html         # Experience detail page
├── style.css               # All visual styling and themes
├── script.js               # JavaScript functionality
├── LICENSE                 # MIT License
├── README.md               # Project README
├── DOCUMENTATION.md        # This file
├── CNAME                   # Custom domain configuration
│
├── static/                 # Content files
│   ├── about.md            # Short about content (home page)
│   ├── about-full.md       # Full about content (about page)
│   ├── experience.md       # Short experience (home page)
│   ├── experience-full.md  # Full experience (experience page)
│   └── projects.json       # Projects data with dual descriptions
│
└── assets/                 # Static assets
    ├── favicon.ico         # Browser tab icon
    ├── profile-photo.jpg   # Profile photo for header
    ├── Louis_Schmalisch_CV.pdf  # CV download file
    └── projects/           # Project-related files
        └── *.pdf           # Project papers/documents
```

**Note:** The CV section has been integrated into the Experience page. There are no separate `cv.html`, `cv.md`, or `cv-full.md` files.

---

## Setup and Installation

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A text editor (VS Code, Sublime Text, etc.)
- Git (for version control)

### Local Development

1. **Clone the repository**

   ```bash
   git clone https://github.com/schmlou/ePortfolio.git
   cd ePortfolio
   ```

2. **Open in browser**

   - Simply open `index.html` in your web browser
   - Or use a local server (recommended):

     ```bash
     # Python 3
     python -m http.server 8000

     # Python 2
     python -m SimpleHTTPServer 8000

     # Node.js (http-server)
     npx http-server
     ```

   - Then navigate to `http://localhost:8000`

3. **Start editing**
   - Edit markdown files in the `static/` folder
   - Edit projects in `static/projects.json`
   - Refresh browser to see changes

---

## Content Management

### Markdown Files

The website uses a dual-content system: **short** versions for the home page and **full** versions for detail pages.

#### Content Flow

```
Page Visited
    ↓
JavaScript detects page
    ↓
┌─────────────────────┐
│ Is it index.html?   │
└─────────────────────┘
    ↓           ↓
  YES          NO
    ↓           ↓
Load .md    Load -full.md
(short)     (detailed)
```

#### File Mapping

| Page            | Section    | File Loaded        |
| --------------- | ---------- | ------------------ |
| index.html      | About      | about.md           |
| index.html      | Experience | experience.md      |
| about.html      | About      | about-full.md      |
| experience.html | Experience | experience-full.md |

**Note:** Projects are loaded from `projects.json` on both pages, with different rendering based on the page.

#### Supported Markdown Syntax

```markdown
# Heading 1

## Heading 2

### Heading 3

**Bold text**
_Italic text_

[Link text](https://example.com)

- List item 1
- List item 2

--- (horizontal rule)
```

#### Embedding HTML in Markdown

You can embed HTML directly in markdown files for advanced formatting:

```html
<div class="timeline">
  <div class="timeline-item">
    <div class="timeline-dot"></div>
    <div class="timeline-header">
      <span class="timeline-org">Organization Name</span>
      <span class="timeline-role">• Role/Degree</span>
      <span class="timeline-dates">Start – End</span>
    </div>
  </div>
</div>
```

### Projects Data (JSON)

Edit `static/projects.json` to add/modify projects. Each project now supports dual descriptions:

```json
{
  "id": "unique-project-slug",
  "title": "Project Name",
  "description": "Brief 1-2 sentence overview (shown in carousel)",
  "descriptionFull": "Detailed multi-paragraph description shown on projects page.\n\nSecond paragraph with more technical details.\n\nThird paragraph with conclusions and outcomes.",
  "image": "assets/project-image.jpg",
  "venue": "University/Conference Name",
  "authors": "<a href='https://www.linkedin.com/in/authorname/' target='_blank' rel='noopener noreferrer'>Author Name</a>",
  "year": 2024,
  "tags": ["tag1", "tag2", "tag3"],
  "links": {
    "paper": "https://link-to-paper.com",
    "code": "https://github.com/username/repo",
    "demo": "https://demo-url.com",
    "pdf": "assets/projects/paper.pdf"
  }
}
```

#### Field Descriptions

- **id** (required): Unique identifier for project navigation (use kebab-case)
- **title** (required): Project name
- **description** (required): Short 1-2 sentence summary for landing page carousel
- **descriptionFull** (optional): Detailed description for projects page. Use `\n\n` to separate paragraphs. Falls back to `description` if not provided.
- **image** (optional): Path to project thumbnail/image
- **venue** (optional): Where the project was presented or published
- **authors** (optional): Project contributors (can include HTML for links)
- **year** (required): Publication/completion year as number (used for sorting)
- **tags** (required): Array of technology/category tags
- **links** (required): Object containing project links

#### Link Types

- `paper`: External link to published paper
- `code`: GitHub repository or source code link
- `demo`: Live demo or interactive visualization
- `pdf`: Local PDF file (shows "📄 Download PDF" button)

**Note:** Leave links as empty strings `""` if not applicable.

#### Adding Author LinkedIn Links

You can embed clickable LinkedIn links in the authors field:

```json
"authors": "<a href='https://www.linkedin.com/in/username1/' target='_blank' rel='noopener noreferrer'>Name 1</a>, <a href='https://www.linkedin.com/in/username2/' target='_blank' rel='noopener noreferrer'>Name 2</a>, Name 3"
```

---

## Features

### 1. Theme System

**Location:** [script.js](script.js) (ThemeManager class, lines 1-48)

The website supports light and dark themes with:

- Toggle button in header
- localStorage persistence
- No flash on page load (inline script in HTML)
- Smooth icon transitions

**Theme Colors** are defined in [style.css](style.css) using CSS custom properties:

```css
[data-theme="dark"] {
  --color-global-bg: #1a1a1a;
  --color-global-text: #e0e0e0;
  --color-accent: #af67ff;
}

[data-theme="light"] {
  --color-global-bg: #ffffff;
  --color-global-text: #1a1a1a;
  --color-accent: #7b38cb;
}
```

### 2. Profile Photo Header

**Location:** [index.html](index.html) (line 51-54)

The header displays a circular profile photo with proper sizing:

- File: `assets/profile-photo.jpg`
- Dimensions: 40x40px (mobile) to 48x48px (desktop)
- Circular crop with `border-radius: 50%`
- Centered top crop for optimal framing

### 3. Dynamic Content Loading

**Location:** [script.js](script.js) (MarkdownLoader class, lines 318-787)

Features:

- Automatic detection of current page
- Conditional loading of short vs. full content
- Multiple path fallbacks for compatibility
- Client-side Markdown parsing
- Error handling with user feedback

### 4. Projects System

#### Dual Description Feature

Projects support two description lengths:

- **description**: Short 1-2 sentence summary for landing page carousel
- **descriptionFull**: Detailed multi-paragraph description for projects page

The system automatically:
- Shows short description in carousel view
- Shows full description in list view
- Formats multi-paragraph text (split by `\n\n`)
- Falls back gracefully if `descriptionFull` is missing

**Implementation:** [script.js](script.js) (lines 740-746, 758)

#### Project Navigation

Clicking a project title in the landing page carousel navigates to that specific project on the projects page:

1. Each project has a unique `id` field in `projects.json`
2. Carousel titles link to `projects.html#project-id`
3. Projects page automatically scrolls to the project on load
4. Smooth scrolling with proper header offset

**Implementation:**
- Project IDs: [projects.json](static/projects.json) (line 3)
- Carousel links: [script.js](script.js) (line 533)
- Scroll handler: [script.js](script.js) (lines 474-491)

#### Carousel View (Home Page)

**Location:** [script.js](script.js) (renderProjects method, lines 505-588)

Features:

- Swipeable cards on mobile
- Arrow navigation buttons
- Dot indicators for current position
- Keyboard navigation (left/right arrows)
- Click on card edges to navigate
- Clickable titles that navigate to project details
- Shows short `description` field

#### List View (Projects Page)

**Location:** [script.js](script.js) (renderProjectsList method, lines 725-787)

Features:

- Sorted by year (newest first)
- Full project details visible with `descriptionFull`
- Multi-paragraph formatting
- Hover effects
- Responsive layout
- Unique ID anchors for navigation

### 5. Navigation System

**Location:** [script.js](script.js) (NavigationHighlight class, lines 168-290)

Features:

- Active section highlighting while scrolling
- Smooth scrolling to sections
- Mobile menu with hamburger icon
- Close on outside click/escape key
- URL hash support for deep linking

### 6. Timeline Visualization

**Location:** [static/experience-full.md](static/experience-full.md)

The Experience page features a visual timeline for education history:

- Vertical timeline with connecting lines
- Dots marking each entry
- Organization, role, dates, and location
- Coursework listings
- Custom CSS classes for styling

Example structure:
```html
<div class="timeline">
  <div class="timeline-item">
    <div class="timeline-dot"></div>
    <div class="timeline-header">
      <span class="timeline-org">University Name</span>
      <span class="timeline-role">• Degree</span>
      <span class="timeline-dates">Oct. 2025 – Ongoing</span>
    </div>
    <div class="timeline-meta">Location</div>
    <div class="timeline-desc">
      <p><strong>Relevant Coursework:</strong>
          - Course 1
          - Course 2
      </p>
    </div>
  </div>
</div>
```

### 7. Social Media Icons

**Location:** [static/about.md](static/about.md) (lines 3-21)

Includes inline SVG icons for:

- GitHub
- LinkedIn
- Email

Icons are styled with current theme colors and have hover effects.

### 8. Mobile-First Responsive Design

The site is fully responsive with:

- Mobile navigation menu
- Touch-friendly carousel
- Responsive grid layouts
- Optimized font sizes
- Flexible images

---

## Customization Guide

### Update Personal Information

#### 1. Change Name and Title

Edit [index.html](index.html):

```html
<title>Your Name - Portfolio</title>
<meta name="description" content="Your title/description" />
<span class="text-xl font-bold sm:text-2xl">Your Name</span>
```

Repeat for other HTML files ([about.html](about.html), [projects.html](projects.html), [experience.html](experience.html)).

#### 2. Update Social Links

Edit [static/about.md](static/about.md) (lines 4-20):

```html
<a href="https://github.com/yourusername" target="_blank">
  <a href="https://www.linkedin.com/in/yourusername/" target="_blank">
    <a href="mailto:your.email@example.com"></a></a
></a>
```

#### 3. Add/Replace Profile Photo

1. Export your photo as JPG (square, at least 200x200px)
2. Save as `assets/profile-photo.jpg`
3. Photo automatically displays in header

#### 4. Update CV PDF

1. Export your CV as PDF
2. Name it `Louis_Schmalisch_CV.pdf` (or update filename in experience-full.md)
3. Place in `assets/` folder
4. Update download link in [static/experience-full.md](static/experience-full.md)

### Customize Colors

Edit [style.css](style.css) CSS custom properties:

```css
[data-theme="dark"] {
  --color-accent: #af67ff; /* Purple accent */
  --color-global-bg: #1a1a1a; /* Background */
  --color-global-text: #e0e0e0; /* Text color */
}
```

### Add New Projects

Edit [static/projects.json](static/projects.json):

1. Add new project object to array
2. Include unique `id` field (use kebab-case)
3. Write short `description` (1-2 sentences for carousel)
4. Write detailed `descriptionFull` (multiple paragraphs for projects page)
5. Include year as number (for sorting)
6. Add project image to `assets/` folder
7. Use tags for categorization
8. Add relevant links (paper, code, demo, pdf)

Example:

```json
{
  "id": "climate-analysis-2024",
  "title": "Climate Analysis Project",
  "description": "A comprehensive study of climate patterns using remote sensing data.",
  "descriptionFull": "A comprehensive study of climate patterns using remote sensing data from multiple satellite sources.\n\nThe project utilized machine learning algorithms to identify trends in temperature and precipitation data over a 20-year period. We developed custom Python scripts for data processing and visualization.\n\nResults were presented at the International GIS Conference and published in the Journal of Environmental Studies.",
  "image": "assets/climate-project.jpg",
  "venue": "University Name",
  "authors": "<a href='https://www.linkedin.com/in/yourname/' target='_blank' rel='noopener noreferrer'>Your Name</a>, Co-Author",
  "year": 2024,
  "tags": ["python", "gis", "machine-learning", "remote-sensing"],
  "links": {
    "code": "https://github.com/username/project",
    "pdf": "assets/projects/climate-paper.pdf",
    "paper": "",
    "demo": ""
  }
}
```

### Modify Content

#### Home Page (Short Versions)

- Edit `static/about.md` (2-3 paragraphs)
- Edit `static/experience.md` (key highlights with timeline)

#### Detail Pages (Full Versions)

- Edit `static/about-full.md` (complete background)
- Edit `static/experience-full.md` (full job details, education timeline, CV download)

---

## Deployment

### GitHub Pages

1. **Push to GitHub**

   ```bash
   git add .
   git commit -m "Update portfolio"
   git push origin main
   ```

2. **Enable GitHub Pages**

   - Go to repository Settings
   - Navigate to Pages section
   - Source: Deploy from branch `main`
   - Folder: `/ (root)`
   - Save

3. **Custom Domain (Optional)**
   - Add domain to CNAME file
   - Configure DNS settings with your provider
   - Enable HTTPS in GitHub Pages settings

### Other Hosting Options

The site is static HTML/CSS/JS and can be hosted on:

- Netlify
- Vercel
- Cloudflare Pages
- AWS S3 + CloudFront
- Any web hosting service

---

## Troubleshooting

### Content Not Loading

**Symptoms:** Section shows "Loading..." or error message

**Solutions:**

1. Check browser console (F12) for errors
2. Verify file exists in `static/` folder
3. Check filename spelling (case-sensitive)
4. Try hard refresh (Ctrl+F5 / Cmd+Shift+R)
5. Ensure you're running from a server (not file://)

### Wrong Content Displayed

**Symptoms:** Detail page shows short content or vice versa

**Debug:**
Add to [script.js](script.js) temporarily:

```javascript
console.log("Current page:", currentPage);
console.log("Is detail page?", isDetailPage);
console.log("Loading file:", fileName);
```

### Projects Not Sorted

**Check:**

1. Year is a number: `2024` not `"2024"`
2. All projects have year field
3. No typos in JSON structure

### Project Navigation Not Working

**Check:**

1. Each project has unique `id` field in JSON
2. IDs use kebab-case (e.g., "my-project-2024")
3. No special characters in ID
4. Browser allows hash navigation

### Theme Not Persisting

**Solutions:**

1. Check localStorage is enabled in browser
2. Clear browser cache
3. Check for JavaScript errors in console

### Images Not Loading

**Check:**

1. File paths are relative from root
2. Filenames match exactly (case-sensitive)
3. Images exist in `assets/` folder
4. File extensions are correct (.jpg, .png, etc.)

### Multi-Paragraph Descriptions Not Formatting

**Check:**

1. Use `\n\n` (double newline) to separate paragraphs in JSON
2. Escape special characters properly
3. Check for JSON syntax errors

---

## Development Notes

### Code Architecture

The JavaScript is organized into classes:

- `ThemeManager`: Handles dark/light theme switching
- `MobileNavigation`: Mobile menu functionality
- `SmoothScroll`: Smooth scrolling behavior
- `NavigationHighlight`: Active nav link highlighting
- `LazyImageLoader`: Lazy loading for images
- `MarkdownLoader`: Content loading, parsing, and project rendering

### Recent Changes (v2.1)

1. **CV Integration**: CV page removed, download integrated into Experience page
2. **Dual Descriptions**: Projects now support short and full description fields
3. **Project Navigation**: Click carousel titles to navigate to specific projects
4. **Timeline Visualization**: Education displayed as visual timeline
5. **Improved Footer**: Standardized footer across all pages
6. **Navigation Cleanup**: Removed CV links from navigation

### Performance Optimizations

1. **Lazy Loading**: Images load as they enter viewport
2. **Content Caching**: Browser caches static files
3. **Minimal Dependencies**: No frameworks, small bundle size
4. **Throttled Scroll**: Scroll events throttled to 100ms
5. **Passive Event Listeners**: Touch events marked passive

### Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

Features gracefully degrade in older browsers.

### Accessibility

- Semantic HTML5 elements
- ARIA labels for interactive elements
- Keyboard navigation support
- `prefers-reduced-motion` support
- Sufficient color contrast ratios
- Focus indicators for interactive elements

### File Size

- **index.html**: ~15 KB
- **style.css**: ~50 KB
- **script.js**: ~36 KB
- **Total**: ~101 KB (before assets)

Fast loading on all connections.

---

## Quick Reference Commands

### Adding Content

```bash
# Edit about content (short)
edit static/about.md

# Edit about content (full)
edit static/about-full.md

# Add new project
edit static/projects.json
```

### Git Workflow

```bash
# Check status
git status

# Add changes
git add .

# Commit changes
git commit -m "Update content"

# Push to GitHub
git push origin main
```

### Testing Locally

```bash
# Python 3
python -m http.server 8000

# Then open:
# http://localhost:8000
```

### Adding a New Project (Complete Workflow)

```bash
# 1. Add project to JSON
edit static/projects.json

# 2. Add project image
cp your-project-image.jpg assets/

# 3. Add project PDF (if applicable)
cp your-project.pdf assets/projects/

# 4. Test locally
python -m http.server 8000

# 5. Commit and push
git add .
git commit -m "Add new project: Your Project Name"
git push origin main
```

---

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) file for details.

---

## Credits

- **Design Inspiration**: [Astro Cactus Theme](https://github.com/chrismwilliams/astro-theme-cactus)
- **Font**: [JetBrains Mono](https://www.jetbrains.com/lp/mono/) by JetBrains
- **Icons**: Inline SVG social media icons

---

## Contact

**Louis Schmalisch**

- Email: louisschmalisch@gmail.com
- GitHub: [@schmlou](https://github.com/schmlou)
- LinkedIn: [louisschmalisch](https://www.linkedin.com/in/louisschmalisch/)

---

**Last Updated:** 2025-12-16
