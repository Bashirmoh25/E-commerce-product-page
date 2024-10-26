import navStyles from './Nav.module.css';
import { useMediaPredicate } from 'react-media-hook';
import close from '../../assets/images/icon-close.svg';
import { useContext } from 'react';
import commonContext from '../../commonContext.jsx';
const Nav = () => {
    const screenSize = useMediaPredicate('(max-width:540px)');
    const {setMenuOpen,menuOpen} = useContext(commonContext);
  return (
    <nav className={screenSize?navStyles.navMob :navStyles.navDesktop}>
      { screenSize&&<img src={close} alt='close icon' onClick={()=>{setMenuOpen(!menuOpen)}}/>}
        <ul>
            <li><a href="#">Collections</a></li>
            <li><a href="#">Men</a></li>
            <li><a href="#">Women</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>
  )
}

export default Nav