# Portfolio Setup Guide

## ✅ What's Been Implemented

### 1. Social Media Icons in About Section

**Location**: [static/about.md](static/about.md)

You now have clickable social media icons for:

- 🐙 **GitHub**
- 💼 **LinkedIn**
- 🐦 **Twitter/X**
- 📧 **Email**
- 🔬 **ORCID** (for academic publications)

**What you need to do:**
Edit [static/about.md](static/about.md) and replace these placeholder URLs with your actual links:

- Line 12: `https://github.com/yourusername` → Your GitHub
- Line 18: `https://linkedin.com/in/yourusername` → Your LinkedIn
- Line 24: `https://twitter.com/yourusername` → Your Twitter/X
- Line 30: `your.email@example.com` → Your email
- Line 36: `https://orcid.org/0000-0000-0000-0000` → Your ORCID (or remove if you don't have one)

**To remove an icon:**
Just delete the entire `<a>...</a>` block for that social network.

---

### 2. CV PDF Download Button

**Location**: [static/cv.md](static/cv.md)

A download button has been added at the top of your CV section.

**What you need to do:**

1. Export your CV as a PDF
2. Name it: `Louis_Schmalisch_CV.pdf`
3. Save it in: `assets/Louis_Schmalisch_CV.pdf`

When visitors click "📄 Download Full CV (PDF)", they'll download your PDF!

---

## 📁 Files You Need to Add to `assets/`

### Priority 1 - Essential:

1. **`favicon.ico`** - Browser tab icon
2. **`Louis_Schmalisch_CV.pdf`** - Your CV PDF for download

### Priority 2 - Recommended:

3. **`profile-photo.jpg`** - Your photo for About section

### Priority 3 - Optional:

4. **`wildfire-project.jpg`** - Project screenshots
5. **`urban-heat.jpg`**
6. **`land-cover.jpg`**

Check [assets/ASSETS_NEEDED.md](assets/ASSETS_NEEDED.md) for detailed instructions!

---

## 🎨 Customizing Your Social Links

### Example with your real links:

```markdown
<a href="https://github.com/LouisSchmalisch" target="_blank">
  <!-- GitHub icon -->
</a>

<a href="https://linkedin.com/in/louis-schmalisch" target="_blank">
  <!-- LinkedIn icon -->
</a>

<a href="mailto:louis.schmalisch@sbg.ac.at">
  <!-- Email icon -->
</a>
```

### To add more social networks:

**ResearchGate:**

```html
<a
  href="https://researchgate.net/profile/Your-Name"
  target="_blank"
  style="text-decoration: none;"
>
  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
    <path
      d="M19.586 0c-.818 0-1.508.19-2.073.565-.563.377-.97.936-1.213 1.68a3.193 3.193 0 0 0-.112.437 8.365 8.365 0 0 0-.078.53 9 9 0 0 0-.05.727c-.01.282-.013.621-.013 1.016a31.121 31.121 0 0 0 .014 1.017 9 9 0 0 0 .05.727 7.946 7.946 0 0 0 .077.53c.025.153.063.306.112.436.243.745.65 1.303 1.214 1.68.565.376 1.255.564 2.073.564.817 0 1.508-.188 2.073-.564.563-.377.97-.935 1.213-1.68.05-.13.088-.282.113-.436.026-.172.053-.35.078-.53a8.644 8.644 0 0 0 .064-1.743 9.053 9.053 0 0 0-.014-1.017 8.365 8.365 0 0 0-.05-.727 7.946 7.946 0 0 0-.077-.53 3.193 3.193 0 0 0-.113-.437c-.243-.744-.65-1.303-1.213-1.68C21.095.19 20.404 0 19.586 0zM7.868 0c-.818 0-1.508.19-2.073.565-.564.377-.971.936-1.214 1.68a3.193 3.193 0 0 0-.112.437 8.365 8.365 0 0 0-.078.53 9 9 0 0 0-.05.727c-.01.282-.013.621-.013 1.016.0.282.003.621.013 1.017.01.258.026.495.05.727.025.18.052.358.078.53.025.153.063.306.112.436.243.745.65 1.303 1.214 1.68.565.376 1.255.564 2.073.564.817 0 1.508-.188 2.073-.564.563-.377.97-.935 1.213-1.68.05-.13.088-.282.112-.436.026-.172.053-.35.078-.53a8.644 8.644 0 0 0 .064-1.743A9.053 9.053 0 0 0 10.95 4a8.365 8.365 0 0 0-.05-.727 7.946 7.946 0 0 0-.078-.53 3.193 3.193 0 0 0-.112-.437c-.243-.744-.65-1.303-1.213-1.68C9.376.19 8.685 0 7.868 0zm8.33 9.65c-.818 0-1.508.188-2.072.563-.564.377-.971.936-1.214 1.68a3.193 3.193 0 0 0-.112.437 8.365 8.365 0 0 0-.078.53 9 9 0 0 0-.05.727c-.01.282-.013.621-.013 1.017.0.394.003.733.013 1.016.01.257.026.495.05.727.025.18.052.358.078.53.025.153.063.306.112.436.243.745.65 1.303 1.214 1.68.564.376 1.254.564 2.072.564.818 0 1.508-.188 2.073-.564.563-.377.97-.935 1.213-1.68.05-.13.088-.282.112-.436.026-.172.053-.35.078-.53a8.644 8.644 0 0 0 .064-1.743c0-.395-.003-.735-.014-1.017a9.053 9.053 0 0 0-.05-.727 8.365 8.365 0 0 0-.077-.53 3.193 3.193 0 0 0-.113-.437c-.243-.744-.65-1.303-1.213-1.68-.565-.375-1.255-.563-2.073-.563z"
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
  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
    <path
      d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 9a8 8 0 0 1 7.162 4.44L24 9.5z"
    />
  </svg>
</a>
```

---

## 🎯 Quick Checklist

- [ ] Update social media links in [static/about.md](static/about.md)
- [ ] Remove any social icons you don't want
- [ ] Add your CV PDF to `assets/Louis_Schmalisch_CV.pdf`
- [ ] Add favicon to `assets/favicon.ico`
- [ ] (Optional) Add profile photo
- [ ] (Optional) Add project screenshots

---

## 💡 Tips

1. **For the CV PDF**: Make sure it's named exactly `Louis_Schmalisch_CV.pdf` or update the link in [static/cv.md](static/cv.md) line 2

2. **Social icons will match your theme**: They automatically change color based on light/dark mode

3. **Icons are clickable**: Hover effects are built-in via CSS

4. **Email opens mail client**: The email link will open the user's default email app

---

## 🐛 Troubleshooting

**Social icons not showing?**

- Make sure you edited [static/about.md](static/about.md)
- Clear your browser cache and refresh

**Download button not working?**

- Check that the PDF is in `assets/Louis_Schmalisch_CV.pdf`
- Check the filename matches exactly (case-sensitive!)

**Icons wrong color?**

- They inherit the text color from your theme
- Should work in both light and dark mode automatically
