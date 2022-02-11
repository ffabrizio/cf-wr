import Component from "./Component"

export default function Section({ data }) {
  return (
    <div>
      <h2>{data.fields.name}</h2>
      {
        data.fields.components.map(component => (
          <Component key={component.sys.id} 
            data={component} 
            type={component.sys.contentType.sys.id} />
        ))
      }
    </div>
  )
}