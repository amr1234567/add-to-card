import { Link } from 'react-router-dom'
import styles from './buttonFlow.module.css'
const ButtonFlow = () => {
    return (
        <Link to={'/cards'}>
            <div className={styles.btn}>
                CheckOut
            </div>
        </Link>
    );
}

export default ButtonFlow;
