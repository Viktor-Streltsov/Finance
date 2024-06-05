import React from 'react'
import styles from './TheYears.module.scss'
import Link from "next/link";
import PeopleIcons from "@/components/theFuture/icons/CircleArrowIcons";

const TheYears = () => {
	return (
		<>
			<h2 className={styles.nameHeader}>Суть финансового аудита</h2>
			<p className={styles.textHeader}>
				Аудит сформирует ясное понимание сложившейся финансовой ситуации в организации, покажет динамику развития
				бизнеса, подверженность рискам с точки зрения инвестиций.
			</p>
			<ul className={styles.wrapperList}>
				<li className={styles.blockList}>
					<div className={styles.blockImg}><PeopleIcons/></div>
					<p className={styles.text}>Прибыль</p>
				</li>
				<li className={styles.blockList}>
					<div className={styles.blockImg}><PeopleIcons/></div>
					<p className={styles.text}>Убытки</p>
				</li>
				<li className={styles.blockList}>
					<div className={styles.blockImg}><PeopleIcons/></div>
					<p className={styles.text}>Доходы</p>
				</li>
				<li className={styles.blockList}>
					<div className={styles.blockImg}><PeopleIcons/></div>
					<p className={styles.text}>Расходы</p>
				</li>
				<li className={styles.blockList}>
					<div className={styles.blockImg}><PeopleIcons/></div>
					<p className={styles.text}>Изменения в системе активов и пассивов</p>
				</li>
				<li className={styles.blockList}>
					<div className={styles.blockImg}><PeopleIcons/></div>
					<p className={styles.text}>изменения по взаиморасчетам с контрагентами</p>
				</li>
			</ul>
			<Link className={styles.btnUs} href='#'>Оставить заявку</Link>
		</>
	)
}

export default TheYears