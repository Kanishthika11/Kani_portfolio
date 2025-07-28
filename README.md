# Kani's Portfolio - React Version

This is a React conversion of Kani's original HTML/CSS portfolio. The portfolio showcases skills, projects, education, and professional interests.

## 🚀 Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern React Architecture**: Built with functional components and hooks
- **Interactive Elements**: Animated counters, flip cards, carousel for case studies
- **Smooth Navigation**: Single-page application with smooth scrolling
- **Contact Form**: Functional contact form with validation
- **Professional Sections**: About, Education, Skills, Projects, Case Studies, and Contact

## 📁 Project Structure

```
react-portfolio/
├── public/
│   ├── img/          # Copy your images here
│   └── files/        # Copy your PDF files here
├── src/
│   ├── components/   # React components
│   ├── App.jsx       # Main app component
│   ├── main.jsx      # Entry point
│   └── index.css     # Global styles
├── package.json
└── vite.config.js
```

## 🛠️ Setup Instructions

1. **Copy Assets**: Copy all images from your original `img/` folder to `public/img/` and all files from `files/` to `public/files/`

2. **Install Dependencies**:
   ```bash
   cd react-portfolio
   npm install
   ```

3. **Start Development Server**:
   ```bash
   npm run dev
   ```

4. **Build for Production**:
   ```bash
   npm run build
   ```

## 📂 Assets to Copy

Copy these files from your original portfolio:

### Images (to `public/img/`):
- `header1-img.jpg`
- `programming.jpeg` 
- `project-1.png`
- `project-2.png`
- `daa (1).png`
- `coa.png`
- `stat.png`
- `about.jpg`

### Files (to `public/files/`):
- `K Kanishthika-Resume.pdf`
- `iitm_foundation.pdf`
- `ai_infosys.pdf`
- `Blue Professional Business Project Presentation .pptx`
- `Business.pptx`

## 🎨 Components Overview

- **Navigation**: Fixed sidebar navigation with smooth scrolling
- **Header**: Hero section with profile image and social links
- **About**: Personal introduction with download resume button
- **Education**: Timeline of educational qualifications
- **Interests**: Professional interests and areas of exploration
- **Skills**: Animated skill bars with percentages
- **Certifications**: Flip cards showing certificates
- **Projects**: Portfolio projects with links and descriptions
- **CaseStudies**: Carousel of academic case studies
- **Contact**: Contact form with Google Maps integration
- **BackToTop**: Scroll-to-top functionality

## 🔧 Customization

To customize the portfolio:

1. **Personal Information**: Update contact details in `Contact.jsx` and social links throughout
2. **Content**: Modify the data arrays in each component file
3. **Styling**: Edit `index.css` for custom styles
4. **Colors**: Update CSS custom properties for brand colors

## 📱 Responsive Features

- Mobile-friendly navigation with hamburger menu
- Responsive grid layouts
- Optimized images and content for different screen sizes
- Touch-friendly interactive elements

## 🌟 Modern React Features Used

- Functional Components with Hooks
- State Management with useState
- Side Effects with useEffect
- Event Handling
- Conditional Rendering
- Component Composition
- Props and Data Flow

## 🚀 Deployment

The project can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
