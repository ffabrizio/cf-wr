import { fetchContent, fetchPaths } from "../services/contentful-client"
import Section from "../components/base/Section"

export async function getStaticPaths() {
  const res = await fetchPaths()
  return res
}

export async function getStaticProps({ params }) {
  const res = await fetchContent({ slug: params.slug })
  return {
    props: {
      res,
      revalidate: 5
    }
  }
}

export default function RenderPage({ res }) {
  const pageSections = res.page.fields.sections || []
  return (
    <div>
      <h1>{res.page.fields.title}</h1>
      {
        pageSections.map(section => (
          <Section key={section.sys.id} data={section} />
        ))
      }
    </div>
  )
}