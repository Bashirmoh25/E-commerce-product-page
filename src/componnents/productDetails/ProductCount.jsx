import plus from '../../assets/images/icon-plus.svg';
import minus from '../../assets/images/icon-minus.svg';
import cartIcon from '../../assets/images/icon-cart.svg';
import styles from './ProductDetail.module.css';
import { useMediaPredicate } from 'react-media-hook';
import useHandleCart from '../functionalty/useCartItem';
const ProductCount = () => {
    const screenSize = useMediaPredicate('(max-width:540px)');
    const [product,handleAdd]=useHandleCart();
    
  return (
    <div className={`${styles.detailContainer} ${screenSize?null:styles.btnsDesk}` }>
        <button className={`${screenSize?styles.countBtnMob:styles.countBtnDesk}`}>
            <img src={minus} onClick={``} alt="minus icon" />
            <div className={`${styles.quantity}`}>{product.quantity}</div>
            <img src={plus} onClick={``} alt="plus icon" />
        </button>
        <div className={`${!screenSize&&styles.w49}`}>
            <button className={`${styles.addBtn} ${screenSize?styles.addBtnMob:styles.addBtnDesk}`} onClick={()=>handleAdd(product,product.proId)}>
                <img src={cartIcon} style={{width:"16px",height:'16px',marginInlineEnd:"5px"}} alt="cart icon" />
                Add to cart
            </button>
        </div>
    </div>
  )
}

export default ProductCount