# ePortfolio To-Do List

**Last Updated:** 2025-12-16
**Project Version:** 2.1
**Current Status:** Core features complete, content expansion needed

---

## 📊 Current State Assessment

### ✅ **Completed Core Features**
- CV page removed and integrated into Experience page
- Dual description system (short/full) for projects
- Project navigation (carousel titles link to detail page)
- Timeline visualization for education section
- Footer standardized across all pages
- Navigation cleaned up (removed CV links)
- Documentation fully updated to v2.1
- Profile photo in header
- Theme system (dark/light mode) with localStorage
- Mobile responsive design
- Project carousel on landing page
- Project list view on projects page
- Social media icons in About section

### 📁 **Current Site Structure**
- **Pages:** 4 (index.html, about.html, projects.html, experience.html)
- **Projects:** 1 (Climate-resilient Bayreuth with dual descriptions)
- **Markdown Files:** 4 (about.md, about-full.md, experience.md, experience-full.md)
- **Navigation:** 3 links (About, Projects, Experience)

---

## 🔴 High Priority

### Content (Most Important)

- [ ] **Add More Projects to projects.json**
  - **Why:** Portfolio needs 3-5 projects minimum to showcase work effectively
  - **Action Items:**
    - [ ] Add at least 2-3 more projects from academic work
    - [ ] For each project include:
      - Unique `id` (kebab-case, e.g., "gis-analysis-2023")
      - Title
      - Short `description` (1-2 sentences for carousel)
      - Detailed `descriptionFull` (3+ paragraphs for projects page)
      - Year as number (for sorting)
      - Venue/University
      - Authors (with LinkedIn links if applicable)
      - Tags (technologies, topics)
      - Links (code, pdf, demo if available)
    - [ ] Add project images to `assets/` folder
    - [ ] Add project PDFs to `assets/projects/` if available
  - **Template:**
    ```json
    {
      "id": "project-slug",
      "title": "Project Name",
      "description": "Brief 1-2 sentence summary.",
      "descriptionFull": "Detailed first paragraph.\n\nSecond paragraph with methods.\n\nThird paragraph with results.",
      "image": "assets/project-image.jpg",
      "venue": "University Name",
      "authors": "Your Name, Co-authors",
      "year": 2024,
      "tags": ["tag1", "tag2"],
      "links": {
        "paper": "",
        "code": "https://github.com/...",
        "demo": "",
        "pdf": "assets/projects/paper.pdf"
      }
    }
    ```

- [ ] **Review and Expand About Content**
  - [ ] Review `static/about.md` - ensure it's current
  - [ ] Expand `static/about-full.md`:
    - [ ] Add more about research interests
    - [ ] Include career goals
    - [ ] Add technical skills section
    - [ ] Mention software proficiencies

- [ ] **Enhance Experience Content**
  - [ ] Review `static/experience.md` - keep timeline format
  - [ ] Expand `static/experience-full.md`:
    - [ ] Add work experience or internships
    - [ ] Add research assistant positions
    - [ ] Include student jobs relevant to GIS
    - [ ] Add volunteer work or student organizations
    - [ ] Add certifications section
    - [ ] Add languages section (if not already)
    - [ ] Update coursework lists if needed

- [ ] **Update CV PDF**
  - [ ] Export updated CV as PDF
  - [ ] Save as `assets/Louis_Schmalisch_CV.pdf`
  - [ ] Verify download link works on Experience page

### Assets

- [ ] **Add Favicon**
  - [ ] Create or generate favicon (16x16px or 32x32px)
  - [ ] Save as `assets/favicon.ico`
  - [ ] Verify it displays in browser tabs

- [ ] **Optimize Images**
  - [ ] Compress profile photo if > 200KB
  - [ ] Optimize project images
  - [ ] Consider WebP format for better compression
  - [ ] Add descriptive alt text to all images

---

## 🟡 Medium Priority

### Testing & Quality Assurance

- [ ] **Cross-Browser Testing**
  - [ ] Test on Chrome (desktop & mobile)
  - [ ] Test on Firefox (desktop & mobile)
  - [ ] Test on Safari (desktop & mobile)
  - [ ] Test on Edge
  - [ ] Verify project navigation works on all browsers
  - [ ] Check theme persistence across browsers

- [ ] **Content Proofreading**
  - [ ] Proofread all markdown files for typos
  - [ ] Check grammar and punctuation
  - [ ] Verify all links work
  - [ ] Test mailto: links
  - [ ] Test all external links (GitHub, LinkedIn)

- [ ] **Responsive Design Testing**
  - [ ] Test on phone (portrait & landscape)
  - [ ] Test on tablet
  - [ ] Test carousel swipe on mobile
  - [ ] Verify mobile menu works properly
  - [ ] Check text readability on small screens

### SEO & Metadata

- [ ] **Improve Meta Tags**
  - [ ] Add unique meta descriptions for each page
  - [ ] Add Open Graph tags for social sharing
  - [ ] Update page titles to be more descriptive
  - [ ] Add keywords meta tag (optional)

- [ ] **Create Sitemap**
  - [ ] Generate sitemap.xml
  - [ ] Add robots.txt
  - [ ] Submit to Google Search Console (after deployment)

### Documentation

- [ ] **Enhance README.md**
  - [ ] Add project overview
  - [ ] Include screenshots
  - [ ] Add live site link (after deployment)
  - [ ] Document tech stack
  - [ ] Add setup instructions

---

## 🟢 Low Priority (Nice to Have)

### Features

- [ ] **Add Project Filters**
  - [ ] Filter by tags (e.g., show only "remote-sensing" projects)
  - [ ] Filter by year
  - [ ] Add search functionality

- [ ] **Contact Form**
  - [ ] Add contact form to About page
  - [ ] Use Formspree or similar service
  - [ ] Add form validation

- [ ] **Analytics**
  - [ ] Add Google Analytics or privacy-friendly alternative
  - [ ] Track page views
  - [ ] Monitor project clicks

- [ ] **Accessibility Enhancements**
  - [ ] Run WAVE or axe accessibility checker
  - [ ] Add skip-to-content link
  - [ ] Test with screen reader
  - [ ] Ensure proper heading hierarchy
  - [ ] Add ARIA labels where needed

### Content

- [ ] **Add Skills Section**
  - [ ] Create skills visualization
  - [ ] Add technology proficiency levels
  - [ ] Include software tools

- [ ] **Add Publications Section**
  - [ ] Separate academic publications
  - [ ] Link to Google Scholar
  - [ ] Add citations

- [ ] **Add Testimonials** (optional)
  - [ ] Include professor recommendations
  - [ ] Add colleague testimonials

### Design

- [ ] **Performance Optimization**
  - [ ] Minify CSS and JavaScript
  - [ ] Enable gzip compression (server-side)
  - [ ] Add service worker for offline access
  - [ ] Implement critical CSS

- [ ] **Enhanced Animations**
  - [ ] Add subtle entrance animations
  - [ ] Smooth page transitions
  - [ ] Loading states for content

- [ ] **Print Stylesheet**
  - [ ] Create print-friendly CSS
  - [ ] Optimize Experience page for printing

---

## 🔧 Maintenance Tasks

### Regular (Monthly)

- [ ] Update experience section with new courses completed
- [ ] Add new projects as they're completed
- [ ] Update CV PDF with latest information
- [ ] Check for broken links
- [ ] Review and update content for accuracy

### Periodic (Quarterly)

- [ ] Test on latest browser versions
- [ ] Review and update dependencies
- [ ] Backup repository and assets
- [ ] Check Google Analytics (if added)
- [ ] Review site performance

---

## 🚀 Deployment Checklist

### Pre-Deployment

- [ ] All high-priority content tasks completed
- [ ] At least 3-5 projects added
- [ ] All markdown content proofread
- [ ] All links tested and working
- [ ] Favicon added
- [ ] CV PDF updated
- [ ] Site tested on multiple browsers/devices

### Deployment

- [x] GitHub repository created
- [x] Code pushed to GitHub
- [x] GitHub Pages enabled
- [ ] Custom domain configured (if applicable)
- [ ] HTTPS enabled
- [ ] Site live and accessible

### Post-Deployment

- [ ] Test live site thoroughly
- [ ] Share portfolio URL on LinkedIn
- [ ] Add portfolio URL to CV/resume
- [ ] Update email signature with portfolio link
- [ ] Share with professors/colleagues for feedback
- [ ] Submit to job applications

---

## 🎯 Future Enhancements (Ideas)

These are longer-term ideas to consider after core content is complete:

- [ ] **Interactive Visualizations**
  - Add D3.js for data visualizations
  - Interactive maps for GIS projects
  - Chart.js for statistics

- [ ] **GitHub Integration**
  - Display GitHub contribution graph
  - Show recent repositories
  - Sync projects from GitHub

- [ ] **Blog Section**
  - Add markdown-based blog
  - Share research updates
  - Write technical articles

- [ ] **Individual Project Pages**
  - Create detail pages for each project
  - Include full case studies
  - Embed demos and visualizations

- [ ] **Multilingual Support**
  - Add German translation
  - Language toggle
  - Separate content files per language

- [ ] **Advanced Timeline**
  - Interactive timeline for all work/education
  - Filter by type (education, work, projects)
  - Visual improvements

---

## 📋 Quick Reference

### File Locations

**Content Files** (in `static/` folder):
- `about.md` - Short about (home page)
- `about-full.md` - Full about (about page)
- `experience.md` - Short experience (home page)
- `experience-full.md` - Full experience (experience page)
- `projects.json` - All projects data

**HTML Pages** (root directory):
- `index.html` - Home/landing page
- `about.html` - About detail page
- `projects.html` - Projects list page
- `experience.html` - Experience detail page

**Assets** (in `assets/` folder):
- `favicon.ico` - Browser tab icon
- `profile-photo.jpg` - Header profile photo
- `Louis_Schmalisch_CV.pdf` - CV download
- `projects/` - Project PDFs and images

**Documentation**:
- `DOCUMENTATION.md` - Complete technical docs
- `TODO.md` - This file
- `README.md` - Project overview

### Key Features to Remember

1. **Dual Descriptions**: Projects have both `description` (short) and `descriptionFull` (detailed)
2. **Project Navigation**: Carousel titles link to `projects.html#project-id`
3. **No CV Page**: CV integrated into Experience page
4. **Timeline Format**: Education uses HTML timeline structure
5. **Author Links**: Can embed LinkedIn links in authors field using HTML

---

## ✅ Definition of Done

Your ePortfolio is ready to share when:

- [x] Core features implemented and working
- [ ] **At least 3-5 projects added with complete information**
- [ ] All markdown content personalized and proofread
- [ ] All links updated and working
- [ ] Favicon and images optimized
- [ ] Tested on multiple browsers and devices
- [ ] Deployed to GitHub Pages
- [ ] Live site accessible and functional

---

## 📝 Notes

- **Priority Focus**: Add more projects first - this is the most important content gap
- Mark completed items with `[x]` instead of `[ ]`
- Refer to `DOCUMENTATION.md` for technical details
- Test locally before deploying: `python -m http.server 8000`
- Git workflow: `git add .` → `git commit -m "message"` → `git push`

---

**Last Review:** 2025-12-16
**Version:** 2.1
**Status:** Core complete, content expansion needed
