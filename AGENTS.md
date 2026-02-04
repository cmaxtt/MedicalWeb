# Agent Guidelines for Medical Website Project

This document provides guidelines for AI agents working on this static medical website project.

## Project Overview

This is a static website replica of a medical template (Medilab). The site uses:
- HTML5 with Bootstrap 5 for layout
- Custom CSS (Bootstrap overrides and component styles)
- Vanilla JavaScript with external libraries (AOS, PureCounter, GLightbox)
- No build system currently (plain static files)

## Development Environment Setup

### Prerequisites
- Node.js (v18+) and npm for tooling (optional)
- Python 3 for simple HTTP server (optional)

### Quick Start
```bash
# Install development dependencies (optional)
npm init -y
npm install --save-dev live-server htmlhint stylelint stylelint-config-standard eslint eslint-config-airbnb-base

# Start local development server
npx live-server --port=8080
# or using Python
python -m http.server 8000
```

## Build, Lint, and Test Commands

### Development Server
```bash
# Using npm script (if added to package.json)
npm run dev

# Direct commands
npx live-server --port=8080 --open=.
python -m http.server 8000
```

### Linting Commands
```bash
# HTML validation
npx htmlhint "**/*.html"

# CSS linting
npx stylelint "**/*.css"

# JavaScript linting
npx eslint "**/*.js"
```

### Testing Commands
Currently no test framework configured. If adding tests:

```bash
# Install Jest
npm install --save-dev jest

# Run all tests
npm test

# Run single test file
npm test -- --testPathPattern=test-file-name

# Run with coverage
npm test -- --coverage
```

### Build Commands (if minification needed)
```bash
# Install minification tools
npm install --save-dev uglify-js clean-css-cli html-minifier

# Minify JS
npx uglifyjs js/custom.js -o js/custom.min.js

# Minify CSS
npx cleancss -o css/custom.min.css css/custom.css

# Minify HTML
npx html-minifier --collapse-whitespace -o index.min.html index.html
```

## Code Style Guidelines

### General Principles
1. **Consistency**: Follow existing patterns in the codebase
2. **Readability**: Write clear, maintainable code
3. **Progressive Enhancement**: Ensure core functionality works without JavaScript
4. **Accessibility**: Follow WCAG 2.1 AA standards

### HTML Guidelines
- Use semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- Indent with 2 spaces (no tabs)
- Use double quotes for attributes
- Include `alt` attributes for all images
- Use ARIA labels where appropriate
- Close all tags (self-closing tags include slash: `<img />`)
- Follow this structure for meta tags:
```html
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
```

### CSS Guidelines
- Use CSS Custom Properties (variables) for colors, spacing, fonts
- Follow BEM naming convention for custom classes: `.block__element--modifier`
- Organize styles in this order:
  1. Reset/Normalize
  2. Variables
  3. Base elements (body, typography)
  4. Layout (grid, containers)
  5. Components (buttons, cards, forms)
  6. Utilities
- Use mobile-first responsive design
- Keep selectors shallow (avoid nesting deeper than 3 levels)
- Use `rem` units for font sizes, `px` for borders, `%` or `vw/vh` for layouts

### JavaScript Guidelines
- Use modern ES6+ syntax (const/let, arrow functions, template literals)
- Avoid global variables; use module pattern or IIFE
- Comment complex logic
- Handle errors gracefully with try-catch where appropriate
- Use event delegation for dynamic elements
- Initialize third-party libraries in a dedicated initialization function
- Follow this structure for event listeners:
```javascript
document.addEventListener('DOMContentLoaded', () => {
  // Initialization code
});
```

### Naming Conventions
- **Files**: kebab-case (`hero-section.html`, `custom-styles.css`)
- **HTML IDs**: kebab-case (`#appointment-form`)
- **CSS Classes**: kebab-case or BEM (`.btn-primary`, `.card__title`)
- **JavaScript Variables**: camelCase (`userName`, `appointmentDate`)
- **Constants**: UPPER_SNAKE_CASE (`MAX_ITEMS`, `API_URL`)

### Import/Module Guidelines
- For external libraries, use CDN links in HTML
- For custom scripts, use `<script>` tags at end of `<body>`
- If using ES modules, use relative paths with `.js` extension
- Order imports: external libraries first, then internal modules

### Error Handling
- Validate form inputs with HTML5 attributes (`required`, `pattern`, `type`)
- Provide user-friendly error messages
- Log errors to console in development only
- Use defensive programming for DOM element selection:
```javascript
const element = document.getElementById('some-id');
if (!element) {
  console.warn('Element not found');
  return;
}
```

### Bootstrap Usage
- Use Bootstrap utility classes for spacing, layout, and responsiveness
- Override Bootstrap styles in `custom.css` using CSS variables when possible
- Keep custom styles in separate files, don't modify Bootstrap source
- Use Bootstrap's grid system for responsive layouts

## Project Structure
```
/
├── index.html          # Main page
├── css/
│   ├── custom.css      # Custom styles (Bootstrap overrides)
│   └── (optional minified version)
├── js/
│   ├── custom.js       # Custom JavaScript
│   └── (optional minified version)
├── img/                # All images
│   ├── hero-bg.jpg
│   ├── about.jpg
│   ├── departments/
│   ├── doctors/
│   └── gallery/
├── AGENTS.md           # This file
└── README.md           # Project documentation
```

## Workflow for Agents
1. **Before making changes**: Run existing linting commands
2. **When adding features**: Follow the code style guidelines
3. **After changes**: Test in multiple browsers (Chrome, Firefox, Safari)
4. **Before committing**: Ensure responsive design works on mobile/tablet/desktop
5. **Documentation**: Update comments for complex logic

## Browser Support
- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- Mobile Safari and Chrome

## Performance Considerations
- Optimize images (already done for downloaded assets)
- Minify CSS/JS for production
- Use lazy loading for images below the fold
- Implement critical CSS in `<head>`
- Defer non-critical JavaScript

## Accessibility Requirements
- All images must have descriptive alt text
- Sufficient color contrast (4.5:1 for normal text)
- Keyboard navigable interface
- Focus indicators for interactive elements
- Semantic HTML structure
- ARIA labels for complex widgets

## Notes for Future Development
- Consider adding a static site generator (11ty, Hugo) if content grows
- Implement form handling with Netlify Forms or Formspree
- Add analytics tracking if needed
- Consider adding PWA capabilities for offline use