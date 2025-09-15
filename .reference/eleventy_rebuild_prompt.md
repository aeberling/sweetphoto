# Rebuild Static HTML Website with Eleventy (11ty)

## Objective
Convert an existing static HTML website to use the Eleventy (11ty) static site generator while maintaining identical user experience and functionality.

## Planning Phase Requirements

### 1. Initial Analysis
- **Audit the current website structure**: Map out all HTML files, their relationships, and directory structure
- **Identify content patterns**: Look for repeated elements (headers, footers, navigation) that can become templates
- **Catalog assets**: Document all CSS files, JavaScript files, images, and other static assets
- **Document current linking structure**: Note all internal links, relative paths, and anchor links
- **Check for dynamic elements**: Identify any existing JavaScript functionality that needs to be preserved

### 2. Architecture Planning
- **Design template hierarchy**: Plan which templates will be layouts, includes, and content templates
- **Plan data structure**: Identify content that can be extracted to JSON/YAML front matter or data files
- **Map URL structure**: Ensure the new site maintains identical URLs and routing
- **Plan asset preservation**: Keep existing asset organization and file paths to minimize risk of broken references

## Implementation Requirements

### 3. Eleventy Setup
- Initialize new Eleventy project with `npm init` and install dependencies
- Configure `.eleventy.js` with appropriate settings for the project
- Set up proper input/output directories
- Configure passthrough copy for static assets

### 4. Template Conversion (Minimal Changes)
- **Create base layout(s)**: Extract only truly common HTML structure (DOCTYPE, head, navigation, footer) that appears identically across pages
- **Convert pages to templates minimally**: Transform HTML pages into templates with minimal template syntax - preserve original HTML structure wherever possible
- **Preserve original HTML output**: The generated HTML should be as close to byte-for-byte identical to the original as possible
- **Minimal templating**: Use template features sparingly - only where there's clear repetition that justifies it
- **Maintain identical markup**: Keep all CSS classes, IDs, data attributes, and HTML structure exactly as they were
- **Preserve all meta tags**: Ensure SEO tags, Open Graph, and other metadata are maintained exactly

### 5. Content Migration (Conservative Approach)
- **Preserve content exactly**: Keep all text content, HTML structure, and formatting identical
- **Minimal front matter usage**: Only extract data to front matter if it genuinely varies between pages and provides clear benefit
- **Maintain content hierarchy**: Keep the same page relationships and navigation structure exactly
- **Preserve inline styles and scripts**: Don't extract or reorganize inline CSS or JavaScript unless absolutely necessary

### 6. Asset Preservation and Handling
- **Mirror existing asset structure**: Copy all assets maintaining their exact original folder structure and file paths
- **Use passthrough copy**: Configure Eleventy's passthrough copy to preserve asset locations
- **Maintain identical file paths**: Ensure all CSS, JS, images, fonts, and other files remain at their original URLs
- **Preserve all asset relationships**: Keep any existing asset dependencies and cross-references intact
- **Only reorganize if broken**: If assets are poorly organized and causing build issues, document any changes made and update references systematically
- **Test asset loading**: Verify every asset loads from its expected location after migration

### 7. Link Validation and Updates
- **Internal link verification**: Test all internal links to ensure they work correctly
- **Relative path updates**: Update any relative paths that may have changed
- **Anchor link testing**: Verify all in-page anchor links function properly
- **External link preservation**: Ensure all external links remain unchanged

## Quality Assurance Requirements

### 8. Functional Testing (Strict Validation)
- **Build verification**: Ensure the site builds without errors
- **Byte-by-byte comparison**: Compare each generated page with the original HTML - they should be nearly identical
- **Asset loading verification**: Test that all assets load from their exact original locations
- **Visual diff testing**: Use browser developer tools to ensure visual output is pixel-perfect
- **Link validation**: Test every single link on every page
- **Navigation testing**: Verify all navigation works identically to the original
- **Form functionality**: If forms exist, ensure they work exactly as before
- **JavaScript functionality**: Test all interactive elements work identically
- **CSS verification**: Ensure all styles apply correctly and appearance is unchanged

### 9. Performance and SEO Preservation
- **Meta tag verification**: Confirm all SEO-related meta tags are present and correct
- **Performance comparison**: Ensure the new site loads at least as fast as the original
- **URL structure maintenance**: Verify all URLs remain exactly the same
- **Sitemap generation**: Implement sitemap generation if the original had one

### 10. Documentation and Deployment
- **Create documentation**: Document the new structure, build process, and any customizations
- **Deployment instructions**: Provide clear instructions for building and deploying the site
- **Development workflow**: Document how to add new content and make changes

## Success Criteria
- [ ] All original pages are accessible at the same URLs
- [ ] Visual appearance is pixel-perfect identical to the original site
- [ ] All links (internal and external) work correctly
- [ ] All assets load from their original locations/paths
- [ ] Generated HTML is nearly byte-for-byte identical to original
- [ ] Site builds without errors
- [ ] Performance is maintained or improved
- [ ] All interactive functionality works identically
- [ ] SEO elements are preserved exactly
- [ ] Original asset organization is maintained
- [ ] No functionality changes from user perspective

## Additional Considerations
- **Prioritize fidelity over best practices**: The primary goal is an identical end result, not perfect code organization
- **Minimal changes philosophy**: Make the smallest possible changes to achieve Eleventy functionality
- **Maintain git history if converting an existing repository**
- **Consider adding development conveniences (live reload, etc.) without affecting production output**
- **Ensure the build process is straightforward and well-documented**
- **Test the site in multiple browsers if the original supported multiple browsers**
- **Document any unavoidable changes made during conversion**
- **Keep original files as reference until migration is fully validated**

## Deliverables
1. Fully functional Eleventy project with minimal changes from original
2. Build configuration and package.json
3. Templates with conservative templating approach
4. All content and assets preserved in original structure
5. Documentation noting any unavoidable changes made
6. Deployment instructions
7. Comparison report showing original vs. generated output

**CRITICAL**: Begin by analyzing the current website structure and creating a minimal-change migration plan. The goal is to add Eleventy's build system while keeping everything else as close to identical as possible.