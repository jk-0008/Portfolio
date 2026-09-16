# Jaya Ganesh P - Python Full Stack Developer Portfolio

A modern, responsive, and performance-optimized portfolio website built with **React.js** and **Vite**. Tailored specifically to highlight competencies in **Python**, **Django**, **REST APIs**, **MySQL**, and **React.js**.

---

## 🚀 Live Demo & Sections

- **Home**: Intro hero section, role badge, social profiles, and quick CTAs.
- **About**: B.E. in Computer Science & Engineering background, full-stack philosophy, and career objective.
- **Skills**: Categorized competencies across Backend (Python, Django, REST API), Database (MySQL), Frontend (React.js, JavaScript, HTML5/CSS3), and Version Control (Git, GitHub, Postman).
- **Projects**: Comprehensive showcase including the flagship **Jobi Ai / AI Job Portal** project with live interactive demo preview, screenshots, test credentials, and direct Vercel & GitHub repository links.
- **Experience / Internship**: In-depth coverage of the **QSpiders** Python Full Stack internship, outlining core skills and responsibilities.
- **Resume**: Direct "Download Resume" buttons linked to `public/resume.pdf`.
- **Contact**: Integrated contact methods (Gmail, LinkedIn, GitHub, Location) and direct message form.

---

## 📂 Project Structure

```text
portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        # Sticky navigation with active links & mobile menu
│   │   ├── Home.jsx          # Hero section with interactive terminal code card
│   │   ├── About.jsx         # Education & career objective
│   │   ├── Skills.jsx        # Categorized skills & tech pills
│   │   ├── Projects.jsx      # AI Job Portal showcase with live demo, screenshot modal & test accounts
│   │   ├── Experience.jsx    # QSpiders internship timeline & resume banner
│   │   └── Contact.jsx       # Contact links & interactive message form
│   │
│   ├── App.jsx               # Main portfolio layout
│   ├── App.css               # Modern dark-mode & glassmorphism styling
│   └── main.jsx              # Application entry point
│
├── public/
│   ├── jobi-demo-preview.png # Live Candidate Portal demo screenshot
│   ├── jobi-recruiter-demo.png# Recruiter ATS workspace demo screenshot
│   ├── profile.jpg           # Profile photo
│   └── resume.pdf            # Downloadable resume file
│
├── index.html                # HTML template with Google Fonts & metadata
├── vite.config.js            # Vite configuration
├── package.json              # Dependencies and scripts
└── README.md                 # Project documentation
```

---

## 🛠️ Quickstart (Run Locally)

### 1. Prerequisites
Ensure you have **Node.js** (v18 or higher) and **npm** installed.

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:3000` (or the port shown in your terminal).

### 4. Build for Production
```bash
npm run build
```
This generates an optimized static production bundle in the `dist/` directory ready for deployment.

---

## ✏️ Customization & Personalization

1. **Update Your Resume**:
   - Replace `public/resume.pdf` with your actual resume PDF file (keep the file name `resume.pdf`).
2. **Update Social & Contact Links**:
   - In `src/components/Home.jsx` and `src/components/Contact.jsx`, replace placeholder URLs (`https://github.com`, `https://linkedin.com`, and `jayaganesh@example.com`) with your real profile links.
3. **Update Project Repository Links**:
   - In `src/components/Projects.jsx`, modify `githubLink` and `demoLink` to point to your actual GitHub repositories.

---

## 🌐 Free One-Click Deployment

### Option A: Vercel (Recommended)
1. Push this project to your GitHub account.
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your repository and click **Deploy**. Vercel will automatically detect Vite and publish your site!

### Option B: Netlify
1. Run `npm run build`.
2. Drag and drop the generated `dist/` folder into Netlify's web console, or connect your GitHub repository.

---

## 📄 License
This portfolio template is open source and available under the [MIT License](LICENSE).
