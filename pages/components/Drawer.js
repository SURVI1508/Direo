import styles from '../../styles/allStyle/drawer.module.css'

const Drawer = () => {
    const close = () => {
        var drawer = document.getElementById("drawer")
        drawer.style.width = "0px"
    }
    return (
        
        <>
            <div id='drawer' className={styles.drawer__main__div}>
                <button className={styles.drawer__close__btn} onClick={close}>x</button>
                <div className={styles.main__container__all}>
                    < div className={styles.drawer__container}>
                        <div className={styles.drawer__link__container}>
                            
                            <div className={styles.links__container__link}>
                                <div className={styles.drawer__link__div}>
                                    <a className={styles.Link}>Home</a>
                                </div>
                                <div className={styles.drawer__link__div}>
                                    <a className={styles.Link} href='/'>Listing</a>
                                </div>
                                <div className={styles.drawer__link__div}>
                                    <a className={styles.Link} href='./Service'>Pages</a>
                                </div>
                                <div className={styles.drawer__link__div}>
                                    <a className={styles.Link} href='./allComponent/Footer'>Categories</a>
                                </div>
                                <button className={styles.logout__btn}>Add Listining+</button>
                            </div>
                        </div >
                    </div >
                </div >
            </div >
        </>
    )
}

export default Drawer