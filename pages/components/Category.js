import styles from '../../styles/allStyle/category.module.css'
import { MdOutdoorGrill, MdOutlineFastfood } from 'react-icons/md';
import { GiShoppingBag } from 'react-icons/gi';
import { FaHotel } from 'react-icons/fa';
import { TbReplace } from 'react-icons/tb';


const Category = () => {
    return (
        <div className={styles.category__main__div}>
            <div className={styles.category__main__div__container}>
                <div className={styles.category__card} key={1}>
                    <MdOutdoorGrill style={{ fontSize: "2rem", color: "yellow" }} />
                    <span>Outdoor Activities</span>
                </div>
                <div className={styles.category__card} key={2}>
                    <GiShoppingBag style={{ fontSize: "1.7rem", color: "purple" }} />
                    <span>Shopping</span>
                </div>
                <div className={styles.category__card} key={3}>
                    <FaHotel style={{ fontSize: "1.7rem", color: "green" }} />
                    <span>Hotel</span>
                </div>
                <div className={styles.category__card} key={4}>
                    <TbReplace style={{ fontSize: "1.7rem", color: "blue" }} />
                    <span>Place</span>
                </div>
                <div className={styles.category__card} key={5}>
                    <MdOutlineFastfood style={{ fontSize: "1.7rem", color: "white" }} />
                    <span>Resturent</span>
                </div>
            </div>
        </div>
    )
}

export  {Category}