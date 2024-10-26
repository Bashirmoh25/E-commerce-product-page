
import logo from '../../assets/images/logo.svg';
import menuIcon from '../../assets/images/icon-menu.svg';
import cart from '../../assets/images/icon-cart.svg';
import avatar from '../../assets/images/image-avatar.png';
import {useMediaPredicate} from 'react-media-hook';
import Nav from '../Nav/Nav';
import styles from './Header.module.css';
import { useContext } from 'react';
import commonContext from '../../commonContext.jsx';
const Header = () => {
    const screenSize= useMediaPredicate('(max-width:540px)');
    const {setMenuOpen,menuOpen ,basketOpen,setBasketOpen} 
    =useContext(commonContext);
    
  return (
    <div className={`${styles.header} `}>
    <div className={` ${!screenSize?styles.border:styles.flex}`}>
      {/**menu and logo in small screens */}
      {screenSize&&menuOpen&&
        <Nav></Nav>
      }
      <div className={`${styles.flex}`}>{/**flex logo and menu */}
        {/***this will appear in sm screens */}
        {screenSize&&
          <div onClick={()=>{setMenuOpen(!menuOpen)}}>
            <img src={menuIcon} alt="menuIcon" />
          </div>
        }

        {/**end of note \\\\\\\\\\\\\\\\\\\\ */}

        <div>
          <img src={logo} alt="logo" />
        </div>
        {/**this will appear on lg screens */}
        {!screenSize&&
          <Nav></Nav>
        }
      </div>
      {/**end----------------------------- */}
      <div className={`${styles.flex}`}>{/*** flex cart and avatar  */}
         <div className={`${styles.center} ${styles.pos}`} onClick={()=>{setBasketOpen(!basketOpen)}}>
          {
            <div className={`${styles.notify}`}></div>
          }
          <img src={cart} alt="cart" />
         </div>
         <div className={`${styles.center} ${screenSize?styles.avatarMob:styles.avatarDesk}`}>
          <img src={avatar} alt="avatar" />
         </div>
      </div>
    </div>
    </div>
  )
}

export default Header