import type { PaginateFunction } from 'astro'
import { SITE } from '@/consts'
import type { Lang } from '@/i18n/ui'
import {
  getAllAuthors,
  getAllPosts,
  getAllPostsAndSubposts,
  getAllTags,
  getPostsByTag,
} from '@/lib/data-utils'

// getStaticPaths bodies shared by the default-language pages and their /tr wrappers

export async function blogPagePaths(paginate: PaginateFunction, lang: Lang) {
  const posts = await getAllPosts(lang)
  return paginate(posts, { pageSize: SITE.postsPerPage })
}

export async function postPaths(lang: Lang) {
  const posts = await getAllPostsAndSubposts()
  return posts
    .filter((post) => post.data.lang === lang)
    .map((post) => ({
      params: { id: post.id },
      props: post,
    }))
}

export async function tagPaths(lang: Lang) {
  const tagMap = await getAllTags(lang)
  return Promise.all(
    Array.from(tagMap.keys()).map(async (tag) => ({
      params: { id: tag },
      props: { tag, posts: await getPostsByTag(tag, lang) },
    })),
  )
}

export async function authorPaths() {
  const authors = await getAllAuthors()
  return authors.map((author) => ({
    params: { id: author.id },
    props: { author },
  }))
}
