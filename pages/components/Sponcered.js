import styles from '../../styles/allStyle/sponcered.module.css'

const Sponcered = () => {
    return (
        <>
            <div className={styles.sponcered__main__div}>
                <div className={styles.sponcered__main__container}>
                    <div className={styles.sponcered__img}>
                        <img src="/images/cl1.png" alt="" />
                    </div>
                    <div className={styles.sponcered__img}>
                    <img src="/images/cl2.png" alt="" />

                    </div>
                    <div className={styles.sponcered__img}>
                    <img src="/images/cl3.png" alt="" />

                    </div>
                    <div className={styles.sponcered__img}>
                    <img src="/images/cl4.png" alt="" />

                    </div>
                    <div className={styles.sponcered__img}>
                    <img src="/images/cl5.png" alt="" />

                    </div>
                </div>
            </div>
        </>
    )
}

export default Sponcered