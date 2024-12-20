import { useContext} from 'react';
import cartStyles from './Cart.module.css';
import { useMediaPredicate } from 'react-media-hook';
import commonContext from '../../commonContext';
import deleteBtn from '../../assets/images/icon-delete.svg';
const Cart = () => {
    const screenSize=useMediaPredicate('(max-width:540px)');
    const {cartItems} =useContext(commonContext);
    console.log(cartItems[0])
    
  return (
    <div className={`${cartStyles.cart} ${screenSize?cartStyles.cartMob:cartStyles.cartDesk}`}>
        <p>Cart</p>
        <hr />
        <div className={cartStyles.cartBody}>
            {cartItems.length==0 ? <p>Your cart is empty</p>:
            <div>
              <ul>
                {cartItems.map((obj,index)=>(
                  <li key={index}>
                    <div>
                      <img src="" alt="" />
                      <div></div>
                      <button type="button">
                        <img src={deleteBtn} alt="delete" />
                      </button>
                    </div>
                  </li>
                )
              )}
              </ul>
              <button className={cartStyles.checkBtn}>Check out</button>
            </div>
            }
            {/**
             * elements of cart section:
             * <p>title</p>
             * img
             * prize
             * count
             * total 
             * delete btn
             */}
             
        </div>
    </div>
  )
}

export default Cart