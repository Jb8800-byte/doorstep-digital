# La Costa Restaurant - Design Brief (Redesign)

## 🎯 Design Mission

Transform La Costa from generic/AI-tone with emoji placeholders into an **elegant, refined coastal dining experience** that feels natural and sophisticated. Target the upscale Miami waterfront dining market with a design that competes with establishments like HaSalon, Truluck's, and Joe's Stone Crab.

---

## 🎨 Visual Identity

### Color Palette

**Primary Colors:**
- **Deep Ocean Blue** - `#1B3A52` (rich, sophisticated navy)
- **Sand Beige** - `#E8D5C4` (warm, coastal neutrals)
- **Cream White** - `#FAF8F5` (soft, elegant backgrounds)

**Accent Colors:**
- **Coral Sunset** - `#D4826C` (warm, inviting accents)
- **Seafoam Green** - `#9FB8AD` (subtle coastal touches)
- **Gold** - `#C9A05F` (luxury details, borders, icons)

**Text Colors:**
- Primary text: `#1F2937` (charcoal, not pure black)
- Secondary text: `#6B7280` (sophisticated gray)
- Light text on dark: `#F9FAFB`

**Why These Colors:**
- Evoke coastal elegance without being cliché
- Sophisticated earth tones vs bright tropical colors
- Gold accents add upscale feel without being gaudy
- Neutral base allows food photography to shine

---

## 📝 Typography

### Heading Font
**Cormorant Garamond** (elegant serif, editorial feel)
- Weights: 400 (regular), 600 (semibold), 700 (bold)
- Use for: Restaurant name, section headings, dish names
- Character: Refined, classic, timeless elegance

### Body Font
**Inter** (clean, modern sans-serif)
- Weights: 300 (light), 400 (regular), 500 (medium)
- Use for: Body text, descriptions, navigation, buttons
- Character: Clean, readable, sophisticated modern feel

### Why This Pairing:
- Serif headings = elegance and tradition
- Sans-serif body = modern approachability
- High contrast creates visual interest
- Both fonts are professional, not trendy

---

## 📐 Layout & Structure

### Hero Section
**Approach:** Full-screen immersive with professional food/ambiance photography

**Elements:**
- Large, high-quality hero image (not gradient background)
- Subtle dark overlay (20-30% opacity) for text legibility
- Minimal copy: Restaurant name + tagline only
- "Reserve Table" and "View Menu" CTAs (gold buttons with subtle hover effects)
- Gentle scroll indicator (refined, not playful)

**Vibe:** Calm, confident, inviting—not loud or aggressive

### Navigation
**Style:** Minimal, fixed header with subtle shadow

**Elements:**
- Restaurant name/logo (left, Cormorant font)
- Menu links (center): Home, About, Menu, Gallery, Contact
- Reserve CTA (right, subtle gold button)
- Mobile: Hamburger menu (elegant three-line icon, slide-in drawer)

**Behavior:**
- Shrinks slightly on scroll
- Background becomes solid white with soft shadow
- Gold underline on hover (not color change)

### Content Sections

**About Section:**
- Two-column layout: Professional food/chef photo (left) + story (right)
- Breathing room—generous padding and line-height
- Pull quotes in Cormorant italic for emphasis
- 3 key features below (subtle icons in gold, not emojis)

**Menu Section:**
- Grid layout: 2 columns desktop, 1 column mobile
- Each dish: Subtle card with hover lift effect
- High-quality food photography (no emojis)
- Dish name (Cormorant, larger), price (gold), description (Inter, gray)
- "View Full Menu" CTA (links to PDF)

**Gallery Section:**
- Masonry grid or clean 3-column layout
- Professional photography: food close-ups, ambiance, plating details
- Lightbox on click (smooth, elegant transitions)
- Mix of vertical and horizontal images for visual interest

**Hours & Location:**
- Two-card layout on dark background (deep ocean blue)
- Gold borders or subtle shadow for cards
- Embedded Google Map (styled to match color palette—muted, not default)
- Clean typography, gold accent icons

**Reservation Section:**
- Centered form on light background
- Form fields: Subtle borders, generous padding, rounded corners
- Gold focus state (not bright blue)
- Success message: Elegant modal, not browser alert

### Footer
- Dark background (ocean blue)
- Three columns: About snippet, Quick Links, Contact/Social
- Gold divider line above copyright
- Social icons: Gold outlined, hover fill
- Minimal, clean, no clutter

---

## 📷 Photography Guidelines

### Replace Emojis With:
1. **Hero:** Waterfront dining table at sunset, Miami skyline in background
2. **About:** Chef presenting a dish OR fresh seafood on ice
3. **Menu Items (6 dishes):**
   - Camarones: Sizzling garlic shrimp in cast iron pan
   - Mahi-Mahi: Perfectly grilled fish with mango salsa, plated elegantly
   - Lobster Ceviche: Glass bowl with fresh lobster, lime, garnish
   - Paella: Traditional paella pan, colorful seafood arrangement
   - Churrasco: Grilled steak with chimichurri, plated with yuca fries
   - Tres Leches: Slice of cake with cream, berry garnish
4. **Gallery (6 images):**
   - Outdoor dining patio with ocean view
   - Close-up of fresh oysters on ice
   - Cocktails with sunset backdrop
   - Interior dining room (elegant table settings)
   - Chef plating a dish
   - Group of friends toasting at table

**Sources:**
- Unsplash (search: coastal dining, seafood plating, Miami restaurant)
- Pexels (high-quality food photography)

**Quality Standards:**
- Minimum 1920px wide for hero
- Minimum 800px for menu item photos
- Professional lighting, sharp focus
- Color palette should complement our design (warm tones, coastal feel)

---

## ✨ Interactions & Animations

### Philosophy
**Subtle, refined, purposeful**—not flashy or distracting

### Specific Animations:

**On Scroll:**
- Fade-in with slight upward movement (30px translateY)
- Stagger timing for grouped elements (0.1s delay between items)
- Once only (no repeated animations)

**Hover States:**
- Menu items: Lift up 8px with stronger shadow
- Buttons: Scale to 1.02, deeper gold color
- Navigation links: Gold underline slides in from left
- Gallery images: Slight zoom (1.05 scale) with overlay appearing

**Transitions:**
- Duration: 0.3-0.4s (smooth but not slow)
- Easing: cubic-bezier(0.4, 0, 0.2, 1) (natural deceleration)

**Loading States:**
- Skeleton screens for images (soft gray placeholders)
- Smooth fade-in once loaded

---

## 📱 Mobile Considerations

### Breakpoints:
- Desktop: 1024px+
- Tablet: 768px - 1023px
- Mobile: 320px - 767px

### Mobile-Specific Design:
- Hero: 70vh height (not full screen—allows immediate scroll)
- Single-column layouts everywhere
- Larger touch targets (minimum 44px)
- Simplified navigation (hamburger menu)
- Stack reservation form fields vertically
- Increase font sizes slightly for readability
- Reduce image file sizes (responsive images)

---

## 🎭 Tone & Voice

### Visual Tone:
- **Elegant** - Not showy, quietly confident
- **Warm** - Inviting, not cold or sterile
- **Refined** - Upscale without being pretentious
- **Coastal** - Breezy but sophisticated, not touristy

### Copy Tone:
- **Confident** - "Experience fresh coastal cuisine" (not "Try our food!")
- **Descriptive** - Paint a picture with words, not hype
- **Inviting** - Warm welcome, not aggressive sales
- **Authentic** - Real story, not marketing fluff

### What to Avoid:
- ❌ Exclamation points everywhere
- ❌ "Best restaurant in Miami!" type claims
- ❌ Overly casual language ("Hey there!")
- ❌ Cliché phrases ("Farm to table", "Locally sourced" overused)
- ❌ ALL CAPS text (except maybe logo)

---

## 🏆 Competitive Benchmarks

### Inspiration (What Works):

**HaSalon Miami:**
- Chef-centric storytelling
- Bold hero imagery
- Generous white space
- Clear sections with purpose

**Truluck's:**
- Elegant photography throughout
- Emphasis on ingredients and quality
- Private dining section (aspirational)
- Testimonials add credibility

**Joe's Stone Crab:**
- Simplicity and confidence
- Heritage and tradition emphasized
- No gimmicks, just quality

### What We're Building:
**Better than template sites** (Wix, Squarespace generic themes)
**Competitive with $10K agency work** (smart design, not just expensive)
**Portfolio piece that closes deals** (demonstrates capability immediately)

---

## 🛠️ Technical Requirements

### Performance:
- Lazy load images below the fold
- Optimized image formats (WebP with JPEG fallback)
- Minimal JavaScript (prefer CSS animations)
- Fast Time to Interactive (< 3 seconds)

### Accessibility:
- Semantic HTML5 elements
- ARIA labels where needed
- Keyboard navigation support
- Color contrast ratios meet WCAG AA standards
- Alt text for all images

### SEO:
- Semantic heading hierarchy (H1 → H2 → H3)
- Meta descriptions and OG tags
- Schema.org markup for Restaurant
- Fast Core Web Vitals scores

### Browser Support:
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Graceful degradation for older browsers
- Mobile Safari optimization

---

## 📋 Implementation Checklist

### Phase 1: Foundation
- [ ] Set up new color palette variables
- [ ] Import Cormorant Garamond + Inter fonts
- [ ] Create base styles and typography system
- [ ] Build new navigation component

### Phase 2: Hero & About
- [ ] Source and optimize hero image
- [ ] Redesign hero section with new layout
- [ ] Rebuild About section with professional photo
- [ ] Update copy tone and voice

### Phase 3: Menu & Gallery
- [ ] Source 6 high-quality dish photos
- [ ] Redesign menu card layout
- [ ] Build elegant menu grid
- [ ] Create gallery with lightbox functionality
- [ ] Source 6 gallery images

### Phase 4: Forms & Footer
- [ ] Redesign reservation form
- [ ] Add form validation and success modal
- [ ] Embed styled Google Map
- [ ] Build elegant footer

### Phase 5: Polish
- [ ] Add scroll animations
- [ ] Refine hover states and transitions
- [ ] Mobile responsive testing
- [ ] Performance optimization
- [ ] Accessibility audit
- [ ] Cross-browser testing

---

## 🎯 Success Metrics

### Visual Quality:
- Looks professional next to $10K agency websites
- Photography elevates the design (not detracts)
- No "template" feel—feels custom and intentional

### User Experience:
- Clear navigation, easy to find menu/hours/contact
- Fast load times (< 3s)
- Smooth interactions, no janky animations
- Works flawlessly on mobile

### Business Impact:
- Portfolio piece that impresses prospects
- Demonstrates technical skill and design taste
- Can be easily adapted for real clients
- Shows understanding of upscale market

---

**Created:** 2026-02-19  
**Status:** Design brief ready for implementation  
**Next Step:** Source photography, then rebuild with elegant aesthetic
