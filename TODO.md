# ePortfolio Completion TODO List

## 📝 Content Personalization

### Social Links & Contact

- [x] Update social media links in all HTML files (index.html, about.html, projects.html, experience.html, cv.html)
  - [x] Replace `https://github.com/schmlou` with your actual GitHub URL
  - [x] Replace `https://www.linkedin.com/in/louisschmalisch/` with your actual LinkedIn URL
  - [x] Replace `mailto:louisschmalisch@gmail.com` with your actual email address
  - [x] Add any additional social links (Twitter, portfolio site, etc.)

### About Section

- [ ] Edit `static/about.md` (home page brief version)
  - [ ] Write a short 2-3 sentence introduction about yourself
  - [ ] Highlight your key expertise or focus areas
- [ ] Edit `static/about-full.md` (detailed about page)
  - [ ] Write comprehensive background and story
  - [ ] Add your skills, interests, and goals
  - [ ] Include any relevant personal or professional details

### Experience Section

- [ ] Edit `static/experience.md` (home page brief version)
  - [ ] Add 2-3 most recent or relevant positions
  - [ ] Keep descriptions concise
- [ ] Edit `static/experience-full.md` (detailed experience page)
  - [ ] Add all relevant work experience
  - [ ] Include full job descriptions and achievements
  - [ ] Add education background
  - [ ] Include certifications or awards if applicable

### CV Section

- [ ] Edit `static/cv.md` (home page brief version)
  - [ ] Add summary of qualifications
  - [ ] List key skills
- [ ] Edit `static/cv-full.md` (detailed CV page)
  - [ ] Add complete resume content
  - [ ] Include all sections: education, experience, skills, projects
  - [ ] Format professionally

### Projects

- [ ] Edit `static/projects.json`
  - [ ] Remove example projects
  - [ ] Add all your real projects with:
    - [ ] Accurate titles and descriptions
    - [ ] Correct years
    - [ ] Real GitHub/demo links (or remove link field if none)
    - [ ] Technologies used
    - [ ] Your role and key achievements
    - [ ] Add PDF downloads if available (place PDFs in `assets/projects/` folder)
- [ ] Ensure projects are complete and showcase your best work

## 🎨 Assets & Media

### Required Assets

- [ ] Add favicon

  - [ ] Create or find a favicon.ico file (16x16 or 32x32 pixels)
  - [ ] Place it in the root directory: `c:\Users\louis\Documents\eP_self\favicon.ico`
  - [ ] Verify it's linked in all HTML files (should already be present in `<head>`)

- [x] Add CV PDF
  - [x] Export your CV as a PDF file
  - [x] Place it in `static/` folder as `cv.pdf`
  - [x] Verify download link works on CV page

### Optional Assets (Recommended)

- [x] Add profile photo

  - [x] Take or select a professional photo
  - [x] Optimize for web (recommend 400x400px, < 200KB)
  - [x] Save as `static/profile-photo.jpg` or `static/profile-photo.png`
  - [x] Update image reference in HTML if you want to use it

- [ ] Add project screenshots/thumbnails

  - [ ] Create screenshots for each project
  - [ ] Optimize images (recommend < 500KB each)
  - [ ] Save in `assets/projects/` folder
  - [ ] Reference in `projects.json` if you want to display them

- [ ] Add project PDFs (optional)
  - [ ] Export project papers/documentation as PDFs
  - [ ] Place in `assets/projects/` folder (e.g., `wildfire-paper.pdf`)
  - [ ] Add to `projects.json` under `links.pdf`
  - [ ] "📄 Download PDF" button will appear automatically

## 🧪 Testing & Quality Assurance

### Content Review

- [ ] Proofread all markdown files for typos and grammar
- [ ] Check that all links open correctly
- [ ] Verify email links work (mailto:)
- [ ] Test all external links (GitHub, LinkedIn, project demos)

### Visual & Functional Testing

- [ ] Test on different browsers (Chrome, Firefox, Safari, Edge)
- [ ] Test responsive design on mobile devices
- [x] Verify dark/light theme toggle works on all pages
- [ ] Check that navigation works correctly
- [ ] Verify projects list shows all projects sorted by year
- [ ] Test that detail pages (about.html, experience.html, cv.html) load full content
- [ ] Verify home page shows brief content versions

### Cross-page Consistency

- [x] Verify logo is consistent across all pages
- [x] Check that footer content matches on all pages
- [x] Ensure navigation menu works from every page
- [x] Verify theme preference persists across page navigation

## 🚀 Deployment

### GitHub Setup

- [ ] Create GitHub account (if you don't have one)
- [ ] Create new repository for your ePortfolio
- [ ] Initialize git in your project (if not already done)
  ```bash
  git init
  git add .
  git commit -m "Initial commit: Complete ePortfolio"
  ```
- [ ] Connect to GitHub remote
  ```bash
  git remote add origin https://github.com/yourusername/your-repo-name.git
  git branch -M main
  git push -u origin main
  ```

### GitHub Pages Deployment

- [x] Go to repository Settings on GitHub
- [x] Navigate to "Pages" section
- [x] Select "main" branch as source
- [x] Save and wait for deployment
- [x] Visit your site at `https://yourusername.github.io/your-repo-name/`
- [x] Test all functionality on live site

### Post-Deployment

- [ ] Update README.md with live site URL
- [ ] Share your ePortfolio link
- [ ] Add site URL to your resume/CV
- [ ] Update LinkedIn with portfolio link

## 🎯 Optional Enhancements

### Design & Styling

- [x] Review and refine colour choices for better visual harmony
  - [x] Review title colors (currently light blue)
  - [x] Review accent colors
  - [x] Check color contrast and accessibility
  - [x] Consider overall color scheme consistency

### Performance Optimization

- [ ] Compress images further if needed
- [ ] Consider adding loading animations
- [ ] Test page load speed

### SEO & Metadata

- [ ] Add meta descriptions to all HTML pages
- [ ] Add Open Graph tags for social media sharing
- [ ] Consider adding Google Analytics (optional)

### Accessibility

- [x] Verify color contrast meets WCAG standards
- [ ] Test with screen readers
- [ ] Add alt text to all images
- [ ] Ensure keyboard navigation works

## 📋 Quick Reference Files

- **Content Files**: All located in `static/` folder

  - Short versions: `about.md`, `experience.md`, `cv.md`
  - Full versions: `about-full.md`, `experience-full.md`, `cv-full.md`
  - Projects: `projects.json`

- **HTML Pages**: All in root directory

  - `index.html` - Home/landing page
  - `about.html` - Full about page
  - `experience.html` - Full experience page
  - `cv.html` - Full CV page
  - `projects.html` - Projects list page

- **Documentation**:
  - `DOCUMENTATION.md` - Complete technical documentation
  - `TODO.md` - This file

## ✅ Completion Checklist

Once you've completed all the above:

- [ ] All content is personalized with real information
- [ ] All links are updated and working
- [ ] All required assets are added
- [ ] Site has been tested thoroughly
- [ ] Site is deployed to GitHub Pages
- [ ] Live site is accessible and functional

---

**Note**: You can mark items as complete by changing `- [ ]` to `- [x]` in this file as you work through the tasks.

**For help**, refer to `DOCUMENTATION.md` for detailed technical information about the system.
