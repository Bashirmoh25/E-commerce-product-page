import plus from '../../assets/images/icon-plus.svg';
import minus from '../../assets/images/icon-minus.svg';
import cartIcon from '../../assets/images/icon-cart.svg';
import styles from './ProductDetail.module.css';
import { useMediaPredicate } from 'react-media-hook';
import { useContext, useEffect, useMemo, useState } from 'react';
import commonContext from '../../commonContext';
const ProductCount = () => {
    const [quantity,setQuantity] =useState(0);
    const screenSize = useMediaPredicate('(max-width:540px)');
    const { cartItems,setCartItems} =useContext(commonContext);
    const increamentCount =()=>{
        setQuantity(quantity+1)
    }
    const decreamentCount =()=>{
        quantity>0?setQuantity(quantity-1):quantity
    }
    
    const handleAddBtn =()=>{
        console.log(cartItems);
    }
    const items = useMemo(()=>{
        return({quantity})
    },[quantity])
    useEffect(()=>{
        setCartItems((prev)=>{
            console.log(items);
            return(
                {
                    ...prev,count:quantity
                }
            )
        })
    },[items])
    const handleAdd =()=>{
        
    }
  return (
    <div className={`${styles.detailContainer} ${screenSize?null:styles.btnsDesk}` }>
        <button className={`${screenSize?styles.countBtnMob:styles.countBtnDesk}`}>
            <img src={minus} onClick={decreamentCount} alt="minus icon" />
            <div className={`${styles.quantity}`}>{quantity}</div>
            <img src={plus} onClick={increamentCount} alt="plus icon" />
        </button>
        <div className={`${!screenSize&&styles.w49}`}>
            <button className={`${styles.addBtn} ${screenSize?styles.addBtnMob:styles.addBtnDesk}`} onClick={handleAddBtn}>
                <img src={cartIcon} style={{width:"16px",height:'16px',marginInlineEnd:"5px"}} alt="cart icon" />
                Add to cart
            </button>
        </div>
    </div>
  )
}

export default ProductCount