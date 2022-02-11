import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export default function RichText({ data }) {
  const content = documentToReactComponents(data.fields.content)
  return (
    <div className="block rtf">
      {content}
    </div>
  )
}