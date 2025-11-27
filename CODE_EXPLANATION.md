# Portfolio Website - Code Explanation

This document explains how each file in your portfolio website works.

---

## 📁 File Structure

```
ePortfolio/
├── index.html          # Main HTML file - structure of the website
├── style.css           # CSS file - all visual styling
├── script.js           # JavaScript file - dynamic functionality
├── static/             # Content folder
│   ├── about.md        # About section content (Markdown)
│   ├── experience.md   # Experience section content (Markdown)
│   ├── cv.md           # CV section content (Markdown)
│   ├── projects.json   # Projects data (JSON format)
│   └── PROJECTS_README.md  # Guide for editing projects
└── CODE_EXPLANATION.md # This file
```

---

## 🌐 index.html - The Structure

### What it does:
The HTML file defines the **structure** and **content layout** of your website.

### Key Sections:

#### 1. **`<head>` Section** (Lines 4-40)
```html
<head>
    <meta charset="UTF-8">                    <!-- Character encoding -->
    <meta name="viewport" content="...">      <!-- Mobile responsive -->
    <title>Louis Schmalisch - Portfolio</title>
    <link rel="stylesheet" href="style.css">  <!-- Load CSS styling -->
    <script>...</script>                      <!-- Load theme before page renders -->
</head>
```
- **Meta tags**: Tell the browser how to display the page
- **Links**: Load external resources (CSS, fonts)
- **Inline script**: Loads your saved theme (light/dark) immediately to prevent flash

#### 2. **Header** (Lines 45-342)
```html
<header id="main-header">
    <a href="#"><!-- SVG Logo --></a>         <!-- Clickable logo -->
    <div>Louis Schmalisch</div>               <!-- Your name -->
    <nav>                                      <!-- Navigation menu -->
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#cv">cv</a>
    </nav>
    <button id="theme-toggle">...</button>    <!-- Theme switch -->
    <button id="toggle-navigation-menu">...</button>  <!-- Mobile menu -->
</header>
```
- **Logo**: SVG graphic, clicking triggers party animation
- **Navigation**: Links jump to different sections using `#about`, `#experience`, etc.
- **Theme toggle**: Button to switch between light and dark mode
- **Mobile menu**: Hamburger menu for small screens

#### 3. **Main Content** (Lines 344-374)
```html
<main>
    <section id="about">                      <!-- About section -->
        <div id="about-content">...</div>     <!-- JavaScript fills this -->
    </section>
    <section id="experience">                 <!-- Experience section -->
        <div id="experience-content">...</div>
    </section>
    <section id="projects">                   <!-- Projects section -->
        <div id="projects-content">...</div>
    </section>
    <section id="cv">                         <!-- CV section -->
        <div id="cv-content">...</div>
    </section>
</main>
```
- Each `<section>` has an `id` so navigation links can jump to it
- Each section has a `-content` div where JavaScript loads the actual content
- Shows "Loading..." while content is being fetched

#### 4. **Footer** (Lines 376-379)
```html
<div class="footer">
    <p>Inspired by J Rosser</p>              <!-- Credit -->
</div>
```

#### 5. **Script Loading** (Line 382)
```html
<script src="script.js"></script>            <!-- Load all JavaScript -->
```

---

## 🎨 style.css - The Styling

### What it does:
The CSS file controls **all visual appearance** - colors, fonts, spacing, animations.

### Key Concepts:

#### 1. **CSS Custom Properties (Variables)**
```css
:root {
    --color-global-bg: oklch(98.48% 0 0);    /* Background color */
    --color-global-text: oklch(26.99% ...);  /* Text color */
    --color-link: oklch(55.44% ...);         /* Link color */
    --color-accent: #af67ff;                 /* Accent color (purple) */
}

[data-theme="dark"] {
    --color-global-bg: oklch(23.64% ...);    /* Dark background */
    --color-global-text: oklch(83.54% ...);  /* Light text */
    --color-accent: #5ff26b;                 /* Accent color (green) */
}
```
- **Variables** store colors that can be reused
- **Light theme**: Default colors
- **Dark theme**: Colors when `data-theme="dark"` is set on `<html>`

#### 2. **Utility Classes**
```css
.flex { display: flex; }                     /* Flexbox layout */
.items-center { align-items: center; }       /* Vertical centering */
.mx-auto { margin-left: auto; margin-right: auto; } /* Horizontal centering */
.max-w-3xl { max-width: 57.6rem; }          /* Maximum width */
.mb-16 { margin-bottom: 4rem; }             /* Bottom margin */
```
- **Tailwind-inspired**: Small, reusable classes
- Applied directly in HTML: `<div class="flex items-center">`

#### 3. **Responsive Design**
```css
@media (min-width: 640px) {
    .sm\:flex { display: flex; }             /* Show as flex on screens > 640px */
    .sm\:hidden { display: none; }           /* Hide on screens > 640px */
}
```
- **Breakpoints**: Different styles for different screen sizes
- **sm:** prefix means "small screens and larger"

#### 4. **Special Effects**
```css
.hover-b:hover {
    color: #ffd400;                          /* Turns 'b' letters yellow on hover */
}

.flying-bee {
    animation: flyAway 3s ease-out forwards; /* Bee animation when clicking 'b' */
}
```

---

## ⚙️ script.js - The Functionality

### What it does:
JavaScript adds **interactivity** and **loads content dynamically**.

### Key Classes:

#### 1. **ThemeManager** (Lines 2-49)
```javascript
class ThemeManager {
    constructor() {
        this.theme = localStorage.getItem('theme') || 'light';  // Get saved theme
        this.init();
    }

    setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);  // Apply theme
        localStorage.setItem('theme', theme);                         // Save it
    }

    toggleTheme() {
        const newTheme = this.theme === 'light' ? 'dark' : 'light';   // Switch
        this.setTheme(newTheme);
    }
}
```
**What it does:**
- Remembers your theme choice (light/dark)
- Saves it in browser's localStorage
- Toggles between themes when you click the button

#### 2. **MobileNavigation** (Lines 52-121)
```javascript
class MobileNavigation {
    toggleMenu(header, button) {
        this.menuOpen = !this.menuOpen;

        if (this.menuOpen) {
            header.classList.add('menu-open');     // Show menu
            document.body.style.overflow = 'hidden';  // Prevent scrolling
        } else {
            header.classList.remove('menu-open');  // Hide menu
            document.body.style.overflow = '';     // Allow scrolling
        }
    }
}
```
**What it does:**
- Opens/closes mobile menu when clicking hamburger icon
- Prevents background scrolling when menu is open
- Closes menu when clicking outside or pressing Escape

#### 3. **SmoothScroll** (Lines 124-165)
```javascript
class SmoothScroll {
    init() {
        const navLinks = document.querySelectorAll('a[href^="#"]');  // All # links

        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();                          // Stop default jump
                const targetId = link.getAttribute('href');  // Get #section
                const targetElement = document.querySelector(targetId);  // Find it

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'                       // Smooth scroll
                });
            });
        });
    }
}
```
**What it does:**
- Makes clicking navigation links scroll smoothly instead of jumping
- Accounts for fixed header height

#### 4. **NavigationHighlight** (Lines 168-233)
```javascript
class NavigationHighlight {
    highlightNavLink(activeId) {
        this.navLinks.forEach(link => {
            link.classList.remove('active');                      // Remove all highlights
        });

        const activeLink = document.querySelector(`a[href="#${activeId}"]`);
        if (activeLink) {
            activeLink.classList.add('active');                   // Highlight current
        }
    }
}
```
**What it does:**
- Highlights the current section in the navigation menu
- Updates when you click a navigation link

#### 5. **MarkdownLoader** (Lines 261-470)
```javascript
class MarkdownLoader {
    constructor() {
        this.sections = ['about', 'experience', 'cv'];  // Sections to load
        this.init();
    }

    async loadMarkdown(section) {
        const response = await fetch(`./static/${section}.md`);  // Get markdown file
        const markdown = await response.text();                   // Read content
        const html = this.parseMarkdown(markdown);                // Convert to HTML
        contentElement.innerHTML = html;                          // Display it
    }

    parseMarkdown(markdown) {
        // Convert markdown syntax to HTML
        html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');      // ## → <h2>
        html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');  // **text** → <strong>
        html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');  // [text](url) → <a>
        return html;
    }

    async loadProjects() {
        const response = await fetch('./static/projects.json');  // Get projects
        const projects = await response.json();                   // Parse JSON
        const html = this.renderProjects(projects);               // Build HTML
        contentElement.innerHTML = html;                          // Display it
    }
}
```
**What it does:**
- **Fetches** markdown files from the `static/` folder
- **Converts** markdown syntax (## headings, **bold**, etc.) to HTML
- **Loads** projects from projects.json
- **Renders** project cards with tags, links, and images

#### 6. **Special Effects**
```javascript
// Hover effect for 'b' letters (Lines 473-539)
function applyBHoverEffect(root) {
    // Finds all 'b' and 'B' letters in text
    // Wraps them in <span class="hover-b">
    // CSS makes them turn yellow on hover
}

// Flying bee animation (Lines 542-577)
function spawnBeeFromElement(el) {
    // Creates a bee emoji 🐝
    // Animates it flying off-screen
    // Triggered when clicking any 'b' letter
}

// Party hat explosion (Lines 631-812)
class PartyHatExplosion {
    triggerExplosion() {
        // Creates 12 colorful party hats
        // Creates 20 sparkles
        // Animates them exploding outward
        // Triggered when clicking the logo
    }
}
```

#### 7. **Initialization** (Lines 580-607)
```javascript
document.addEventListener('DOMContentLoaded', () => {
    new ThemeManager();              // Start theme system
    new MobileNavigation();          // Start mobile menu
    new SmoothScroll();              // Enable smooth scrolling
    window.navigationHighlightInstance = new NavigationHighlight();
    new LazyImageLoader();           // Lazy load images
    new MarkdownLoader();            // Load all content
    window.applyBHoverEffect(document.body);  // Apply 'b' hover effect
    new PartyHatExplosion();         // Enable party animation
});
```
**What it does:**
- Waits for page to fully load (`DOMContentLoaded`)
- Initializes all functionality classes
- Everything starts working!

---

## 📝 Markdown Files (static/*.md)

### Format:
Markdown is a simple text format that gets converted to HTML.

### Syntax:
```markdown
# Heading 1               → <h1>Heading 1</h1>
## Heading 2              → <h2>Heading 2</h2>
### Heading 3             → <h3>Heading 3</h3>

**bold text**             → <strong>bold text</strong>
*italic text*             → <em>italic text</em>

[Link text](https://...)  → <a href="https://...">Link text</a>

- List item               → <ul><li>List item</li></ul>
```

### Example (about.md):
```markdown
# About Me

I'm Louis Schmalisch, a Master's student at **Z_GIS, University of Salzburg**.

My interests include:
- Geographic Information Systems
- Remote Sensing
- Machine Learning

[Contact me](mailto:your@email.com)
```

---

## 📊 projects.json Structure

See `static/PROJECTS_README.md` for detailed explanation of the projects.json structure.

---

## 🔧 How It All Works Together

1. **User opens website** (`index.html` loads)
2. **Inline script runs** (loads saved theme before anything renders)
3. **CSS loads** (`style.css` applies all styling)
4. **JavaScript loads** (`script.js` at end of body)
5. **JavaScript initializes**:
   - Sets up theme toggle
   - Sets up mobile menu
   - Sets up smooth scrolling
   - **Fetches content** from `static/` folder
6. **Content displays**:
   - Markdown files converted to HTML
   - Projects rendered as cards
   - All sections populated

---

## 🎯 Common Tasks

### Change your name:
Edit line 290 in `index.html`:
```html
<span class="text-xl font-bold sm:text-2xl">Your Name Here</span>
```

### Add navigation link:
1. Add link in `index.html` (around line 295):
   ```html
   <a href="#newsection">New Section</a>
   ```
2. Add section in `index.html` (around line 370):
   ```html
   <section id="newsection" class="mb-16">
       <div class="prose" id="newsection-content">
           <div class="loading-spinner">Loading...</div>
       </div>
   </section>
   ```
3. Add to JavaScript sections array in `script.js` (line 263):
   ```javascript
   this.sections = ['about', 'experience', 'newsection', 'cv'];
   ```
4. Create `static/newsection.md` with your content

### Change colors:
Edit CSS variables in `style.css` (lines 109-133):
```css
:root {
    --color-accent: #yourcolor;  /* Change accent color */
}
```

### Add a project:
Edit `static/projects.json` - see `static/PROJECTS_README.md` for guide.

---

## 🐛 Troubleshooting

**Content not loading?**
- Check browser console (F12) for errors
- Verify files exist in `static/` folder
- Check file paths in `script.js` match your folder structure

**Styling looks wrong?**
- Verify `style.css` is in the same folder as `index.html`
- Check browser console for CSS loading errors
- Try hard refresh (Ctrl+Shift+R or Cmd+Shift+R)

**Theme not saving?**
- Check if browser allows localStorage
- Try different browser
- Check browser console for errors

---

## 📚 Learn More

- **HTML**: https://developer.mozilla.org/en-US/docs/Web/HTML
- **CSS**: https://developer.mozilla.org/en-US/docs/Web/CSS
- **JavaScript**: https://developer.mozilla.org/en-US/docs/Web/JavaScript
- **Markdown**: https://www.markdownguide.org/basic-syntax/
