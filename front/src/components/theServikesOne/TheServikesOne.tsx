import React from 'react'
import Link from 'next/link'
import ImageOne from './icons/croods-user-interface.png'
import styles from './TheServikesOne.module.scss'
import Image from "next/image";

const TheServikesOne = () => {
    return (
        <div className={styles.blockFuture}>
            <div>
                <h1 className={styles.nameHeader}>Налоговый аудит</h1>
                <p className={styles.text}>
                    Все ли у вас в порядке с налогами? «Средний чек» выездной налоговой проверки по РФ в 2022 году — 74
                    млн руб. По нашей статистике (700 аудитов в год) — только 7% компаний не имеют ошибок в налоговом
                    учете. «Шокируют» не только налоговые риски, но и резервы — аудиторы находят миллионы, которые могут
                    пойти на развитие бизнеса.
                </p>
                <Link href={'#'} className={styles.btnServices}><span className={styles.textLink}>Оставить заявку</span></Link>
            </div>
            <div>
                <Image src={ImageOne} alt='img'/>
            </div>
        </div>
    )
}

export default TheServikesOne