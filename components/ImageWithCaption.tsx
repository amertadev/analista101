import React from "react"
import ReactMarkdown from "react-markdown"
import BlurImage from "./BlurImage"

interface ImageWithCaptionProps {
  src: string
  alt: string
  caption: string
}

const ImageWithCaption: React.FC<ImageWithCaptionProps> = ({
  src,
  alt,
  caption,
}) => {
  const captionStyle = {
    marginTop: "10px",
    fontSize: "12px",
    opacity: "0.5",
  }

  const markdownComponents = {
    p: ({ node, ...props }) => <p style={captionStyle} {...props} />,
  }

  return (
    <div style={{ textAlign: "center" }}>
      <BlurImage
        src={src}
        alt={alt}
        style={{ borderRadius: 10, marginTop: 10 }}
      />
      <ReactMarkdown components={markdownComponents}>{caption}</ReactMarkdown>
    </div>
  )
}

export default ImageWithCaption