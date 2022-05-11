import Image from "./Base/Image"
import Cta from "./Cta"

export default function Editorial({ data }) {
  const { title, description, callToAction, media } = data.fields
  const mediaUrl = media?.fields?.file?.url || ""
  return (
    <div className="block editorial">
      <h3>{title}</h3>
      { mediaUrl &&
      <div>
        <Image 
          src={`https:${mediaUrl}`} 
          width={media.fields.file.details.image.width} 
          height={media.fields.file.details.image.height} />
      </div>
      }
      {description}
      <br />
      <Cta data={callToAction} />
    </div>
  )
}