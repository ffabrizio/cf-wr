import { createClient } from "contentful"

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  environment: process.env.CONTENTFUL_ENV_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY
})

export async function fetchPage(params) {
  const slug = params.slug[params.slug.length - 1];
  let collection = ""

  if (params.slug.length > 1) {
    collection = params.slug.slice(0, -1).join('/')
  }

  const {items} = await client.getEntries({
    content_type: "page",
    "fields.slug": slug,
    "fields.collection": collection,
    include: 10
  })
  
  return {
    page: items[0] || {}
  }
}

export async function fetchPages() {
  const {items} = await client.getEntries({
    content_type: "page",
    include: 10
  })
  const paths = items.map(item => {
    const collection = item.fields.collection
    let slug = [...[item.fields.slug]]

    if (collection) {
      slug = [
        ...collection.split('/'),
        ...slug
      ]
    }

    return {
      params: { slug }
    }
  })

  return {
    paths,
    fallback: false
  }
}

