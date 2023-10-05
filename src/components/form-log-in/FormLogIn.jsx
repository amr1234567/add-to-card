import { useEffect, useState } from "react";
import styles from './foem.module.css'
import { useDispatch, useSelector } from "react-redux";
import { setEmail, setPassword, setWrongFields } from "../../store/AuthSlice";
import { setAccounts, setActiveAccount, setError } from "../../store/accountsSlice";
import { Navigate } from "react-router-dom";

const FormLogIn = () => {
    const [showPassword, setShowPassword] = useState(false)
    const formData = useSelector(state => state.auth)
    const accounts = useSelector(state => state.accounts)
    const dispatch = useDispatch()

    useEffect(() => {
        fetch('http://localhost:8000/accounts')
            .then(res => res.json())
            .then(data => dispatch(setAccounts(data)))
            .catch(error => dispatch(setError(error)))
    }, [dispatch])

    let handleSubmit = (e) => {
        e.preventDefault();
        let result = accounts.accounts.filter(account => account.email === formData.email && account.password === formData.password)
        if (result[0]) dispatch(setActiveAccount(result[0].id))
        else dispatch(setWrongFields(true))
    }

    return (
        <>
            <form className={styles.form} onSubmit={handleSubmit}>
                <h1>Log In</h1>
                <div className={styles.parentEmail}>
                    <input
                        className={styles.input}
                        type="text"
                        name="email"
                        id="email"
                        placeholder="Email"
                        value={formData.email}
                        onClick={(e) => {
                            formData.wrongInputs && dispatch(setWrongFields(false))
                            e.target.placeholder = ''
                        }}
                        onBlur={(e) => {
                            e.target.placeholder = 'Email'
                        }}
                        onChange={(e) => dispatch(setEmail(e.target.value))}
                    />
                    {formData.wrongInputs &&
                        <span className={styles["wrong-field"]}>
                            Email field wrong or ur account doesn{"'"}t exist
                        </span>}
                </div>
                <div className={styles.parentPassword}>
                    <input
                        className={styles.input}
                        type={!showPassword ? 'password' : 'text'}
                        name="password"
                        id="password"
                        onClick={(e) => {
                            formData.wrongInputs && dispatch(setWrongFields(false))
                            e.target.placeholder = ''
                        }}
                        onBlur={(e) => {
                            e.target.placeholder = 'Password'
                        }}
                        placeholder="Password"
                        onChange={(e) => dispatch(setPassword(e.target.value))}
                        value={formData.password}
                    />
                    {formData.wrongInputs &&
                        <span className={styles["wrong-field"]}>
                            Password field wrong or ur account doesn{"'"}t exist
                        </span>}
                </div>
                <label>
                    <input
                        type="checkbox"
                        name="showPassword"
                        checked={showPassword}
                        onChange={e => setShowPassword(e.target.checked)}
                    />
                    {'  ' + ' '}Show Password
                </label>
                <button disabled={formData.email === '' || formData.password === ''} className={styles.btn} type="submit">Log In</button>
            </form>
            {accounts.activeAccountId > 0 && <Navigate to={'/main'} />}
        </>
    );
}

export default FormLogIn;
