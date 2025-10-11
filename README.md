# Axl Landing Page

A modern, responsive landing page for the Axl Discord bot, designed to match the application's dark theme and green accent colors.

## Features

- Dark theme matching the Axl application
- Responsive design (mobile-friendly)
- Direct download link to the latest installer
- Features showcase
- Modern, clean aesthetic with smooth animations

## Deployment to GitHub Pages

### Step 1: Create a New Public Repository

1. Go to https://github.com/new
2. Repository name: `axl`
3. Description: "Landing page for Axl - AI Gaming Companion for Discord"
4. Make it **PUBLIC** (important for GitHub Pages)
5. Do NOT initialize with README (we already have files)
6. Click "Create repository"

### Step 2: Push Landing Page Files

From your terminal in the `landing-page` folder:

```bash
cd landing-page

# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial landing page"

# Add remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/rblaurent/axl.git

# Rename branch to main
git branch -M main

# Push
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository: `https://github.com/rblaurent/axl`
2. Click "Settings"
3. Scroll to "Pages" in the left sidebar
4. Under "Build and deployment":
   - Source: Deploy from a branch
   - Branch: `main`
   - Folder: `/ (root)`
5. Click "Save"

### Step 4: Wait and Access

- GitHub Pages will build your site (takes 1-2 minutes)
- Your site will be live at: `https://rblaurent.github.io/axl/`
- You'll get a green checkmark when deployment is complete

## Updating the Landing Page

When you need to update the page:

1. Edit `index.html` or `style.css` locally
2. Commit and push changes:
   ```bash
   git add .
   git commit -m "Update landing page"
   git push
   ```
3. GitHub Pages automatically rebuilds (1-2 minutes)

## Updating Download Links

When you release a new version (e.g., v0.2.0):

1. Find all instances of the download URL in `index.html`
2. Update from `v0.1.0` to `v0.2.0`
3. Update the version badge text
4. Commit and push

Example:
```html
<!-- Before -->
<a href="https://github.com/rblaurent/redroaster/releases/download/v0.1.0/AxlSetup.exe">

<!-- After -->
<a href="https://github.com/rblaurent/redroaster/releases/download/v0.2.0/AxlSetup.exe">
```

## Customization

### Colors

Edit CSS variables in `style.css`:

```css
:root {
    --bg-dark: #1e1f22;           /* Main background */
    --bg-darker: #15161a;         /* Darker sections */
    --bg-card: #2b2d31;           /* Cards background */
    --accent-green: #43b581;      /* Primary buttons */
    --accent-green-hover: #3ca374; /* Button hover */
    --text-primary: #ffffff;      /* Headings */
    --text-secondary: #b5bac1;    /* Body text */
}
```

### Content

Edit `index.html` to change:
- Hero title and subtitle
- Features descriptions
- System requirements
- Footer information

## Files Structure

```
landing-page/
├── index.html      # Main HTML page
├── style.css       # Styling and theme
└── README.md       # This file
```

## Support

For issues or questions, visit: https://github.com/rblaurent/redroaster/issues
