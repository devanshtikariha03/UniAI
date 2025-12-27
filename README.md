# UniAI - The Unified Homebase for AI

A modern, premium marketing and product-preview website inspired by Linear's aesthetic. Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## 🎨 Design Philosophy

- **Minimal & Clean**: Generous whitespace, crisp typography, subtle borders
- **Fast & Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Premium Motion**: High-quality animations that support comprehension, never distracting
- **Accessible**: Keyboard navigation, proper contrast, semantic HTML
- **SEO Optimized**: OpenGraph tags, meta descriptions, sitemap

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd UniAI
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
UniAI/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── community/         # Community page
│   ├── content/           # Content page
│   ├── explore/           # Explore page
│   ├── jobs/              # Jobs page
│   ├── legal/             # Legal pages (Privacy, Terms)
│   ├── marketplace/       # Marketplace page
│   ├── search/            # Search page
│   ├── templates/         # Templates page
│   ├── waitlist/          # Waitlist page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Landing page
│   ├── robots.ts          # Robots.txt
│   └── sitemap.ts         # Sitemap
├── components/
│   ├── sections/          # Landing page sections
│   │   ├── Hero.tsx
│   │   ├── Discover.tsx
│   │   ├── News.tsx
│   │   ├── SearchDemo.tsx
│   │   ├── Community.tsx
│   │   ├── Templates.tsx
│   │   ├── Content.tsx
│   │   ├── NetworkingJobs.tsx
│   │   ├── Marketplace.tsx
│   │   ├── SocialProof.tsx
│   │   └── Pricing.tsx
│   ├── ui/                # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── Tag.tsx
│   ├── Navigation.tsx     # Main navigation
│   └── Footer.tsx         # Footer component
├── data/
│   └── sampleData.ts      # Sample data for demos
├── public/                # Static assets
├── tailwind.config.ts     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies
```

## 🎯 Features

### Landing Page Sections

1. **Hero**: Animated search bar with live query examples
2. **Discover**: Interactive tool cards with modal previews
3. **News**: Filterable news feed with categories
4. **Search Demo**: Perplexity-like search with comparison feature
5. **Community**: Threaded discussion preview
6. **Templates**: Code snippet browser with copy functionality
7. **Content**: Blog posts, newsletter, and video content
8. **Networking & Jobs**: Builder profiles and job listings
9. **Marketplace**: Coming soon preview with demo request
10. **Social Proof**: Testimonials and company logos
11. **Pricing**: Three-tier pricing structure

### Pages

- **Explore**: Directory of tools and news
- **Search**: Full search experience
- **Community**: Discussion threads
- **Templates**: Code snippets library
- **Content**: Blogs, newsletters, videos
- **Jobs**: Networking and job board
- **Marketplace**: Vendor marketplace (coming soon)
- **About**: Mission and contact information
- **Legal**: Privacy policy and terms of service
- **Waitlist**: Early access signup

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Font**: [Inter](https://fonts.google.com/specimen/Inter)

## 🎨 Design System

### Colors

- **Background**: Light (#ffffff) / Dark (#0a0a0a)
- **Foreground**: Light (#0a0a0a) / Dark (#fafafa)
- **Accent**: #5e6ad2 (primary brand color)
- **Border**: Light (#e5e5e5) / Dark (#262626)
- **Muted**: Light (#f5f5f5) / Dark (#171717)

### Typography

- **Font Family**: Inter (system fallback)
- **Scale**: Hero (4.5rem), H1 (3rem), H2 (2.25rem), H3 (1.5rem), Body (1rem), Caption (0.875rem)

### Components

- Cards with hover effects
- Buttons with variants (primary, secondary, outline, ghost)
- Tags/Pills for categorization
- Modals for detailed views
- Responsive grid layouts

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

All components adapt gracefully across screen sizes.

## ♿ Accessibility

- Semantic HTML structure
- Keyboard navigation support
- Focus indicators
- ARIA labels where needed
- Proper color contrast
- Screen reader friendly

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build

### Deploy to Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Self-hosted with Node.js

## 🔧 Configuration

### Environment Variables

Currently, no environment variables are required. For production, you may want to add:

```env
NEXT_PUBLIC_SITE_URL=https://uniai.dev
```

### Customization

- **Colors**: Edit `app/globals.css` CSS variables
- **Typography**: Modify `tailwind.config.ts` and `app/globals.css`
- **Content**: Update `data/sampleData.ts` with your data
- **Metadata**: Edit `app/layout.tsx` and individual page metadata

## 📝 Sample Data

All live examples use sample data from `data/sampleData.ts`. Replace this with your actual data source (API, database, CMS) when ready.

## 🎬 Animations

Animations are powered by Framer Motion and follow these principles:
- **Purposeful**: Every animation supports user understanding
- **Subtle**: Never distracting or gimmicky
- **Fast**: Quick transitions (200-500ms)
- **Consistent**: Same easing and duration patterns

## 🔍 SEO

- OpenGraph tags for social sharing
- Twitter Card support
- Semantic HTML
- Sitemap.xml auto-generated
- Robots.txt configured
- Meta descriptions on all pages

## 📄 License

This project is proprietary. All rights reserved.

## 🤝 Contributing

This is a private project. For questions or feedback, contact the team.

## 📧 Contact

- Email: hello@uniai.dev
- Website: https://uniai.dev

---

Built with ❤️ for the AI community

