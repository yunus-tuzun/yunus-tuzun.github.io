import { SITE } from '@/consts'
import rss from '@astrojs/rss'
import type { APIContext } from 'astro'
import { getAllPosts } from '@/lib/data-utils'
import { languages, localizePath, ui, type Lang } from '@/i18n/ui'

export async function feed(context: APIContext, lang: Lang) {
  try {
    const posts = await getAllPosts(lang)

    return rss({
      title: SITE.title,
      description: ui[lang]['site.description'],
      site: context.site ?? SITE.href,
      customData: `<language>${languages[lang].locale}</language>`,
      items: posts.map((post) => ({
        title: post.data.title,
        description: post.data.description,
        pubDate: post.data.date,
        link: localizePath(`/blog/${post.id}/`, lang),
      })),
    })
  } catch (error) {
    console.error('Error generating RSS feed:', error)
    return new Response('Error generating RSS feed', { status: 500 })
  }
}
