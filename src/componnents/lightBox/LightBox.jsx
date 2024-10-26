import { images } from './images';
import "react-image-gallery/styles/css/image-gallery.css";
import ReactImageGallery from 'react-image-gallery';
import { useMediaPredicate } from 'react-media-hook';
import { useContext, useEffect, useMemo } from 'react';
import commonContext from '../../commonContext';
const LightBox = () => {
  const screenSize =  useMediaPredicate('(max-width:540px)');
  const {openBox,setOpenBox,currentImg,setCurrentImg} =useContext(commonContext);
  const img =useMemo(()=>{return(currentImg)},[currentImg])
  useEffect(()=>{console.log("img:"+img)},[img])
  return (
    <div className={``}>
        <ReactImageGallery 
        items={images} 
        onClick={()=>{setOpenBox(!openBox)}} 
        showFullscreenButton={false}
        showPlayButton={false}
        showNav={screenSize}
        showThumbnails={!screenSize}
        onSlide={(index)=>{
          setCurrentImg(images[index].thumbnail)
          console.log(currentImg)
        }}
        
         />
         
    </div>
  )
}

export default LightBox