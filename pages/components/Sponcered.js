import styles from '../../styles/allStyle/sponcered.module.css'
import Image from 'next/image'
const Sponcered = () => {
    return (
        <>
            <div className={styles.sponcered__main__div}>
                <div className={styles.sponcered__main__container}>
                    <div className={styles.sponcered__img}>
                        <Image src="/images/cl1.png" alt=""
                            width={105}
                            height={40}
                        />
                    </div>
                    <div className={styles.sponcered__img}>
                    <Image src="/images/cl2.png" alt=""
                            width={105}
                            height={40}
                        />
                    </div>
                    <div className={styles.sponcered__img}>
                    <Image src="/images/cl3.png" alt=""
                            width={105}
                            height={40}
                        />

                    </div>
                    <div className={styles.sponcered__img}>
                    <Image src="/images/cl4.png" alt=""
                            width={105}
                            height={40}
                        />
                    </div>
                    <div className={styles.sponcered__img}>
                    <Image src="/images/cl5.png" alt=""
                            width={105}
                            height={40}
                        />

                    </div>
                </div>
            </div>
        </>
    )
}

export default Sponcered