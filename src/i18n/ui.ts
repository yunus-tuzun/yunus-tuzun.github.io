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
    'nav.blog': 'Blog',
    'nav.about': 'About',
    'nav.tags': 'Tags',
    'nav.authors': 'Authors',
    'nav.menu': 'Toggle menu',
    'lang.switch': 'Türkçe oku',
    'lang.switchLabel': 'Switch language',
    'skip.main': 'Skip to main content',
    'theme.toggle': 'Toggle theme',

    'home.welcome': "Hi, I'm",
    'home.readBlog': 'Read the blog',
    'home.aboutMe': 'About me',
    'home.latest': 'Latest from the blog',
    'home.latestSub': 'Recent insights and articles',
    'home.viewAll': 'View all',
    'home.viewAllPosts': 'View all posts',
    'home.viewAllPostsAria': 'View all blog posts',
    'home.exploreAll': 'Explore all articles and tutorials',
    'home.connect': "Let's connect",
    'home.connectSub': 'Have questions or want to collaborate? Feel free to reach out!',
    'home.getInTouch': 'Get in touch',
    'home.available': 'Available',

    'about.title': 'About',
    'about.subtitle': 'SAP Development Architect · İstanbul, Türkiye',
    'about.p1':
      'SAP Development Architect with 15+ years of experience and 60+ projects across telecommunications, energy, finance, manufacturing, and more.',
    'about.p2':
      'Works across SAP S/4HANA and ECC with ABAP, Fiori, SAPUI5, and SAP BTP, building clean-core extensions with RAP and CAP. Leads technical teams and uses AI-assisted development in daily delivery.',
    'about.p3':
      'Articles on this blog are published in both English and Turkish.',
    'about.contact': 'Contact',

    'blog.title': 'Blog',
    'blog.page': 'Page',
    'blog.noPosts': 'No posts yet.',
    'post.total': 'total',
    'post.subposts': 'subposts',
    'post.subpost': 'subpost',
    'post.readIn': 'Bu yazıyı Türkçe oku',
    'post.previous': 'Previous Post',
    'post.next': 'Next Post',
    'post.oldest': "You're at the oldest post!",
    'post.newest': "You're at the newest post!",
    'post.previousSub': 'Previous Subpost',
    'post.nextSub': 'Next Subpost',
    'post.noOlderSub': 'No older subpost',
    'post.noNewerSub': 'No newer subpost',
    'post.parent': 'Parent Post',
    'post.noParent': 'No parent post',
    'post.scrollTop': 'Scroll to top',
    'toc.title': 'Table of Contents',
    'toc.overview': 'Overview',
    'readingTime': 'min read',

    'tags.title': 'Tags',
    'tags.taggedWith': 'Posts tagged with',
    'tags.collection': 'A collection of posts tagged with',

    'authors.title': 'Authors',
    'authors.none': 'No authors found.',
    'authors.author': 'Author',
    'authors.profileOf': 'Profile of',
    'authors.postsBy': 'Posts by',
    'authors.noPosts': 'No posts available from this author.',
    'authors.avatarOf': 'Avatar of',

    'footer.stayUpdated': 'Stay Updated',
    'footer.stayUpdatedSub': 'Get the latest posts delivered to your inbox.',
    'footer.navigation': 'Navigation',
    'footer.legal': 'Legal',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.connect': 'Connect',
    'footer.rights': 'All rights reserved.',
    'footer.theme': 'Theme',

    'pagination.previous': 'Previous',
    'pagination.next': 'Next',
    'pagination.previousAria': 'Go to previous page',
    'pagination.nextAria': 'Go to next page',
    'pagination.more': 'More pages',

    'search.title': 'Search',
    'search.shortcut': 'Search (⌘K)',
    'search.aria': 'Search blog posts',
    'search.description': 'Search blog posts by title, description, tags, or content',
    'search.placeholder': 'Search posts...',
    'search.searching': 'Searching...',
    'search.resultOne': 'result found',
    'search.resultMany': 'results found',
    'search.noResults': 'No results found',
    'search.noResultsFor': 'No results found for',
    'search.selected': 'Selected',
    'search.close': 'Close search',
    'search.recentPosts': 'Recent Posts',
    'search.recentSearches': 'Recent Searches',
    'search.hint': 'Search by title, description, tags, or content',
    'search.results': 'Search results',
    'search.goTo': 'Go to',
    'search.loadingIndex': 'Loading search index...',
    'search.startTyping': 'Start typing to search posts...',
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
    'nav.blog': 'Blog',
    'nav.about': 'Hakkında',
    'nav.tags': 'Etiketler',
    'nav.authors': 'Yazarlar',
    'nav.menu': 'Menüyü aç/kapat',
    'lang.switch': 'Read in English',
    'lang.switchLabel': 'Dili değiştir',
    'skip.main': 'Ana içeriğe geç',
    'theme.toggle': 'Temayı değiştir',

    'home.welcome': 'Merhaba, ben',
    'home.readBlog': 'Blogu oku',
    'home.aboutMe': 'Hakkımda',
    'home.latest': 'Blogdan son yazılar',
    'home.latestSub': 'Güncel yazılar ve notlar',
    'home.viewAll': 'Tümünü gör',
    'home.viewAllPosts': 'Tüm yazıları gör',
    'home.viewAllPostsAria': 'Tüm blog yazılarını gör',
    'home.exploreAll': 'Tüm yazılara ve rehberlere göz atın',
    'home.connect': 'İletişime geçelim',
    'home.connectSub': 'Sorunuz mu var ya da birlikte çalışmak mı istiyorsunuz? Yazmaktan çekinmeyin!',
    'home.getInTouch': 'İletişime geç',
    'home.available': 'Ulaşılabilir',

    'about.title': 'Hakkında',
    'about.subtitle': 'SAP Development Architect · İstanbul, Türkiye',
    'about.p1':
      'Telekomünikasyon, enerji, finans, üretim ve daha birçok sektörde 15 yılı aşkın deneyime ve 60’tan fazla projeye sahip SAP Development Architect.',
    'about.p2':
      'SAP S/4HANA ve ECC üzerinde ABAP, Fiori, SAPUI5 ve SAP BTP ile çalışıyor; RAP ve CAP ile clean-core uzantılar geliştiriyor. Teknik ekiplere liderlik ediyor ve günlük teslimatlarında yapay zekâ destekli geliştirmeyi kullanıyor.',
    'about.p3':
      'Bu blogdaki yazılar hem Türkçe hem İngilizce yayımlanıyor.',
    'about.contact': 'İletişim',

    'blog.title': 'Blog',
    'blog.page': 'Sayfa',
    'blog.noPosts': 'Henüz yazı yok.',
    'post.total': 'toplam',
    'post.subposts': 'alt yazı',
    'post.subpost': 'alt yazı',
    'post.readIn': 'Read this post in English',
    'post.previous': 'Önceki Yazı',
    'post.next': 'Sonraki Yazı',
    'post.oldest': 'En eski yazıdasınız!',
    'post.newest': 'En yeni yazıdasınız!',
    'post.previousSub': 'Önceki Alt Yazı',
    'post.nextSub': 'Sonraki Alt Yazı',
    'post.noOlderSub': 'Daha eski alt yazı yok',
    'post.noNewerSub': 'Daha yeni alt yazı yok',
    'post.parent': 'Ana Yazı',
    'post.noParent': 'Ana yazı yok',
    'post.scrollTop': 'Başa dön',
    'toc.title': 'İçindekiler',
    'toc.overview': 'Genel Bakış',
    'readingTime': 'dk okuma',

    'tags.title': 'Etiketler',
    'tags.taggedWith': 'Etiketli yazılar:',
    'tags.collection': 'Şu etiketle işaretlenmiş yazılar:',

    'authors.title': 'Yazarlar',
    'authors.none': 'Yazar bulunamadı.',
    'authors.author': 'Yazar',
    'authors.profileOf': 'Yazar profili:',
    'authors.postsBy': 'Yazıları:',
    'authors.noPosts': 'Bu yazarın henüz yazısı yok.',
    'authors.avatarOf': 'Profil fotoğrafı:',

    'footer.stayUpdated': 'Haberdar Olun',
    'footer.stayUpdatedSub': 'Yeni yazılar e-posta kutunuza gelsin.',
    'footer.navigation': 'Gezinme',
    'footer.legal': 'Yasal',
    'footer.privacy': 'Gizlilik Politikası',
    'footer.terms': 'Kullanım Koşulları',
    'footer.connect': 'Bağlantılar',
    'footer.rights': 'Tüm hakları saklıdır.',
    'footer.theme': 'Tema',

    'pagination.previous': 'Önceki',
    'pagination.next': 'Sonraki',
    'pagination.previousAria': 'Önceki sayfaya git',
    'pagination.nextAria': 'Sonraki sayfaya git',
    'pagination.more': 'Diğer sayfalar',

    'search.title': 'Ara',
    'search.shortcut': 'Ara (⌘K)',
    'search.aria': 'Blog yazılarında ara',
    'search.description': 'Yazılarda başlık, açıklama, etiket veya içeriğe göre arayın',
    'search.placeholder': 'Yazılarda ara...',
    'search.searching': 'Aranıyor...',
    'search.resultOne': 'sonuç bulundu',
    'search.resultMany': 'sonuç bulundu',
    'search.noResults': 'Sonuç bulunamadı',
    'search.noResultsFor': 'Şunun için sonuç bulunamadı:',
    'search.selected': 'Seçili',
    'search.close': 'Aramayı kapat',
    'search.recentPosts': 'Son Yazılar',
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
