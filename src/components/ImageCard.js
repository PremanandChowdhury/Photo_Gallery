import React, { useRef, useEffect, useState } from 'react'

const ImageCard = ({ images }) => {
  const { urls, description } = images
  const imgRef = useRef(null)
  const [spans, setSpans] = useState(0)

  useEffect(() => {
    const img = imgRef.current
    img.addEventListener('load', setSpan)
  }, [])

  const setSpan = (e) => {
    const height = imgRef.current.clientHeight
    setSpans(Math.ceil(height / 10))
  }

  return (
    <div style={{ gridRowEnd: `span ${spans}` }}>
      <img ref={imgRef} src={urls.regular} alt={description} />
    </div>
  )
}

export default ImageCard
