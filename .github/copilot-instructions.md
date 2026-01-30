# Copilot Instructions: Vietnamese History Museum Website

## Project Overview
This is a Vietnamese history museum website built with vanilla HTML, CSS, and JavaScript. It provides educational content about Vietnamese historical periods, locations, and events with interactive quizzes and timelines.

**Language**: Vietnamese (vi) for content  
**Architecture**: Static multi-page site with modular JS components  
**No build tools**: Direct browser execution (no Node.js, webpack, or bundlers)

## Key Architectural Patterns

### 1. File Organization & URL Structure
- **Root pages**: `index.html`, `pages/*.html` (timeline, quiz, map, progress, login, register)
- **Content hierarchy**: `pages/periods/` (historical periods), `pages/locations/` (museum locations), `pages/events/` (specific events)
- **Navigation**: All relative paths use `../` correctly based on directory depth
  - Sub-pages reference assets with proper relative paths (e.g., `../../css/navbar.css`)
  - **Watch for**: Path inconsistencies when moving/renaming files

### 2. CSS Styling System
- **Global stylesheet**: [css/style.css](css/style.css) (1592 lines) - contains all base styles
- **Modular CSS files**: Feature-specific files like `navbar.css`, `timeline.css`, `quiz.css`, `hung-kings.css`
- **CSS Variables**: Uses `--primary`, `--text-muted`, `--hk-gold` (check style.css for full list)
- **Pattern**: Each page includes `navbar.css` + `style.css` + page-specific CSS (e.g., `timeline.css`)

### 3. Navigation & Menu System
- **Navbar component**: Shared across all pages ([pages/periods/hung-kings.html](pages/periods/hung-kings.html) shows full implementation)
- **Active link highlighting**: [js/navigation.js](js/navigation.js) automatically marks current page's nav link as `.active` class
- **Hamburger menu**: Toggle-based mobile navigation (see hamburger button in hung-kings.html)
- **Logo/branding**: Shared image asset `assets/images/z7466353692132_c4290ee6f126bd5eeb17054044c74d9d.jpg`

### 4. Quiz System Architecture
- **Data-driven design**: [js/quiz.js](js/quiz.js) (595 lines) contains `quizDataByPeriod` object with quiz data
- **Structure**: Each period (hung_vuong, bac_thuoc, etc.) maps to an array of question objects
- **Question format**: `{question, options[], correct (index), explanation}`
- **Integration**: [pages/quiz.html](pages/quiz.html) loads quiz.js and calls `startQuiz('period-name')`
- **Storage**: Currently uses alerts; migration to localStorage for progress tracking is planned

### 5. Form Handling
- **Login/Register**: [pages/login.html](pages/login.html), [pages/register.html](pages/register.html)
- **Pattern**: Event listeners on form submit, preventDefault(), then client-side validation/alerts
- **No backend**: Currently alerts success/failure; would need server endpoint for real auth
- **Password toggle**: [js/login.js](js/login.js) shows eye-icon toggle pattern

### 6. Content Pages Pattern
- **Breadcrumb navigation**: Used in period pages (e.g., Home › Timeline › Hung Vuong)
- **Chip/button navigation**: Anchor links to sections (`.hk-chip` class for navigation)
- **Long-form content**: History pages (hung-kings.html: 717 lines) use semantic HTML sections

## Development Conventions

### Naming & Classes
- **CSS classes**: kebab-case (`.hero-section`, `.timeline-item`, `.quiz-card`)
- **IDs**: camelCase (`#quizSelection`, `#hamburger`, `#loginForm`)
- **Event handlers**: Inline onclick where simple (e.g., `onclick="startQuiz('hung-kings')"`)
- **Data attributes**: Not currently used; good addition for future interactivity

### HTML Structure
- **Meta tags**: Always include `<meta charset="UTF-8">` and viewport tag
- **Font Awesome icons**: Loaded from CDN v6.4.0 (used throughout for emojis + icons)
- **Content language**: `lang="vi"` in all HTML files
- **Relative paths**: Always use `../` for assets from nested pages

### JavaScript Patterns
- **No frameworks**: Vanilla JS with `document.addEventListener('DOMContentLoaded', ...)`
- **Global functions**: `togglePassword()`, `toggleSound()`, `startQuiz()`, `loginGoogle()` (available in window scope)
- **ID-based selectors**: Use `getElementById()` for form elements and buttons
- **Local logging**: Currently uses `console.log()` and `alert()` for debugging

### CSS Architecture
- **No preprocessor**: Pure CSS (no Sass/Less)
- **Grid & Flexbox**: Modern layout using CSS Grid and Flexbox
- **Responsive**: Mobile-first approach with `viewport` meta tag; test all pages at mobile widths
- **Color scheme**: Red/maroon theme (referenced as `#d32f2f`, `#8B0000`) for Vietnamese flag connection

## Common Tasks & Workflows

### Adding a New Historical Period
1. Create HTML file in `pages/periods/` (mirror structure of [pages/periods/hung-kings.html](pages/periods/hung-kings.html))
2. Add quiz questions to `quizDataByPeriod` object in [js/quiz.js](js/quiz.js)
3. Add timeline entry in [pages/timeline.html](pages/timeline.html) with link to new period page
4. Create corresponding CSS file if unique styling needed

### Modifying Quiz Questions
- Edit the `quizDataByPeriod` object in [js/quiz.js](js/quiz.js)
- Key fields: `question`, `options[]`, `correct` (0-based index), `explanation`
- Note: Reload page to see changes (no hot reload)

### Adding Navigation Links
- Update the `<ul class="nav-menu">` in pages where needed
- Use correct relative paths based on page depth (`../`, `../../`)
- Navigation.js auto-marks `.active` class on current page link

### Styling Adjustments
- Global colors/spacing: Edit [css/style.css](css/style.css)
- Page-specific: Edit corresponding CSS file (e.g., `timeline.css` for timeline page)
- Always test on mobile (hamburger menu, responsive grid)

## Known Patterns & Gotchas

- **No build step**: Changes are immediately visible—reload browser to see CSS/JS updates
- **Relative path depth**: Files in `pages/` use `../`, files in `pages/periods/` use `../../`—verify when moving files
- **Form submission**: Currently preventDefault() then alert(); would need API endpoint for real backend
- **Quiz progress**: Currently not persisted; uses alerts only—consider localStorage for state management
- **Empty utils.js**: [js/utils.js](js/utils.js) exists but is empty; add shared utilities here (e.g., API helpers)

## Integration Points & External Dependencies

- **Font Awesome 6.4.0**: Icons via CDN (https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css)
- **Google/Facebook login**: Currently stubbed with alerts—would need SDK integration for real OAuth
- **No backend API**: Currently client-side only; all data is hardcoded in HTML and JS
- **Video assets**: MP4 hosted locally in `assets/images/` with autoplay/muted control

## Future Architecture Considerations

- Consider localStorage for quiz progress tracking and user preferences
- Add Fetch API calls to [js/utils.js](js/utils.js) if backend is added
- Timeline and quiz data could move to JSON files for maintainability
- Consider Lighthouse optimization: image lazy-loading, minification for production
