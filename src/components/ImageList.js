import React from 'react'

const ImageList = ({ images }) => {
  console.log(typeof images)

  const imageUrl = images.map(({ urls, description }) => {
    return (
      <ul>
        <li>
          <img src={urls.regular} alt={description} />
        </li>
      </ul>
    )
  })

  return <div>{imageUrl}</div>
}

export default ImageList
