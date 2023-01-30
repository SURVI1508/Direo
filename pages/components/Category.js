import styles from '../../styles/allStyle/category.module.css'
import { MdOutdoorGrill } from 'react-icons/md';

const Category = () => {
    return (
        <div className={styles.category__main__div}>
            <div className={styles.category__main__div__container}>
                <div className={styles.category__card}>
                    <MdOutdoorGrill />
                    <span>Outdoor Activities</span>
                </div>
                <div className={styles.category__card}>
                    <MdOutdoorGrill />
                    <span>Shopping</span>
                </div>
                <div className={styles.category__card}>
                    <MdOutdoorGrill />
                    <span>Hotel</span>
                </div>
                <div className={styles.category__card}>
                    <MdOutdoorGrill />
                    <span>Place</span>
                </div>
                <div className={styles.category__card}>
                    <MdOutdoorGrill />
                    <span>Resturent</span>
                </div>
            </div>
        </div>
    )
}

export default Category