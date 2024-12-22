import React, { useState } from 'react';

function ManageGallery() {
  const [images, setImages] = useState([]);

  const handleAddImage = () => {
    const newImage = prompt('Enter image URL:');
    if (newImage) setImages([...images, newImage]);
  };

  return (
    <div>
      <h1>Manage Gallery</h1>
      <button onClick={handleAddImage}>Add Image</button>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {images.map((url, index) => (
          <img key={index} src={url} alt="Gallery" style={{ width: '150px', margin: '10px' }} />
        ))}
      </div>
    </div>
  );
}

export default ManageGallery;
