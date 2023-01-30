import Link from 'next/link'
import styles from '../../styles/allStyle/nav.module.css'
import { HiMenuAlt1 } from 'react-icons/hi';
import { FaUser } from 'react-icons/fa';

const Nav = () => {

    const open = () => {
        const drawer = document.getElementById("drawer")
        drawer.style.width = "230px"
    }
    return (
        <div className={styles.nav__div}>

            <div className={styles.nav__Link} class="d-flex align-items-center gap-3">

                <div className={styles.nav__menu__btn} onClick={open}>
                    <HiMenuAlt1 />
                </div>

                <div className={styles.nav__logo}>
                    <img src="./images/dLogo.png" alt="" />
                </div>

                <div className={styles.nav__link__link}>
                    <Link href="/" className={styles.nav__link__link__vist}>Home</Link>
                    <div className={styles.nav__link__link__toggel}>
                        <Link href="" className={styles.nav__link__link__toggel__link}>Home1</Link>
                        <Link href="" className={styles.nav__link__link__toggel__link}>Home1</Link>
                        <Link href="" className={styles.nav__link__link__toggel__link}>Home1</Link>
                        <Link href="" className={styles.nav__link__link__toggel__link}>Home1</Link>
                    </div>
                    <Link href="/" className={styles.nav__link__link__vist}>Listing</Link>
                    {/* <div className={styles.nav__link__link__toggel} style={{marginLeft:"7rem"}}>
                        <Link href="" className={styles.nav__link__link__toggel__link}>List Map</Link>
                        <Link href="" className={styles.nav__link__link__toggel__link}>Grid View</Link>
                        <Link href="" className={styles.nav__link__link__toggel__link}>List Map (col-1)</Link>
                        <Link href="" className={styles.nav__link__link__toggel__link}>List Map (col-10)</Link>
                    </div> */}
                    <Link href="/" className={styles.nav__link__link__vist}>Categories</Link>
                    <Link href="/" className={styles.nav__link__link__vist}>Pages</Link>
                </div>
            </div>

            <div className={styles.nav__btn} class="d-flex align-items-center gap-3">
                <div className={styles.nav__btn__logIn}>
                    <Link href="/" className={styles.nav__link__link__vist__logIn}>Login</Link>
                    <span>or</span>
                    <Link href="/" className={styles.nav__link__link__vist__logIn}>Register</Link>
                </div>
                <div className={styles.nav__btn__add__listing}>
                    <button >Add Listing</button>
                </div>
                <div className={styles.nav__btn__user}>
                    <FaUser />
                </div>
            </div>

        </div>
    )
}

export default Nav