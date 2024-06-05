'use client'

import React from 'react'
import ImagesCircle from './icons/circle-box.png'
import styles from './TheFeatured.module.scss'
import Image from "next/image";

const TheFeatured = () => {

	return (
		<>
			<div className={styles.blockSlider}>
				<h2 className={styles.nameSliders}>Что говорят клиенты</h2>
				<div className={styles.blockComment}>
					<div>
						<Image src={ImagesCircle} alt='img'/>
					</div>
					<p>
						еструктуризацией налогового бремени и планированием нагрузки по налогам;
						еструктуризацией налогового бремени и планированием нагрузки по налогам;
					</p>
					<div className={styles.name}>Regina Miles</div>
					<div className={styles.work}>Designer</div>
				</div>
			</div>
		</>
	)
}

export default TheFeatured
