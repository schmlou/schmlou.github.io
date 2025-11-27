# Projects.json Structure Guide

This document explains how the `projects.json` file works.

## File Structure

The `projects.json` file contains an **array** of project objects. Each project has the following fields:

### Required Fields

- **`title`** (string): The name of your project
  - Example: `"Wildfire Risk Assessment Using Machine Learning"`

- **`description`** (string): A brief summary of what the project does/achieves
  - Example: `"Developed a predictive model for wildfire risk assessment..."`

- **`year`** (number): When the project was completed
  - Example: `2024`

- **`tags`** (array of strings): Keywords describing the project (used for colored badges)
  - Example: `["machine-learning", "remote-sensing", "gis"]`

### Optional Fields

- **`image`** (string): Path to an image file showcasing the project
  - Example: `"assets/wildfire-project.jpg"`
  - Leave out this field if you don't have an image

- **`venue`** (string): Where the project was conducted
  - Example: `"University of Salzburg"` or `"Master's Thesis"` or `"Internship at Company X"`

- **`authors`** (string): Who worked on the project
  - Example: `"Louis Schmalisch"` or `"Louis Schmalisch, Dr. Jane Doe"`

- **`links`** (object): URLs to related resources
  - **`paper`**: Link to published paper or documentation
  - **`code`**: Link to GitHub repository or source code
  - **`demo`**: Link to live demo or interactive version

  Example:
  ```json
  "links": {
    "paper": "https://example.com/paper.pdf",
    "code": "https://github.com/username/repo"
  }
  ```

## How to Add a New Project

1. Open `projects.json`
2. Copy one of the existing project objects (everything from `{` to `}`)
3. Add a **comma** after the previous project's closing `}`
4. Paste your new project
5. Edit all the values to match your new project
6. Save the file

## Example Project

```json
{
  "title": "Your Project Name",
  "description": "What your project does and why it's interesting.",
  "image": "assets/your-project-image.jpg",
  "venue": "Where you did this project",
  "authors": "Your Name",
  "year": 2024,
  "tags": ["tag1", "tag2", "tag3"],
  "links": {
    "paper": "https://link-to-paper.com",
    "code": "https://github.com/yourname/yourproject"
  }
}
```

## Common Tags

Use these tags for consistency and proper styling:

- **Programming:** `"python"`, `"javascript"`, `"r"`, `"java"`, `"typescript"`
- **GIS:** `"gis"`, `"remote-sensing"`, `"mapping"`, `"spatial-analysis"`
- **Machine Learning:** `"machine-learning"`, `"deep-learning"`, `"neural-networks"`, `"classification"`
- **Data:** `"data-analysis"`, `"data-visualization"`, `"big-data"`
- **Web:** `"web-dev"`, `"frontend"`, `"backend"`, `"full-stack"`
- **Other:** `"climate"`, `"urban-planning"`, `"research"`, `"open-source"`

Tags are automatically styled with different colors in the CSS!
