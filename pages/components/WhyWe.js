import styles from '../../styles/allStyle/whyWe.module.css'
import { SiAcclaim } from 'react-icons/si';
import Image from 'next/image';
const WhyWe = () => {
    return (
        <>
            <div className={styles.activity__main__div}>
                <div className={styles.activity__main__div__container}>
                    <h1>Why Direo for your Business?</h1>
                    <p>Explore the popular listings around the world</p>
                    <div className={styles.whyWe__container}>
                        <div className={styles.whyWe__img}>
                            <Image src="/images/mobile.png" alt="" 
                            width={50}
                            height={400}

                            />
                        </div>
                        <div className={styles.whyWe__text}>
                            <div className={styles.whyWe__text__line}>
                                <div className={styles.whyWe__text__icon}>
                                    <SiAcclaim />
                                </div>
                                <div className={styles.whyWe__text__text}>
                                    <h5>Claim Listing</h5>
                                    <span>Excepteur sint occaecat cupidatat non proident sunt in culpa officia deserunt mollit.</span>
                                </div>
                            </div>
                            <div className={styles.whyWe__text__line}>
                                <div className={styles.whyWe__text__icon}>
                                    <SiAcclaim />
                                </div>
                                <div className={styles.whyWe__text__text}>
                                    <h5>Claim Listing</h5>
                                    <span>Excepteur sint occaecat cupidatat non proident sunt in culpa officia deserunt mollit.</span>
                                </div>
                            </div>
                            <div className={styles.whyWe__text__line}>
                                <div className={styles.whyWe__text__icon}>
                                    <SiAcclaim />
                                </div>
                                <div className={styles.whyWe__text__text}>
                                    <h5>Claim Listing</h5>
                                    <span>Excepteur sint occaecat cupidatat non proident sunt in culpa officia deserunt mollit.</span>
                                </div>
                            </div>
                            <div className={styles.whyWe__btns}>
                                <button style={{backgroundColor:"green"}}>See our pricing</button>
                                <button>Submit Listing</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export  {WhyWe}