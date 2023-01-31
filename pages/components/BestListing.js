import styles from '../../styles/allStyle/bestListing.module.css'
import { AiOutlineHeart } from 'react-icons/ai';
import { AiOutlineStar } from 'react-icons/ai';
import { CiLocationOn } from 'react-icons/ci';
import { TbPhoneCall } from 'react-icons/tb';
import { MdOutlineWatchLater } from 'react-icons/md';
import { BsEyeFill } from 'react-icons/bs';
import Image from 'next/image';
import {product} from './bestJson'
import { useState } from 'react';
const BestListing = () => {
    const [products, setProducts] = useState(product)
    return (
        <>
            <div className={styles.activity__main__div}>
                <div className={styles.activity__main__div__container}>
                    <h1 style={{textAlign:"center"}}>Best Listings Around the World</h1>
                    <p>Explore the popular listings around the world</p>
                    <div className={styles.activity__card__container}>
                        {
                            products.map((val, indx) => {
                                return (
                                    <>
                                        <div className={styles.bestCard__cards} key={indx}>
                                            <div className={styles.bestCard__cards__img} style={{ background: val.img }}>
                                                <button>{val.cat}</button>
                                                <div className={styles.bestCard__cards__like__btn}>
                                                    {/* <AiOutlineHeart /> */}
                                                    {/* 💖 */}
                                                </div>
                                            </div>
                                            <div className={styles.bestCard__cards__info}>
                                                <div className={styles.bestCard__cards__avtar}>
                                                    <Image
                                                        width={800}
                                                        height={500}
                                                        src={val.profile} alt=""
                                                    />
                                                </div>
                                                <h5>{val.name}</h5>
                                                <div className={styles.bestCard__rate__container}>
                                                    <div className={styles.bestCard__rate} style={{ backgroundColor: "rgb(0, 156, 0)" }}>
                                                    {val.rating}
                                                        <AiOutlineStar />
                                                    </div>
                                                    <div className={styles.bestCard__rate}>
                                                    {val.price}
                                                    </div>
                                                    <div className={styles.bestCard__rate} style={{ background: "none", border: "0.0000001px solid lightgray", fontSize: "12px", color: "red" }}>
                                                        Closed Now
                                                    </div>
                                                </div>

                                                <div className={styles.bestCard__contact}>
                                                    <span><CiLocationOn className={styles.bestCard__contact__icon} />Tampa, Las Vegas, Houston</span>
                                                    <span><TbPhoneCall className={styles.bestCard__contact__icon} />34402703262</span>
                                                    <span><MdOutlineWatchLater className={styles.bestCard__contact__icon} /> June 10, 2020</span>
                                                </div>
                                            </div>
                                            <div className={styles.bestCard__footer}>
                                                <div class="d-flex align-item-center gap-2">
                                                    <div className={styles.bestCard__footer__icon}>
                                                        <TbPhoneCall />
                                                    </div>
                                                    Outdoor Activities
                                                </div>
                                                <span><BsEyeFill />1233</span>
                                            </div>
                                        </div>


                                    </>
                                )
                            })
                        }



                    </div>
                    <button className={styles.bestCard__explore}>Explore All 200+</button>
                </div>
            </div>
        </>
    )
}

export default BestListing