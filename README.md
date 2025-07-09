# 💼 React Portfolio 

A sleek, responsive personal portfolio website built with React to showcase about, projects, skills, etc.

---

## 🚀 Live Demo

Add your deployed website link here (e.g., Vercel, Netlify, GitHub Pages):  
`website url`

---

## 🛠 Features

- 🚀 **Hero Section**: Intro/banner with name, title, and short bio.
- 🔧 **Projects**: Showcase projects with descriptions, tech stack, links, and screenshots.
- 📝 **About Me**: Summary of skills, background, tools, and experience.
- 📞 **Contact Form**: Simple form to reach you; can be connected via EmailJS or backend.
- 🎨 **Responsive Design**: Mobile-first layout compatible across devices.
- 🏷️ **Reusable Components**: Clean and modular React component structure.

---

## 📚 Tech Stack

| Layer        | Technology             |
|--------------|------------------------|
| Framework    | React.js (Vite)        |
| Styling      | CSS / Tailwind (based on your setup) |
| Icons        | React Icons (FontAwesome, etc.) |
| Routing      | React Router           |
| Deployment   | Vercel / Netlify / GitHub Pages |

---

## 📁 Project Structure

```
react-portfolio/
├── public/
│ └── favicon.svg
├── src/
│ ├── assets/
│ │ └── project.png
│ ├── components/   # Reusable React components
│ ├── App.jsx       # Main App component
│ ├── main.jsx      # Entry point
│ └── index.css     # Tailwind base styles
├── .gitignore
├── eslint.config.js
├── index.html      
├── package.json
├── package-lock.json
├── postcss.config.js   # Tailwind + PostCSS config
├── tailwind.config.js  # Tailwind custom settings
├── vite.config.js      
└── README.md
```

---

## 🎨 Customization Guide

- **Hero section**: Update your name, title, bio, and image in `src/components/Hero.jsx`.
- **Projects**: Edit data in `src/data/projects.js` or wherever your project list is defined.
- **Skills/About**: Modify `About.jsx` or relevant component/data source.
- **Contact form**: Configure EmailJS or connect your backend API.
- **Theme**: If using light/dark mode, update the toggle logic and styles in the theme component or context.

---

## 🧩 Setup & Installation

1. **Clone the repo**
   ```bash
   git clone https://github.com/dhruv-kapadia03/react-portfolio.git
   cd react-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run development server**
   ```bash
   npm start
   # or
   yarn start
   ```
   Open [http://localhost:5173] to view it in the browser.

4. **Build for production**
   ```bash
   npm run build
   # or
   yarn build
   ```
   The optimized build will be available in the `build/` folder.

---

## 📦 Deployment

### GitHub Pages
- Add this to `package.json`:
  ```json
  "homepage": "https://<username>.github.io/<repo-name>",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
  ```
- Deploy:
  ```bash
  npm install --save-dev gh-pages
  npm run deploy
  ```

### Vercel / Netlify
- Connect your repo to the platform.
- Use:
  - **Build command**: `npm run build`
  - **Publish directory**: `build/`
- Push changes to deploy automatically.
