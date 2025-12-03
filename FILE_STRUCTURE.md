# Imperial Garden - Complete File Structure

```
imperial-garden/
└── my-app/
    ├── app/
    │   ├── layout.js                 # Root layout with metadata & structured data
    │   ├── page.js                   # Home page (assembles all components)
    │   ├── globals.css               # Global styles & Tailwind imports
    │   ├── providers/
    │   │   └── theme-provider.js     # Theme context provider
    │   ├── sitemap.js                # Dynamic sitemap generation
    │   └── robots.txt                # (moved to public/)
    │
    ├── components/
    │   ├── Header.js                 # Navigation header with theme toggle
    │   ├── Footer.js                 # Footer with links & contact
    │   ├── Hero.js                   # Cinematic hero section
    │   ├── WhyUs.js                  # Why Us section with features
    │   ├── Spaces.js                 # Spaces showcase with hover effects
    │   ├── Packages.js               # Pricing packages table
    │   ├── Gallery.js                # Image gallery with lightbox
    │   ├── Reviews.js                # Testimonials section
    │   ├── Catering.js               # Catering menu with expandable cards
    │   ├── Contact.js                # Contact form & info
    │   ├── ThemeToggle.js            # Dark/Light theme switcher
    │   ├── SVG/
    │   │   ├── LogoMark.js           # Custom logo SVG
    │   │   ├── Divider.js            # Decorative divider SVG
    │   │   └── CornerFlourish.js     # Corner decoration SVG
    │   └── __tests__/
    │       └── Hero.test.js          # Example unit test
    │
    ├── public/
    │   └── robots.txt                # Robots.txt file
    │
    ├── tests/
    │   ├── e2e/
    │   │   └── home.spec.js          # Playwright E2E tests
    │   └── setup.js                  # Test setup file
    │
    ├── .gitignore                    # Git ignore rules
    ├── CHECKLIST.md                  # Production readiness checklist
    ├── FILE_STRUCTURE.md             # This file
    ├── README.md                     # Project documentation
    ├── jsconfig.json                 # Path aliases configuration
    ├── next.config.mjs               # Next.js configuration
    ├── package.json                  # Dependencies & scripts
    ├── playwright.config.js          # Playwright configuration
    ├── tailwind.config.js            # Tailwind CSS configuration
    └── vitest.config.js              # Vitest configuration
```

## Key Files Explained

### Core Application
- **app/layout.js**: Root layout with SEO metadata, structured data (JSON-LD), and theme provider
- **app/page.js**: Main home page that imports and renders all section components
- **app/globals.css**: Global styles, Tailwind directives, custom CSS variables, and utility classes

### Components
All components are client-side (`'use client'`) where needed for interactivity:
- **Hero**: Full-screen cinematic hero with animated headline and CTAs
- **WhyUs**: Three feature cards with custom SVG icons
- **Spaces**: Dynamic grid with hover reveals showing space details
- **Packages**: Three-tier pricing table (Essence, Signature, Imperial)
- **Gallery**: Masonry layout with lightbox (keyboard & swipe support)
- **Reviews**: Testimonials with star ratings and Google badge
- **Catering**: Expandable menu cards with dish listings
- **Contact**: Contact form + venue details with tap-to-call buttons

### Configuration
- **tailwind.config.js**: Custom design tokens (colors, fonts, spacing, shadows)
- **next.config.mjs**: Image optimization, package imports optimization
- **jsconfig.json**: Path aliases (@/* for cleaner imports)

### Testing
- **vitest.config.js**: Unit test configuration
- **playwright.config.js**: E2E test configuration
- Example tests included for reference

### Documentation
- **README.md**: Complete setup, deployment, and customization guide
- **CHECKLIST.md**: Production readiness verification checklist

## Design Tokens

Colors (from tailwind.config.js):
- Primary: `#0B1220` (near-black)
- Accent: `#CFAF6A` (warm gold)
- Secondary: `#2B3A4B` (deep slate)
- Highlight: `#FF6B6B` (pop color)
- Neutral: `#F6F6F8` (light background)

Fonts:
- Headlines: Playfair Display (serif)
- Body/UI: Inter (sans-serif)

Spacing & Radius:
- Card radius: 8px
- Modal radius: 16px
- Custom spacing scale (18, 22, 26)

## Customization Points

1. **Brand Colors**: Edit `tailwind.config.js` → `colors`
2. **Content**: Update component files (Hero.js, Packages.js, etc.)
3. **Images**: Replace URLs in components or add to `public/` folder
4. **Contact Info**: Update phone numbers in Contact.js and Footer.js
5. **Metadata**: Update SEO info in `app/layout.js`

## Deployment Ready

✅ All files structured for production
✅ Environment variables ready (.env files ignored)
✅ Build scripts configured
✅ SEO and performance optimized
✅ Tests included (unit + E2E examples)

