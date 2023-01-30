import styles from '../../styles/allStyle/activity.module.css'
import { FaStore } from 'react-icons/fa';
import { useState } from 'react'
import activity from './activityJson'

const Activity = () => {
    const [activities, setActivity] = useState(activity);
    // console.log(activities)
    return (
        <div className={styles.activity__main__div}>
            <div className={styles.activity__main__div__container}>
                <h1>What Kind of Activity do you Want to try?</h1>
                <p>Discover best things to do restaurants, shopping, hotels, cafes and places around <br />the world by categories.</p>
                <div className={styles.activity__card__container}>

                    {
                        activities.map((val, i) => {
                            return (
                                <>
                                    <div className={styles.activity__cards} style={{ background: val.img }} key={val.id}>
                                        <div className={styles.activity__cards__overlay}>
                                            <FaStore style={{ color: val.clr,fontSize:"1.7rem"}} />
                                            <span>{val.cat}</span>
                                            <button>{val.list}</button>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }

                </div>
            </div>
        </div >
    )
}

export default Activity