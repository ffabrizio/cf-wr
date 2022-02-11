import Link from "next/link"

export default function Cta({ data }) {
  return (
    <Link className="cta" href={'/' + data.fields.page.fields.slug}>
      <a>{data.fields.title}</a>
    </Link>
  )
}