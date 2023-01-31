import styles from '../../styles/allStyle/header.module.css'
import {Nav} from './Nav'
import {Search} from './Search'
import {Category} from './Category'
import {Drawer} from './Drawer'

const Header = () => {
    return (
        <div className={styles.header__main__div}>
            <Drawer/>
            <div className={styles.header__main__div__overlay}>
                <div className={styles.header__main__div__container}>
                    <Nav />
                    <div className={styles.header__main__div__container__text}>
                        <h1>Find the Best Places to Be</h1>
                        <p>All the top locations – from restaurants and clubs, to galleries, famous places and more..</p>
                        <Search />
                        <Category />
                    </div>
                </div>

            </div>
        </div>
    )
}

export  {Header}