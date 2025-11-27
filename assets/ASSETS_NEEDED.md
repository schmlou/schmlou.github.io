# 📸 Assets You Need to Add

## ✅ Folder Created
The `assets/` folder has been created at: `ePortfolio/assets/`

---

## 📋 Checklist of Files to Add:

### 🔴 **REQUIRED** (referenced in your code)

- [ ] **`favicon.ico`** - Browser tab icon
  - **Where**: Save in `assets/favicon.ico`
  - **Size**: 16x16 or 32x32 pixels
  - **How to create**:
    - Option 1: Use https://favicon.io/favicon-generator/
    - Option 2: Use https://realfavicongenerator.net/
    - Option 3: Convert a PNG: https://convertio.co/png-ico/
  - **Referenced in**: `index.html` line 15

- [ ] **`Louis_Schmalisch_CV.pdf`** - Your CV/Resume PDF
  - **Where**: Save in `assets/Louis_Schmalisch_CV.pdf`
  - **What**: Your full CV as a PDF file
  - **Referenced in**: `static/cv.md` (download button)
  - **Note**: Users can download this when they click the "Download Full CV" button

---

### 🟡 **RECOMMENDED** (for better portfolio)

- [ ] **`profile-photo.jpg`** - Your professional photo
  - **Where**: Save in `assets/profile-photo.jpg`
  - **Size**: 400x400 pixels (or similar square)
  - **Format**: JPG or PNG
  - **Use for**: About section (add to `static/about.md`)
  - **Tips**: Use a professional headshot, clear background, good lighting

---

### 🟢 **OPTIONAL** (project screenshots)

- [ ] **`wildfire-project.jpg`** - Wildfire Risk Assessment screenshot
- [ ] **`urban-heat.jpg`** - Urban Heat Island screenshot
- [ ] **`land-cover.jpg`** - Land Cover Classification screenshot
  - **Where**: Save in `assets/` folder
  - **Size**: 800x600 pixels (or 16:9 ratio)
  - **Format**: JPG or PNG
  - **Referenced in**: `static/projects.json`
  - **Note**: Projects will work without images, they just won't have visuals

---

## 🚀 Quick Start Guide:

### 1. **Get Your Favicon** (5 minutes)
```
1. Go to https://favicon.io/favicon-generator/
2. Type "LS" (your initials)
3. Choose colors (use #5ff26b for green or #af67ff for purple to match your logo)
4. Download the favicon
5. Save as `assets/favicon.ico`
```

### 2. **Add Your Photo** (if you have one)
```
1. Find a professional photo of yourself
2. Crop to square (400x400 pixels recommended)
3. Save as `assets/profile-photo.jpg`
4. Add to your about.md file
```

### 3. **Add Project Screenshots** (later)
```
1. Take screenshots of your projects
2. Resize to ~800x600 pixels
3. Save with the correct filenames
4. They'll automatically appear on your site
```

---

## 📝 How to Add Images to Your Site:

### **For Profile Photo in About Section:**

Edit `static/about.md` and add:
```markdown
# About Me

<img src="assets/profile-photo.jpg" alt="Louis Schmalisch" style="float: right; max-width: 200px; border-radius: 10px; margin: 0 0 20px 20px;">

Your about text here...
```

### **For Project Images:**

They're already configured in `static/projects.json`. Just add the image files to the `assets/` folder with the correct names.

---

## ⚠️ Until You Add Real Images:

- **Favicon**: Browser will show default icon
- **Profile photo**: Won't display (no error, just no image)
- **Project images**: Won't display (but project cards will still show title, description, tags)

Your site will work perfectly fine without images - they're just visual enhancements!

---

## 🎨 Image Optimization Tips:

Before uploading, optimize your images:
- **Compress**: Use https://tinypng.com/ to reduce file size
- **Resize**: Use https://imageresizer.com/ if images are too large
- **Target size**: Keep under 500KB each for fast loading

---

## ❓ Need Help?

Check the `README.md` file in this folder for more details and resources.
