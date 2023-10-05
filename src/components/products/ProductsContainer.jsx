import { useDispatch, useSelector } from 'react-redux';
import { setError, setInitialProducts } from '../../store/productSlice';
import Product from './Product';
import styles from './products.module.css'
import { useEffect } from 'react';
const ProductsContainer = () => {
    const products = useSelector(state => state.products.products)
    const dispatch = useDispatch();
    useEffect(() => {
        fetch('http://localhost:8000/products')
            .then(res => res.json())
            .then(data => dispatch(setInitialProducts(data)))
            .catch(error => dispatch(setError(error)))
    }, [dispatch])
    return (
        <div className={styles.container}>
            {
                products && products.map(product => (
                    <Product key={product.id} product={product} />
                ))
            }
        </div>
    );
}

export default ProductsContainer;
