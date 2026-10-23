export const languages = {
  en: { label: 'English', short: 'EN', locale: 'en-US', ogLocale: 'en_US' },
} as const

export type Lang = keyof typeof languages

export const defaultLang: Lang = 'en'

export const langs = Object.keys(languages) as Lang[]

export const ui = {
  en: {
    'site.description':
      'Notes on SAP, ABAP and UI5 development — small tools and practical solutions.',
    'nav.home': 'Home',
    'nav.blog': 'Notes',
    'nav.about': 'About',
    'nav.tags': 'Tags',
    'nav.authors': 'Authors',
    'nav.menu': 'Toggle menu',
    'skip.main': 'Skip to main content',
    'theme.toggle': 'Toggle theme',

    'home.welcome': "Hi, I'm",
    'home.readBlog': 'Read the notes',
    'home.aboutMe': 'About me',
    'home.latest': 'Recent insights and notes',
    'home.viewAll': 'View all',
    'home.viewAllPosts': 'View all notes',
    'home.viewAllPostsAria': 'View all notes',
    'home.exploreAll': 'Explore all notes and tutorials',
    'home.connect': "Let's connect",
    'home.connectSub': 'Have questions or want to collaborate? Feel free to reach out!',
    'home.getInTouch': 'Get in touch',
    'home.available': 'Available',

    'about.title': 'About',
    'about.p1':
      'Works as an SAP Development Architect with 15+ years of experience and 60+ projects across telecommunications, energy, finance, manufacturing, and more.',
    'about.p2':
      'Works across SAP S/4HANA and ECC with ABAP, Fiori, SAPUI5, and SAP BTP, building clean-core extensions with RAP and CAP. Leads technical teams and uses AI-assisted development in daily delivery.',
    'about.p3':
      'Notes here are published in both English and Turkish.',

    'blog.title': 'Notes',
    'blog.page': 'Page',
    'blog.noPosts': 'No notes yet.',
    'post.total': 'total',
    'post.subposts': 'subnotes',
    'post.subpost': 'subnote',
    'post.previous': 'Previous Note',
    'post.next': 'Next Note',
    'post.oldest': "You're at the oldest note!",
    'post.newest': "You're at the newest note!",
    'post.previousSub': 'Previous Subnote',
    'post.nextSub': 'Next Subnote',
    'post.noOlderSub': 'No older subnote',
    'post.noNewerSub': 'No newer subnote',
    'post.parent': 'Parent Note',
    'post.noParent': 'No parent note',
    'post.scrollTop': 'Scroll to top',
    'toc.title': 'Table of Contents',
    'toc.overview': 'Overview',
    'readingTime': 'min read',

    'tags.title': 'Tags',
    'tags.taggedWith': 'Notes tagged with',
    'tags.collection': 'A collection of notes tagged with',

    'authors.title': 'Authors',
    'authors.none': 'No authors found.',
    'authors.author': 'Author',
    'authors.profileOf': 'Profile of',
    'authors.postsBy': 'Notes by',
    'authors.noPosts': 'No notes available from this author.',
    'authors.avatarOf': 'Avatar of',

    'footer.stayUpdated': 'Stay Updated',
    'footer.stayUpdatedSub': 'Get the latest notes delivered to your inbox.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.rights': 'All rights reserved.',
    'footer.theme': 'Theme',

    'pagination.previous': 'Previous',
    'pagination.next': 'Next',
    'pagination.previousAria': 'Go to previous page',
    'pagination.nextAria': 'Go to next page',
    'pagination.more': 'More pages',

    'search.title': 'Search',
    'search.shortcut': 'Search (⌘K)',
    'search.aria': 'Search notes',
    'search.description': 'Search notes by title, description, tags, or content',
    'search.placeholder': 'Search notes...',
    'search.searching': 'Searching...',
    'search.resultOne': 'result found',
    'search.resultMany': 'results found',
    'search.noResults': 'No results found',
    'search.noResultsFor': 'No results found for',
    'search.selected': 'Selected',
    'search.close': 'Close search',
    'search.recentPosts': 'Recent Notes',
    'search.recentSearches': 'Recent Searches',
    'search.hint': 'Search by title, description, tags, or content',
    'search.results': 'Search results',
    'search.goTo': 'Go to',
    'search.loadingIndex': 'Loading search index...',
    'search.startTyping': 'Start typing to search notes...',
    'search.tryDifferent': 'Try different keywords or check your spelling',
    'search.loadError': 'Failed to load search index. Please try again later.',
    'search.searchError': 'An error occurred while searching. Please try again.',
    'search.loadMore': 'Load more',
    'search.remaining': 'remaining',
  },
} as const

export type UIKey = keyof (typeof ui)[typeof defaultLang]

export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key] ?? ui[defaultLang][key]
  }
}

export function isLang(value: string | undefined): value is Lang {
  return !!value && value in languages
}

export function getLangFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split('/')
  return isLang(first) ? first : defaultLang
}

/** Prefix a site-relative path for a non-default language. */
export function localizePath(path: string, lang: Lang): string {
  if (lang === defaultLang || /^(https?:|mailto:|#)/.test(path)) return path
  if (path === '/' || path === '') return `/${lang}`
  return `/${lang}${path.startsWith('/') ? path : `/${path}`}`
}
