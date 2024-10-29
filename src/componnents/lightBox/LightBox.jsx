import { images } from './images';
import "react-image-gallery/styles/css/image-gallery.css";
import ReactImageGallery from 'react-image-gallery';
import { useMediaPredicate } from 'react-media-hook';
import { useContext} from 'react';
import commonContext from '../../commonContext';
const LightBox = () => {
  const screenSize =  useMediaPredicate('(max-width:540px)');
  const {openBox,setOpenBox} =useContext(commonContext);
  return (
    <div className={``}>
        <ReactImageGallery 
        items={images} 
        onClick={()=>{setOpenBox(!openBox)}} 
        showFullscreenButton={false}
        showPlayButton={false}
        showNav={screenSize}
        showThumbnails={!screenSize}
        
         />
         
    </div>
  )
}

export default LightBox