# Medical Website Replica

A static website replica of a medical template (Medilab).

## Features

- Responsive design using Bootstrap 5
- Modern medical website layout
- Interactive elements (smooth scrolling, counters, lightbox gallery)
- Contact and appointment forms
- Department tabs and doctor profiles

## Project Structure

```
/
├── index.html          # Main HTML page
├── css/                # Custom CSS styles
├── js/                 # JavaScript files
├── img/                # Images and assets
├── AGENTS.md           # Guidelines for AI agents
└── package.json        # Development dependencies
```

## Getting Started

### Prerequisites
- Node.js (optional, for development tools)
- Python 3 (optional, for simple HTTP server)

### Installation

1. Clone the repository
2. Install dependencies (optional):
   ```bash
   npm install
   ```

### Development

Start a local development server:

```bash
npm run dev
# or
npx live-server --port=8080
# or
python -m http.server 8000
```

### Linting

Check code quality:

```bash
npm run lint
# or individually:
npm run htmlhint
npm run stylelint
npm run eslint
```

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## Accessibility

This website aims to meet WCAG 2.1 AA standards with:
- Semantic HTML structure
- Keyboard navigation support
- ARIA labels where needed
- Sufficient color contrast

## License

MIT