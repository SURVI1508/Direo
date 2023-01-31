import styles from '../../styles/allStyle/search.module.css'
import { IoIosArrowDown } from 'react-icons/io';
import { BiFilterAlt } from 'react-icons/bi';
import Link from 'next/link';
const Search = () => {

    const select = () => {
        var optn = document.getElementById("optn")
        if (optn.style.height === "0px") {
            optn.style.height = "11rem";
        } else {
            optn.style.height = "0px";
        }
    }

    return (
        <div className={styles.search__main__div}>
            <div className={styles.search__main__div__container}>
                <input type="text" placeholder='What are you looking for?' />
                <div className={styles.select} onClick={select} >
                    Select a category?
                    <IoIosArrowDown />
                    <div className={styles.select__option} id="optn">
                        <Link href="" className={styles.option__link} id="one">Hotel</Link>
                        <Link href="" className={styles.option__link}>Hotel</Link>
                        <Link href="" className={styles.option__link}>Hotel</Link>
                        <Link href="" className={styles.option__link}>Hotel</Link>
                        <Link href="" className={styles.option__link}>Hotel</Link>
                    </div>
                </div>
                <div className={styles.select}>
                    Select a Location?

                    <IoIosArrowDown />
                    {/* <div className={styles.select__option} >
                        <Link href="" className={styles.option__link}>Hotel</Link>
                        <Link href="" className={styles.option__link}>Hotel</Link>
                        <Link href="" className={styles.option__link}>Hotel</Link>
                        <Link href="" className={styles.option__link}>Hotel</Link>
                        <Link href="" className={styles.option__link}>Hotel</Link>
                    </div> */}
                </div>
                <div className={styles.select__filter__btn}>
                    <BiFilterAlt />
                </div>
                <button>Search</button>

            </div>
        </div>
    )
}

export default Search