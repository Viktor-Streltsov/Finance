import React from 'react'
import Link from 'next/link'
import ImageOne from './icons/croods-user-interface.png'
import styles from './TheFuture.module.scss'
import Image from "next/image";

const TheFuture = () => {
	return (
		<div className={styles.blockFuture}>
			<div>
				<h1 className={styles.nameHeader}>Финансовый аудит 2024: виды и порядок проведения</h1>
				<Link href={'#'} className={styles.btnServices}><span className={styles.textLink}>Оставить заявку</span></Link>
			</div>
			<div>
				<Image src={ImageOne} alt='img'/>
			</div>
		</div>
	)
}

export default TheFuture