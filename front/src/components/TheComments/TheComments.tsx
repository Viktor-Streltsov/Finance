'use client'

import React from 'react'
import styles from './TheComments.module.scss'

const TheComments = () => {


	return (
		<>
			<h2 className={styles.nameHeader}>Услуги</h2>
			<ul className={styles.blockList}>
				<li className={styles.list}>
					<p className={styles.name}>Налоговый аудит</p>
					<p className={styles.text}>
						Все ли у вас в порядке с налогами?
					</p>
				</li>
				<li className={styles.list}>
					<p className={styles.name}>Обязательный аудит</p>
					<p className={styles.text}>Аудиторское заключение</p>
				</li>
				<li className={styles.list}>
					<p className={styles.name}>Стоимость аудиторских услуг. Максимально ценный подход</p>
				</li>
				<li className={styles.list}>
					<p className={styles.name}>Аудит по спецзаданию</p>
					<p className={styles.text}>Проведем экспресс-аудит по Техзаданию</p>
				</li>
				<li className={styles.list}>
					<p className={styles.name}>Проверка главного бухгалтера</p>
				</li>
			</ul>
		</>
	)
}

export default TheComments