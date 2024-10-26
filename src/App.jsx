import './App.css';
import LightBox from './componnents/lightBox/LightBox'
import Header from './componnents/header/Header'
import Cart from './componnents/cart/Cart';
import closeIcon from './assets/images/icon-close.svg';
import styles from './componnents/lightBox/LightBox.module.css'
import ProductCount from './componnents/productDetails/ProductCount';
import ProductDetail from './componnents/productDetails/ProductDetail';
import { useMediaPredicate } from 'react-media-hook';
import commonContext from './commonContext.jsx';
import { useState } from 'react';
function App() {
  const screenSize= useMediaPredicate('(max-width:540px)');
  const [menuOpen,setMenuOpen] = useState(false);
  const [basketOpen,setBasketOpen] = useState(false);
  const [cartItems,setCartItems] =useState({});
  const [openBox,setOpenBox] =useState(false);
  const removeFromCart =(producId)=>{
    setCartItems((prev)=>prev.filter(
      (item)=>item.id!==producId
    ));
  }
  const updateCount =(producId,count)=>{
    setCartItems((prev)=>
    prev.map((item)=>
    item.id===producId?{...item,count}:item
  ))
  }
  const [currentImg,setCurrentImg] =useState('');
  return (
    <div> 
    <commonContext.Provider value={{basketOpen,setBasketOpen,removeFromCart,
      openBox,setOpenBox,currentImg,setCurrentImg,
      updateCount,cartItems,setCartItems,menuOpen,setMenuOpen}}>
        <Header></Header>
        {basketOpen&&<Cart></Cart>}
     <div className={!screenSize?'grid':null}>
      <LightBox></LightBox>
      {!screenSize?openBox?<div className={styles.light}>
        <div className={`${styles.boxContent}`}>
          <img src={closeIcon} alt="closeIcon" onClick={()=>{setOpenBox(!openBox)}} />
          <LightBox></LightBox>
        </div>
      </div>:null:null
      }
      <div className={null}>
        <ProductDetail></ProductDetail>
        <ProductCount></ProductCount>
      </div>
     </div>
     </commonContext.Provider>
    </div>
  )
}

export default App
