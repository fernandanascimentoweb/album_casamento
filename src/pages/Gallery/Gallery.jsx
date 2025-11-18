import React, { useState } from 'react'
import './gallery.css'
import { data } from '../../assets/assets'
import PhotoViewer from '../../components/PhotoViewer/PhotoViewer'



const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(null);

  const openViewer = (index) => {
    setCurrentIndex(index);
  };


  return (
    <div className='gallery-container'>
      <h2>Álbum de Fotos</h2>
      <div className="grid">
        {data.map((item, index) => (
          <div
            key={item.id}
            className="photo-card"
            onClick={() => openViewer(index)}
          >
            <img src={item.img} alt={item.title} />
          </div>
        ))}
      </div>

        {currentIndex !== null && (
        <PhotoViewer
          photo={data[currentIndex]}
          photos={data}
          currentIndex={currentIndex}
          setIndex={setCurrentIndex}
          close={() => setCurrentIndex(null)}
        />
      )}


    </div>
  )
}

export default Gallery