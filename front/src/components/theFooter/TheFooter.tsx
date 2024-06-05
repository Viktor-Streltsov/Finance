import Logo from '@/components/icons/Logo'
import LinkedinIcon from '@/components/theFooter/icons/LinkedinIcon'
import MediumIcon from '@/components/theFooter/icons/MediumIcon'
import InstagramIcon from '@/components/theFooter/icons/InstagramIcon'
import TwitterIcon from '@/components/theFooter/icons/TwitterIcon'
import FacebookIcons from '@/components/theFooter/icons/FacebookIcons'
import {navItems} from '@/components/theHeader/TheHeader'
import Navigation from '@/components/theHeader/navigation/Navigation'
import styles from './TheFooter.module.scss'

const TheFooter = () => {

	return (
		<footer className={styles.footer}>
			<div className={styles.componentFooter}>
				<div className={styles.headerInput}>
					<div className={styles.Logo}><Logo/><h2 className={styles.nameFooter}>Мы в соц сетях</h2>
						<ul className={styles.footerImage}>
							<li>
								<LinkedinIcon />
							</li>
							<li>
								<MediumIcon />
							</li>
							<li>
								<InstagramIcon />
							</li>
							<li>
								<TwitterIcon />
							</li>
							<li>
								<FacebookIcons />
							</li>
						</ul>
					</div>
					<div className={styles.footerLink}>
						<div className={styles.nameLink}>Информация</div>
						<Navigation navLinks={navItems}/>
					</div>
				</div>
			</div>
		</footer>
	)
}

export { TheFooter }
