import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faProductHunt } from '@fortawesome/free-brands-svg-icons';
import styles from './navbar.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../store/accountsSlice';
import { Link, Navigate } from 'react-router-dom';
const NavBar = () => {
    const dispatch = useDispatch()
    const numberOfProducts = useSelector(state => {
        let count = 0;
        state.cards.cardsId.map(i => count += i.count)
        return count
    })
    const activate = useSelector(state => state.accounts.activeAccountId)
    const account = useSelector(state => state.accounts.accounts.filter(i => i.id === state.accounts.activeAccountId))
    return (
        <>
            <nav className={styles.nav}>
                <h2>Title</h2>
                <div className={styles['right-side']}>
                    <button className={styles.btn} onClick={() => dispatch(logOut())}>Log Out</button>
                    <Link to={'/cards'}>
                        <div className={styles.products}>
                            <FontAwesomeIcon icon={faProductHunt} />
                            <span className={styles.number}>{activate !== 0 ? numberOfProducts : <Navigate to={'/'} />}</span>
                        </div>
                    </Link>
                    <div className={styles.profile}>
                        <p className={styles.name}>{activate !== 0 ? account[0].name : <Navigate to={'/'} />}</p>
                        <div className={styles['profile-picture']}>
                            <FontAwesomeIcon icon={faUser} />
                        </div>
                    </div>
                </div>
            </nav>
            {activate === 0 && <Navigate to={'/'} />}
        </>
    );
}

export default NavBar;
