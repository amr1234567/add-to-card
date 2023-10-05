import { useDispatch, useSelector } from 'react-redux';
import styles from './products.module.css'
import { addProduct, removeProduct } from '../../store/addToCard';
import { Buttons } from '../increase-decrease/Buttons';
import { useRef } from 'react';

const Product = (product) => {
    const isThere = useSelector(state => {
        if (state.cards.cardsId.length > 0) {
            if (state.cards.cardsId.filter(i => i.id === product.product.id)[0]) {
                if (state.cards.cardsId.filter(i => i.id === product.product.id)[0].count > 0) {
                    return false;
                }
            }
        }
        else return true
    })
    const data = useRef()
    const dispatch = useDispatch()
    return (
        <div className={styles['product-box']}>
            <h2 className={styles.name}>{product.product.name}</h2>
            <p className={styles.des}>{product.product.description}</p>
            <p>Price : <span className={styles.specific}>{product.product.price}</span></p>
            <p>Rating : <span className={styles.specific}>{product.product.rating}</span></p>
            <Buttons ref={data} /><br />
            <button onClick={() => {
                dispatch(addProduct({ id: product.product.id, count: data.current }))
            }} className={styles.btn}>Add to card</button>
            <button
                onClick={() => dispatch(removeProduct(product.product.id))}
                className={styles.btn}
                disabled={isThere}
            >
                Delete form List
            </button>
        </div>
    );
}

export default Product;
