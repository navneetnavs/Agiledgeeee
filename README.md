# Agiledge Website

A modern, professional SaaS/IT company website built with React, Vite, and Tailwind CSS.

## Overview
Agiledge is a cloud-first engineering and DevOps company. This website showcases Agiledge's services, expertise, and client success stories, and provides a seamless experience for potential clients and candidates.

- **Modern, responsive UI** with beautiful gradients, glassmorphism, and animated sections
- **Multi-section landing page**: Hero, Services, Why Choose Us, Testimonials, FAQ, and more
- **Dedicated pages**: About Us, Contact Us (with animated hero and form), Careers (with glassmorphism application form)
- **Animated testimonials** and interactive FAQ
- **Internationalization-ready** (i18next)
- **Accessible, mobile-friendly, and fast**

## Features
- Cloud & DevOps services showcase
- Animated hero and testimonial sections
- FAQ with smooth expand/collapse
- Careers page with file upload and modern form
- Responsive navigation and footer
- Modern typography (Inter for body, Poppins/Space Grotesk for headings)
- Beautiful, consistent gradient backgrounds
- Modular, maintainable React components

## Tech Stack
- **React 19** (functional components, hooks)
- **Vite** (fast dev/build)
- **Tailwind CSS** (utility-first styling, custom fonts)
- **Framer Motion** (animations)
- **GSAP, Keen Slider, Locomotive Scroll** (optional advanced animations)
- **i18next, react-i18next** (internationalization)
- **ESLint** (code quality)

## Folder Structure
```
Agiledge/
├── public/                # Static assets
├── src/
│   ├── assets/            # Images, SVGs
│   ├── components/        # All React components (Navbar, HeroSection, ServicesSection, etc.)
│   ├── App.jsx            # Main app component with routes
│   ├── main.jsx           # Entry point
│   ├── index.css          # Tailwind and global styles
│   └── App.css            # App-specific styles
├── package.json           # Project metadata and scripts
├── tailwind.config.js     # Tailwind config (custom fonts, colors)
├── postcss.config.js      # PostCSS config
├── vite.config.js         # Vite config
└── README.md              # This file
```

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm (v9+ recommended)

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```
Visit [http://localhost:5173](http://localhost:5173) to view the site.

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Linting
```bash
npm run lint
```

## Main Scripts
- `dev` – Start local dev server
- `build` – Build for production
- `preview` – Preview production build
- `lint` – Run ESLint

## Customization
- **Fonts:** Inter (body), Poppins/Space Grotesk (headings) via Google Fonts
- **Colors:** Modern blue/green gradients, glassmorphism, and soft backgrounds
- **Animations:** Framer Motion for fade/slide, CSS keyframes for testimonial carousel
- **Forms:** Contact and Careers forms with validation and file upload

## Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repo
2. Create your feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a pull request

## License
This project is for demonstration and internal use. For commercial use, please contact Agiledge.

---

**Agiledge** – Cloud Innovation, Engineered for You
