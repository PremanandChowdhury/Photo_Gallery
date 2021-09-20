import React from 'react'
import ImageCard from './ImageCard'
import './ImageList.css'

const ImageList = ({ images }) => {
  const imageList = images.map((image) => {
    return <ImageCard key={image.id} images={image} />
  })

  return <div className='image-list'>{imageList}</div>
}

export default ImageList
