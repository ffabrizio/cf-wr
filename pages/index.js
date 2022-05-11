import { fetchPage } from "../services/contentful-client"
import { addPageVmToWindow } from "../helpers/dom-helpers"
import Component from "../components/base/Component"

export async function getStaticProps() {
  const res = await fetchPage({ slug: [process.env.CONTENTFUL_START_PAGE_SLUG] })
  return {
    props: {
      res,
      revalidate: 5
    }
  }
}

export default function RenderPage({ res }) {
  addPageVmToWindow(res)
  const pageComponents = res.page.fields.content || []
  
  return (
    <div>
      {
        pageComponents.map(component => (
          <Component key={component.sys.id} 
            data={component} 
            type={component.sys.contentType.sys.id} />
        ))
      }
    </div>
  )
}
