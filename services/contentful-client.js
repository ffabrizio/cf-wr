import { createClient } from "contentful"

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY
})

export async function fetchContent(params) {
  const slug = params.slug.join('/')
  const {items} = await client.getEntries({
    content_type: "page",
    "fields.slug": slug,
    include: 5
  })
  return {
    page: items[0] || {}
  }
}

export async function fetchPaths(dynamic = false) {
  const {items} = await client.getEntries({
    content_type: "page"
  })
  const paths = items.map(item => {
    return {
      params: { slug: dynamic ? item.fields.slug.split('/') : item.fields.slug }
    }
  })

  return {
    paths,
    fallback: false
  }
}

