# Orbit - SaaS Landing Page

Orbit is a high-performance, investor-quality landing page designed for modern SaaS products. It features a dark-mode aesthetic, smooth scroll animations, and a responsive layout built entirely with native web technologies.

## 🚀 Features

- **Modern Aesthetic**: Dark mode with glassmorphism, gradients, and clean typography.
- **Scroll Animations**: Custom intersection observer logic for element reveal effects.
- **Responsive Design**: Mobile-first approach with a custom hamburger menu and tablet optimizations.
- **Interactive Elements**: FAQ accordion, sticky navigation, and hover effects.
- **Mock Dashboard**: CSS-only product preview visualization.
- **Zero Dependencies**: Built with pure HTML, CSS, and Vanilla JavaScript.

## 📂 File Structure

The project is designed to be organized into the following structure:

```
/orbit-landing-page
├── index.html      # Main HTML structure and content
├── styles.css      # CSS variables, design system, and animations
└── script.js       # Navigation toggle, FAQ logic, and Scroll Observers
```

Note: The current distribution may combine these into a single file for portability, but separating them is recommended for larger deployments.

## 🛠️ Tech Stack

- **HTML5**: Semantic markup (`<header>`, `<nav>`, `<section>`, `<footer>`).
- **CSS3**:
  - CSS Grid & Flexbox for layout.
  - CSS Custom Properties (Variables) for theming.
  - Backdrop-filter for glass effects.
- **JavaScript**:
  - ES6+ syntax.
  - IntersectionObserver API for performance-friendly scroll animations.

## 🚀 Getting Started

- **Download**: Get the source code.
- **Run**: Simply open `index.html` in any modern web browser (Chrome, Firefox, Safari, Edge).
- **No Build Step**: This project uses vanilla technologies and requires no `npm install` or build process.

## 🎨 Customization

### Changing the Color Scheme

The design relies on CSS variables found in the `:root` pseudo-class. To change the brand color (currently Indigo), update the following:

```css
:root {
    /* Change this hex code to your brand color */
    --accent-primary: #6366f1;
    
    /* Adjust the glow effect color */
    --accent-glow: rgba(99, 102, 241, 0.15);
}
```

### Modifying Animations

Scroll animations are controlled by the `.reveal` class in CSS and the `IntersectionObserver` in JavaScript.

- **Speed**: Change `transition-duration` in `.reveal`.
- **Delay**: Use helper classes `.reveal-delay-1`, `.reveal-delay-2`, etc.

## 📱 Responsiveness

The layout includes specific breakpoints for:

- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px (2-column grids)
- **Mobile**: < 768px (Stacked layout, hamburger menu)

## 📄 License

This project is available for use in personal and commercial portfolios.
