import { createClient } from "contentful"

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY
})

export async function fetchContent(params) {
  console.log(params)
  const {items} = await client.getEntries({
    content_type: "page",
    "fields.slug": params.slug,
    include: 5
  })
  return {
    page: items[0] || {}
  }
}

export async function fetchPaths() {
  const {items} = await client.getEntries({
    content_type: "page"
  })
  const paths = items.map(item => {
    return {
      params: { slug: item.fields.slug }
    }
  })

  return {
    paths,
    fallback: false
  }
}

