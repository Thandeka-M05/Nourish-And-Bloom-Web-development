# Nourish-And-Bloom-Web-development
My website for Nourish and Bloom is a fresh garden to the table cafe in Sandton Central
## Student Information
Thandeka Mndaweni
ST10484742
WEDE05020

## Project Overview
Nourish And Bloom is a fictional health focused cafe and rooftop garden based in Sandton

## Website Goals And Objectives
The website must convert online interest into visits and paid bookings. The specific goals are:
•	Present the café’s identity, story and values clearly to first-time visitors.
•	Publish an accurate, current menu with prices so guests can decide before arriving.
•	Generate catering, terrace-hire and workshop enquiries through an online form.
•	Make both Sandton locations, trading hours and directions easy to find on a mobile phone.

## Key Features And Functionality
Semantic HTML5 markup across all pages ( index.html, about.html, menu.html, enquiry.html and contact.html)
Accessible global header and footer navigation.
Interactive booking form with field validation and dietary selector checkboxes
Embedded OpenStreetMap showing Sandton location coordinates.

## Timeline And Milestones
Milestone	Deliverable	Target
Proposal	Website project proposal submitted for approval	Week 1
Approval	Lecturer approves the target organization	Week 2
Research	Content research, copywriting and image sourcing	Week 3
Planning	Sitemap, wireframes and folder structure	Week 3
Part 1	Five HTML pages, navigation, README and repository	Week 4
Part 2	Full CSS styling, responsive layout, refinements	Week 5-Week 10
Part 3	JavaScript, testing, validation, hosting and handover	Week 11-15

## Part 1 Details
Part 1 delivers the approved project proposal, the researched content, the sitemap
and file structure, and the initial set of five HTML pages with a working navigation
system, semantic markup, comments and consistent indentation. Parts 2 and 3 will
follow in future submissions and edits to this README.

## Sitemap
<image width="1472" height="752" alt="Nourish and Bloom Sitemap" src="https://github.com/user-attachments/assets/6b6917fc-fbf9-48e6-b234-f526bc3c6ade" />

## Feedback on part 1
What I needed to improve/fix in part is my proposal just needed to enhance and put more effort in part one.
To provide more research about the website I am doing.
To add more to my GitHub by pushing multiple descriptive commits.
To add more to my changelog section contains a record of development.

## Part 2 — CSS Styling and Responsive Design
### External stylesheet
All five pages link one external stylesheet, ../CSS/stylesheet, using the naming
convention lowercase-hyphenated for every class such as .site-header, .page-head,
.menu-list, .form-note. The file is organised into fourteen commented
sections: reset, design tokens, typography, layout helpers, header/navigation,
hero and banners, buttons, cards, menu list, forms, contact, footer, planning
helpers and media queries.

## Base style and CSS reset
The stylesheet opens with a reset that normalises `box-sizing`, clears default
margins and padding, makes images and iframes block-level and fluid, and makes
form controls inherit the page font. Base styles then set the site-wide font
family, colour scheme, line height and background so every page starts from the
same foundation. A prefers-reduced-motion` block disables transitions for users
who ask for less movement.

## Design tokens
Colour, typography, spacing, layout, shadow and transition values are declared
once as custom properties on 'Root' and reused everywhere, so the cascade does
the work and the number of selectors stays low.

## Typography scale
Headings use a harmonious modular scale built with 'clamp()'
(Step 1 through step 4), so type grows smoothly between mobile and
desktop instead of jumping at a breakpoint, 'letter-spacing', 'font-weight',
'line-height' and 'text-wrap: balance' are applied per level.

## Layout structure
CSS Grid handles the page layouts (.grid, .grid-2, .grid-3, footer
columns) and Flexbox handles component-level alignment (header bar, navigation
list, menu rows, buttons, checkbox rows). grid-template-columns,
justify-content, align-items, gap and flex-direction are used throughout.

## Visual styles and interactive states
Colour, background-color, border, border-radius and box-shadow build the visual
language. Interactive elements have :hover, :focus-visible and :active
states, buttons lift and switch from marigold to coral, navigation links reveal
a marigold underline, cards raise on hover, and form fields change border and
background on hover/focus. A global :focus-visible outline keeps keyboard
navigation obvious.

## Breakpoints

| Tier    | Width          | Behaviour                                                          |
| ------- | -------------- | ------------------------------------------------------------------ |
| Mobile  | up to 600px    | Single column, full-width buttons, stacked menu rows, shorter hero |
| Tablet  | 601px – 900px  | Two-column card grid, stacked text/image blocks, toggle navigation |
| Desktop | 901px and up   | Full multi-column grids, horizontal navigation bar                 |
| Wide    | 1400px and up  | Wider content measure (76rem)                                      |

## Relative units
Font sizes and spacing use rem and em, fluid values use clamp() with 'vw',
widths use '%' and minmax(0, 1fr), and text measure uses 'ch' ('max-width:
70ch'). No layout dimension is expressed in fixed pixels.

## Responsive Layout Testing & Evidence
- **Desktop View (1200px+)**
<img width="1881" height="916" alt="Desktop view" src="https://github.com/user-attachments/assets/c8d43536-bd0d-43b8-97b5-21338f4fc2d1" />

- **Tablet View (768px)**
<img width="1107" height="907" alt="Tablet 1 view" src="https://github.com/user-attachments/assets/9976c2c8-073e-4be3-a19d-ac03aeaf470c" />
<img width="1071" height="907" alt="Tablet 2 view" src="https://github.com/user-attachments/assets/816f5d79-cb5d-44b8-825c-94a92f2ce7ad" />

- **Mobile View (375px - 480px)**
<img width="582" height="897" alt="Mobile View" src="https://github.com/user-attachments/assets/f8e9e3ea-a5eb-4b21-96c8-e7413f553520" />


## Changelog
-**Part 1**
-**August 4**: Five HTML core pages built (index.html, about.html, menu.html, enquiry.html, contact.html).
-**August 6**:Semantic HTML5 markup applied using structured tags (<header>, <nav>, <main>, <section>, <article>, <address>, <footer>) to maximize document accessibility.
-**August 6**:Global navigation menu linked uniformly across all five pages for seamless site navigation
-**August 10**Repository initialized with structured directory hierarchy (images/, css/, docs/) and initial README.md documentation.
-**August 10**Git workflow established with standardized commit patterns and initial branch setup.
-**August 12**Sitemap outlined defining key page hierarchy, navigation paths, and core user journeys.
-**August 12**:Low-fidelity wireframes created for Desktop and Mobile layouts to map out page components and layout structure prior to styling.
- **August 13**: Created ReadMe Github
- **August 14**: Edited and changed ReadMe file in Github
-**Part 2**
- **August24 CSS reset added:** Integrated box-sizing, margin/padding clears, fluid media, and inherited form fonts at the top of `styles.css` for consistent cross-browser rendering.
- **August 25: Design tokens expanded:** Added custom properties for spacing, radius, shadow, transition, and type-scale to `:root` to drive styling through variables and reduce selector counts.
- **September 1:Fluid typography introduced:** Implemented a responsive scale using `clamp()` (`--step--1` to `--step-4`) and eliminated fixed heading pixel sizes.
- **September 2: Modern layout architecture:** Rebuilt layout structures using CSS Grid and Flexbox with `minmax(0, 1fr)` tracks, token-based gaps, logical properties (`padding-inline`, `padding-block`), and 'margin-inline: auto'.
- **September 3: Enhanced interactive states:** Added ':hover',':focus-visible', and ':active' styles to buttons, navigation links, cards, and all form controls, alongside a global focus ring for keyboard accessibility.
- **September 6: Restructured breakpoints:** Replaced the single 860px media query with a tiered system for mobile (≤600px), tablet (601–900px), desktop (901px+), and wide (1400px+) views, and added a print stylesheet.
- **September 9: Optimized tablet layouts:** Updated two-column blocks to stack on tablet screens after testing revealed a large empty gap next to the enquiry form at 768px.
- **September 12: Adopted relative units:** Swapped out 'px' values for 'rem', 'em', '%', 'ch', 'vw', and 'clamp()' across all typography, spacing, container widths, and section padding.
- **September 14: Implemented responsive images:** Generated 800px and 1200px image variants, utilizing the `<picture>` element with media conditions for the hero section and `srcset`/`sizes` for other photos.
- **September 16:Responsive testing evidence:** Captured and embedded 15 validation screenshots (5 pages across desktop, tablet, and mobile views) stored in the `images/screenshots/` directory.
- **September 16:Content correction:** Updated two outdated '@verdura.co.za' email addresses to '@nourishandbloom.co.za' on the contact page.

## References
Afrihost, 2026. Shared web hosting packages. [online] Available at: https://www.afrihost.com [Accessed 12 August 2026]. 

Mozilla, 2026. HTML: Hypertext Markup Language. [online] MDN Web Docs. Available at: https://developer.mozilla.org/en-US/docs/Web/HTML [Accessed 12 August 2026]. 

OpenStreetMap Contributors, 2026. OpenStreetMap. [online] Available at: https://www.openstreetmap.org [Accessed 12 August 2026]. 

Specialty Coffee Association, 2025. Coffee Standards. [online] Available at: https://sca.coffee [Accessed 12 August 2026]. 

Statistics South Africa, 2025. General Household Survey. Pretoria: Statistics South Africa. 

W3C, 2026. Web Content Accessibility Guidelines (WCAG) 2.2. [online] Available at: https://www.w3.org/TR/WCAG22/ [Accessed 12 August 2026]. 
