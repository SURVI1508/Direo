import styles from '../../styles/allStyle/destination.module.css'
import Link from 'next/link'
const Destination = () => {
    return (
        <>
            <div className={styles.activity__main__div}>
                <div className={styles.activity__main__div__container}>
                    <h1>Destination We Love</h1>
                    <p>Explore the popular listings around the world</p>
                </div>
                <div className={styles.activity__card__container}>

                    <div className={styles.activity__cards} style={{ background: "url(/images/place1.jpg)" }}>
                        <div className={styles.activity__cards__overlay}>
                            <h5>Tampa</h5>
                            <p>1 Listing</p>
                        </div>
                    </div>

                    <div className={styles.activity__cards} style={{ background: "url(/images/place2.png)" }}>
                        <div className={styles.activity__cards__overlay}>
                            <h5>Tampa</h5>
                            <p>1 Listing</p>
                        </div>
                    </div>

                    <div className={styles.activity__cards} style={{ background: "url(/images/place3.png)" }}>
                        <div className={styles.activity__cards__overlay}>
                            <h5>Tampa</h5>
                            <p>1 Listing</p>
                        </div>
                    </div>

                    <div className={styles.activity__cards} style={{ background: "url(/images/place4.png)" }}>
                        <div className={styles.activity__cards__overlay}>
                            <h5>Tampa</h5>
                            <p>1 Listing</p>
                        </div>
                    </div>
                </div>

                <div className={styles.destinatins__container}>

                    <div className={styles.destinatins__container__text}>
                        <Link href=""  className={styles.destinatins__link}>Tampa (2)</Link>
                        <Link href="" className={styles.destinatins__link}>Tampa (2)</Link>
                    </div>
                    <div className={styles.destinatins__container__text}>
                        <Link href=""  className={styles.destinatins__link}>India (2)</Link>
                        <Link href="" className={styles.destinatins__link}>Tampa (2)</Link>
                    </div>
                    <div className={styles.destinatins__container__text}>
                        <Link href=""  className={styles.destinatins__link}>USA (2)</Link>
                        <Link href="" className={styles.destinatins__link}>Tampa (2)</Link>
                    </div>
                    <div className={styles.destinatins__container__text}>
                        <Link href=""  className={styles.destinatins__link}>Tampa (2)</Link>
                        <Link href="" className={styles.destinatins__link}>New York (2)</Link>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Destination