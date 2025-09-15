# SweetiePhoto 11ty Site

This static HTML website has been converted to use Eleventy (11ty) as a static site generator while maintaining identical functionality and appearance.

## Installation

```bash
npm install
```

## Development

Start the development server with live reload:

```bash
npm run serve
```

The site will be available at http://localhost:8082/

## Build

Build the static site:

```bash
npm run build
```

The built site will be in the `_site` directory.

## Project Structure

- `src/` - Source files and templates
  - `_layouts/` - Base layouts (currently minimal, preserving original HTML)
  - `_includes/` - Reusable components
  - `_data/` - Data files
  - Individual page directories matching original structure
- `wp-content/` - All WordPress assets (CSS, JS, images) preserved exactly
- `wp-includes/` - WordPress includes preserved
- `_site/` - Generated static site (not tracked in git)

## Migration Notes

This migration follows a minimal-change approach:
- All original HTML structure is preserved
- All assets remain in their original locations
- URLs and paths are identical to the original site
- The generated HTML is byte-for-byte identical (except for BOM character)
- All CSS, JavaScript, and functionality work exactly as before

## Deployment

The `_site` directory contains the complete static website ready for deployment to any static hosting service.