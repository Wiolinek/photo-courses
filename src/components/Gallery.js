import { useEffect, useState } from 'react';

import ImageGallery from 'react-image-gallery';

import '../styles/gallery.css';


const Gallery = () => {

const [gallery, setGallery] = useState([]);
  

  useEffect(() => {
    fetch(`http://localhost:3030/slider`)
    .then(response => response.json())
    .then(result => setGallery(result))
    .catch(error => console.log(`error ${error}`))
  }, []);

  return (
      <>
        <ImageGallery alt={gallery.teacher_name} originalAlt={gallery.teacher_name} thumbnailAlt={gallery.teacher_name} autoPlay={true} items={gallery}/>
      </>
  ) 
}

export default Gallery;