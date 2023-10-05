import { forwardRef, useImperativeHandle, useState } from "react";
import styles from './buttons.module.css'

export const Buttons = forwardRef(function Buttons(props, ref) {
    const [counter, setCounter] = useState(0);
    useImperativeHandle(ref, () => (counter), [counter])
    return (
        <form className={styles.form}>
            <div
                className={styles["value-button"] + ' ' + styles.decrease}
                id="decrease"
                onClick={() => {
                    if (counter > 0) {
                        setCounter(prev => prev - 1)
                    }
                }}
                value="Decrease Value"
            >
                -
            </div>
            <input
                className={styles.input}
                type="number"
                id="number"
                value={counter}
                disabled={true}
            />
            <div
                className={styles["value-button"] + ' ' + styles.increase}
                id="increase"
                onClick={() => {
                    if (counter < 50) setCounter(prev => prev + 1)
                }}
                value="Increase Value"
            >
                +
            </div>
        </form>
    );
})