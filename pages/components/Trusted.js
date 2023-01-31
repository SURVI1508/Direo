import styles from '../../styles/allStyle/trusted.module.css'
import Image from 'next/image'
const Trusted = () => {
    return (
        <div className={styles.activity__main__div}>
            <div className={styles.activity__main__div__container}>
                <h1>Trusted By Over 4000+ Users</h1>
                <p>Here is what people say about Direo</p>
            </div>
            <div className={styles.trusted__slider__container}>
                <div className={styles.trusted__slide}>
                    {/* <div className={styles.trusted__slide__btn}>
                        <button className={styles.trusted__slide__next__btn}>▶️</button>
                        <button className={styles.trusted__slide__back__btn}>▶️</button>
                    </div> */}

                    <div className={styles.trusted__slide__avtar}>
                        <Image src="/images/cat1.jpg" alt="" 
                        width={100}
                        height={100}
                        />
                    </div>
                    <h5>Sourav Gupta</h5>
                    <span>Web Developer</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis non facilis minus magnam illo pariatur exercitationem voluptate voluptates odio autem. Ratione perspiciatis est molestias recusandae, quis ipsa id corporis nemo.</p>
                </div>
            </div>
        </div>

    )
}

export default Trusted