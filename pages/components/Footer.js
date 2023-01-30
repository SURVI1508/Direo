import styles from '../../styles/allStyle/footer.module.css'
import { BsApple, BsFacebook } from 'react-icons/bs';
import { IoLogoAndroid } from 'react-icons/io';
import { AiFillTwitterCircle, AiOutlineInstagram, AiOutlineGooglePlus } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';


const Footer = () => {
    return (
        <>
            <div className={styles.footer__mainDiv}>
                {/* <Navbar/> */}
                <div className={styles.footer__container}>
                    <div className={styles.links__container}>
                        <div className={styles.contactUs__container}>
                            <h5>Company Info</h5><br />
                            <p><a href="">Support Center</a></p>
                            <p><a href="">Term & Condition</a></p>
                            <p><a href="">Shipping</a></p>
                            <p><a href="">Privecy Polecey</a></p>
                            <p><a href="">Help</a></p>
                        </div>

                        <div className={styles.contactUs__container}>
                            <h5>Helpful Links</h5><br />
                            <p><a href="">Support Center</a></p>
                            <p><a href="">Term & Condition</a></p>
                            <p><a href="">Privecy Polecey</a></p>
                            <p><a href="">Help</a></p>
                        </div>

                        <div className={styles.contactUs__container}>
                            <h5>Connect With Us</h5><br />
                            <p><MdEmail className={styles.contactUs__social__link} /><a href="">Contact Support</a></p>
                            <p><AiFillTwitterCircle className={styles.contactUs__social__link} /><a href="">Twitter</a></p>
                            <p><AiOutlineInstagram className={styles.contactUs__social__link} /><a href="">Instagram</a></p>
                            <p><BsFacebook className={styles.contactUs__social__link} /><a href="">Facebook</a></p>
                            <p><AiOutlineGooglePlus className={styles.contactUs__social__link} /><a href="">Google+</a></p>
                        </div>

                        <div className={styles.contactUs__container}>
                            <h5>Direo on Mobile</h5><br />
                            <p>Download the Direo app today so you can find your events anytime, anywhere.</p>
                            <button><BsApple style={{fontSize:"1.3rem"}}/>App store</button>
                            <button style={{background:"black"}}><IoLogoAndroid style={{fontSize:"1.4rem"}}/>Google Play</button>
                        </div>
                    </div>
                </div>
                <div className={styles.copyright__container}>
                    All Rights Reserved ©Copyright 2023 by survi 💖
                </div>
            </div>
        </>
    )
}

export default Footer