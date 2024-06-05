import React from 'react'
import styles from './ThServikesTwo.module.scss'
import Link from "next/link";
import PeopleIcons from "@/components/theFuture/icons/CircleArrowIcons";

const TheYears = () => {
    return (
        <>
            <h2 className={styles.nameHeader}>Суть финансового аудита</h2>
            <ul className={styles.wrapperList}>
                <li className={styles.blockList}>
                    <div className={styles.blockImg}><PeopleIcons/></div>
                    <p className={styles.text}>Контролировать риски</p>
                </li>
                <li className={styles.blockList}>
                    <div className={styles.blockImg}><PeopleIcons/></div>
                    <p className={styles.text}>Выявить резервы</p>
                </li>
                <li className={styles.blockList}>
                    <div className={styles.blockImg}><PeopleIcons/></div>
                    <p className={styles.text}>Защитить компанию и руководство</p>
                </li>
                <li className={styles.blockList}>
                    <div className={styles.blockImg}><PeopleIcons/></div>
                    <p className={styles.text}>Экономить силы и средства</p>
                </li>
            </ul>
        </>
    )
}

export default TheYears