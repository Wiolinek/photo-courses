import { useEffect, useState } from 'react';

import ImageGallery from 'react-image-gallery';

import '../styles/gallery.css';


// import '../styles/about-us.css';


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
        <ImageGallery items={gallery} />
      </>
  ) 
}

export default Gallery;