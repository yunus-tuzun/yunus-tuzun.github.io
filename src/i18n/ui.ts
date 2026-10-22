export const languages = {
  en: { label: 'English', short: 'EN', locale: 'en-US', ogLocale: 'en_US' },
  tr: { label: 'Türkçe', short: 'TR', locale: 'tr-TR', ogLocale: 'tr_TR' },
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
    'lang.switch': 'Türkçe oku',
    'lang.switchLabel': 'Switch language',
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
    'post.readIn': 'Bu notu Türkçe oku',
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
  tr: {
    'site.description':
      'SAP, ABAP ve UI5 geliştirme üzerine notlar — küçük araçlar ve pratik çözümler.',
    'nav.home': 'Ana Sayfa',
    'nav.blog': 'Notlar',
    'nav.about': 'Hakkında',
    'nav.tags': 'Etiketler',
    'nav.authors': 'Yazarlar',
    'nav.menu': 'Menüyü aç/kapat',
    'lang.switch': 'Read in English',
    'lang.switchLabel': 'Dili değiştir',
    'skip.main': 'Ana içeriğe geç',
    'theme.toggle': 'Temayı değiştir',

    'home.welcome': 'Merhaba, ben',
    'home.readBlog': 'Notları oku',
    'home.aboutMe': 'Hakkımda',
    'home.latest': 'Güncel notlar',
    'home.viewAll': 'Tümünü gör',
    'home.viewAllPosts': 'Tüm notları gör',
    'home.viewAllPostsAria': 'Tüm notları gör',
    'home.exploreAll': 'Tüm notlara ve rehberlere göz atın',
    'home.connect': 'İletişime geçelim',
    'home.connectSub': 'Sorunuz mu var ya da birlikte çalışmak mı istiyorsunuz? Yazmaktan çekinmeyin!',
    'home.getInTouch': 'İletişime geç',
    'home.available': 'İletişime açık',

    'about.title': 'Hakkında',
    'about.p1':
      'Telekomünikasyon, enerji, finans, üretim ve daha birçok sektörde 15 yılı aşkın, 60’tan fazla proje deneyimine sahip SAP Development Architect olarak çalışıyor.',
    'about.p2':
      'SAP S/4HANA ve ECC üzerinde ABAP, Fiori, SAPUI5 ve SAP BTP ile çalışıyor; RAP ve CAP ile clean-core uzantılar geliştiriyor. Teknik ekiplere liderlik ediyor ve günlük teslimatlarında yapay zekâ destekli geliştirmeyi kullanıyor.',
    'about.p3':
      'Buradaki notlar hem Türkçe hem İngilizce yayımlanıyor.',

    'blog.title': 'Notlar',
    'blog.page': 'Sayfa',
    'blog.noPosts': 'Henüz not yok.',
    'post.total': 'toplam',
    'post.subposts': 'alt not',
    'post.subpost': 'alt not',
    'post.readIn': 'Read this note in English',
    'post.previous': 'Önceki Not',
    'post.next': 'Sonraki Not',
    'post.oldest': 'En eski nottasınız!',
    'post.newest': 'En yeni nottasınız!',
    'post.previousSub': 'Önceki Alt Not',
    'post.nextSub': 'Sonraki Alt Not',
    'post.noOlderSub': 'Daha eski alt not yok',
    'post.noNewerSub': 'Daha yeni alt not yok',
    'post.parent': 'Ana Not',
    'post.noParent': 'Ana not yok',
    'post.scrollTop': 'Başa dön',
    'toc.title': 'İçindekiler',
    'toc.overview': 'Genel Bakış',
    'readingTime': 'dk okuma',

    'tags.title': 'Etiketler',
    'tags.taggedWith': 'Etiketli notlar:',
    'tags.collection': 'Şu etiketle işaretlenmiş notlar:',

    'authors.title': 'Yazarlar',
    'authors.none': 'Yazar bulunamadı.',
    'authors.author': 'Yazar',
    'authors.profileOf': 'Yazar profili:',
    'authors.postsBy': 'Notları:',
    'authors.noPosts': 'Bu yazarın henüz notu yok.',
    'authors.avatarOf': 'Profil fotoğrafı:',

    'footer.stayUpdated': 'Haberdar Olun',
    'footer.stayUpdatedSub': 'Yeni notlar e-posta kutunuza gelsin.',
    'footer.privacy': 'Gizlilik Politikası',
    'footer.terms': 'Kullanım Koşulları',
    'footer.rights': 'Tüm hakları saklıdır.',
    'footer.theme': 'Tema',

    'pagination.previous': 'Önceki',
    'pagination.next': 'Sonraki',
    'pagination.previousAria': 'Önceki sayfaya git',
    'pagination.nextAria': 'Sonraki sayfaya git',
    'pagination.more': 'Diğer sayfalar',

    'search.title': 'Ara',
    'search.shortcut': 'Ara (⌘K)',
    'search.aria': 'Notlarda ara',
    'search.description': 'Notlarda başlık, açıklama, etiket veya içeriğe göre arayın',
    'search.placeholder': 'Notlarda ara...',
    'search.searching': 'Aranıyor...',
    'search.resultOne': 'sonuç bulundu',
    'search.resultMany': 'sonuç bulundu',
    'search.noResults': 'Sonuç bulunamadı',
    'search.noResultsFor': 'Şunun için sonuç bulunamadı:',
    'search.selected': 'Seçili',
    'search.close': 'Aramayı kapat',
    'search.recentPosts': 'Son Notlar',
    'search.recentSearches': 'Son Aramalar',
    'search.hint': 'Başlık, açıklama, etiket veya içeriğe göre arayın',
    'search.results': 'Arama sonuçları',
    'search.goTo': 'Git:',
    'search.loadingIndex': 'Arama dizini yükleniyor...',
    'search.startTyping': 'Aramak için yazmaya başlayın...',
    'search.tryDifferent': 'Farklı anahtar kelimeler deneyin veya yazımı kontrol edin',
    'search.loadError': 'Arama dizini yüklenemedi. Lütfen daha sonra tekrar deneyin.',
    'search.searchError': 'Arama sırasında bir hata oluştu. Lütfen tekrar deneyin.',
    'search.loadMore': 'Daha fazla yükle',
    'search.remaining': 'kaldı',
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

/** Strip the language prefix: `/tr/blog` → `/blog`. */
export function stripLangPrefix(pathname: string): string {
  const [, first, ...rest] = pathname.split('/')
  if (isLang(first) && first !== defaultLang) {
    return '/' + rest.join('/')
  }
  return pathname
}

/** Prefix a site-relative path for the given language: `/blog` → `/tr/blog`. */
export function localizePath(path: string, lang: Lang): string {
  if (lang === defaultLang || /^(https?:|mailto:|#)/.test(path)) return path
  if (path === '/' || path === '') return `/${lang}`
  return `/${lang}${path.startsWith('/') ? path : `/${path}`}`
}

export function otherLang(lang: Lang): Lang {
  return lang === 'en' ? 'tr' : 'en'
}
