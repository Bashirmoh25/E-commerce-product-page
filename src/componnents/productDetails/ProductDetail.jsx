import { useMediaPredicate } from 'react-media-hook';
import styles from './ProductDetail.module.css';
const ProductDetail = () => {
  const screenSize = useMediaPredicate('(max-width:540px)');
  return (
    <div className={`${styles.detailContainer}`}>
        <h4 className={`${styles.grayText}`}>Sneaker Company</h4>
        <h1>Fall Limited Edition Sneakers</h1>
        <p className={`${styles.grayText}`}>
        These low-profile sneakers are your perfect casual wear companion. Featuring a 
        durable rubber outer sole, they&apos;ll withstand everything the weather can offer.
        </p>
        <section className={`${screenSize&& styles.flex}`}>
            <div className={`${screenSize?styles.flex:styles.flexStart}`}>
                <h2>&#x24;125.00</h2>
                <p className={`${styles.darkBg}`}>50&#x25;</p>
            </div>
            <div className={`${styles.lineThrough}`}>
                <p>&#x24;250.00</p>
            </div>
        </section>
    </div>
  )
}

export default ProductDetail