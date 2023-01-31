import styles from '../../styles/allStyle/subscribe.module.css'
import {Sponcered} from './Sponcered'
const Subscribe = () => {
    return (
        <>
            <div className={styles.getUpdate__main__main__div__section}>
                <Sponcered/>
                {/* <div className={styles.getUpdate__main__div}> */}
                    <div className={styles.getUpdate__main__container}>
                        <div className={styles.newsletter__box}>
                            <h2>Subscribe to Newsletter</h2>
                            <p>Subscribe to get update and information. Dont worry, we wont send spam!</p>
                        </div>

                        <div className={styles.mail__submit__box}>
                            <div className={styles.mail__input}>
                                <input type="email" placeholder='✉️ Enter your email' />
                                <button>SUBMIT</button>
                            </div>
                        </div>
                    </div>
                {/* </div> */}
            </div>

        </>
    )
}

export  {Subscribe}