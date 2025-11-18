import React, { useState } from 'react'
import './PhotoViewer.css'


const PhotoViewer = ({ photo, close, photos, currentIndex, setIndex }) => {

  const [anim, setAnim] = useState("fade-in");

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = photo.img;
    link.download = `foto-${photo.id}.jpg`;
    link.click();
};

  const changePhoto = (direction) => {
    setAnim("fade-out");
    setTimeout(() => {
      const newIndex =
      direction === "next"
        ? (currentIndex + 1) % photos.length
        : (currentIndex - 1 + photos.length) % photos.length;
    setIndex(newIndex);
    setAnim("fade-in");
  }, 300);
};

  return (
    <div className="viewer-overlay">
    <div className={`viewer-box ${anim}`}>
      <span className="close-btn" onClick={close}>×</span>

      <img src={photo.img} alt={photo.title} />

    <div className='bottom'>
      <button onClick={handleDownload} className="download-btn">Baixar Foto</button>

      <div className='bot'>
      <button className="nav-arrow left" onClick={() => changePhoto("prev")}>
        ❮
      </button>
      <button className="nav-arrow right" onClick={() => changePhoto("next")}>
        ❯
      </button>
      </div>
    </div>

    </div>
</div>
);
}

export default PhotoViewer