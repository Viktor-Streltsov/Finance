'use client'

import Navigation from './navigation/Navigation'
import Link from 'next/link'
import Logo from '../icons/Logo'
import {signOut, useSession} from "next-auth/react";

import styles from './TheHeader.module.scss'

export const navItems = [
	{ label: 'О нас', href: '/about' },
	{ label: 'Услуги', href: '/blog' },
	{ label: 'Цена', href: '/project' },
	{ label: 'Контакты', href: '/project' }
]


const TheHeader = () => {
	const session = useSession()

	return (
		<header className={styles.wrapperHeader}>
			<div className={styles.menu}>
				<div className={styles.logo}><Logo /></div>
				<nav className={styles.navText}>
					<Navigation navLinks={navItems} />
				</nav>
			</div>
			<div className={styles.linck}>
				{
					session?.data ?
						<Link className={styles.btnUs} href='#'
							  onClick={() => signOut({ callbackUrl: '/' })}>Выйти</Link>
						:
						<>
							<Link className={styles.btnUs} href='/signin'>Войти</Link>
						</>
				}
			</div>
		</header>
	)
}

export { TheHeader }
