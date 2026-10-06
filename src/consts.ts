import type { IconMap, NavLink, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'Yunus Tüzün',
  description:
    'Notes on SAP, ABAP and UI5 development — small tools and practical solutions.',
  href: 'https://tuzun.space',
  author: 'yunus-tuzun',
  locale: 'en-US',
  featuredPostCount: 2,
  postsPerPage: 6,
}

// Google Analytics
// Configure via environment variable: PUBLIC_GOOGLE_ANALYTICS_ID
export const ANALYTICS = {
  google: import.meta.env.PUBLIC_GOOGLE_ANALYTICS_ID || '',
}

// Umami Analytics
// Configure via environment variable: PUBLIC_UMAMI_WEBSITE_ID
export const UMAMI = {
  websiteId: import.meta.env.PUBLIC_UMAMI_WEBSITE_ID || '',
}

// Brevo Newsletter
// Get your API key from https://app.brevo.com/settings/keys/api
// Set it as an environment variable: BREVO_API_KEY=your-api-key
// Optional: Set BREVO_LIST_ID to automatically add subscribers to a specific list
// Optional: Set BREVO_TEMPLATE_ID for double opt-in confirmation email (default: 5)
export const BREVO = {
  apiKey: import.meta.env.BREVO_API_KEY || '',
  listId: import.meta.env.BREVO_LIST_ID || '',
  templateId: import.meta.env.BREVO_TEMPLATE_ID || '5',
}

// Newsletter needs the Cloudflare Pages Function in /functions, which GitHub Pages cannot run
export const NEWSLETTER_ENABLED = false

// Paths are language-neutral; they get the /tr prefix via localizePath()
export const NAV_LINKS: NavLink[] = [
  {
    href: '/blog',
    labelKey: 'nav.blog',
  },
  {
    href: '/about',
    labelKey: 'nav.about',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://www.linkedin.com/in/yunustuzun/',
    label: 'LinkedIn',
  },
  {
    href: 'https://github.com/yunus-tuzun',
    label: 'GitHub',
  },
  {
    href: 'mailto:yunus.tuzun@interise.com.tr',
    label: 'Email',
  },
  {
    href: '/rss.xml',
    label: 'RSS',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}

// Newsletter consent text (centralized for GDPR compliance)
export const NEWSLETTER_CONSENT_TEXT = {
  text: 'I agree to receive newsletter emails.',
  privacyLink: '/privacy',
  privacyText: 'Privacy Policy',
}
