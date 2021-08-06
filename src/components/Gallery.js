import { useEffect, useState } from 'react';

import ImageGallery from 'react-image-gallery';

import '../styles/gallery.css';


const Gallery = () => {

const [gallery, setGallery] = useState([]);
  
  useEffect(() => {
    fetch(`https://photopassion.ultra-violet.codes/slider`)
    .then(response => response.json())
    .then(result => setGallery(result))
    .catch(error => console.log(`error ${error}`))
  }, []);

  
  return (
      <>
        <ImageGallery alt={gallery.teacher} originalAlt={gallery.teacher} thumbnailAlt={gallery.teacher} autoPlay={true} items={gallery}/>
      </>
  ) 
}

export default Gallery;