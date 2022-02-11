import { fetchContent } from "../services/contentful-client"
import Section from "../components/base/Section"

export async function getStaticProps() {
  const res = await fetchContent({ slug: process.env.CONTENTFUL_START_PAGE_SLUG })
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