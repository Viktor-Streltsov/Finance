import React from 'react';
import Link from "next/link";

import styles from './ThePrice.module.scss';
const ThePrice = () => {
    return (
        <div>
            <h2 className={styles.headerPrise}>Цена</h2>
            <p className={styles.textHeader}>Закажи у нас пакет в которых есть все услуги</p>
            <ul className={styles.blockList}>
                <li className={styles.listTwo}>
                    <h2 className={styles.nameList1}>Простой</h2>
                    <p className={styles.prise}>999$</p>
                    <ul className={styles.blockText}>
                        <li className={styles.textLisr}>Аудиторское заключение</li>
                        <li className={styles.textLisr}>Оценка ведения бухучета</li>
                        <li className={styles.textLisr}>Консультационная поддержка</li>
                        <li className={styles.textLisr}>Персональные наглядные отчеты</li>
                    </ul>
                    <Link className={styles.btnUs} href='#'>Оставить заявку</Link>
                </li>
                <li className={styles.listOne}>
                    <h2 className={styles.nameList}>Стандартный</h2>
                    <p className={styles.prise1}>4999$</p>
                    <ul className={styles.blockText}>
                        <li className={styles.textLisr}>Средняя стоимость по рынку</li>
                        <li className={styles.textLisr}>Аудит по персональному техзаданию</li>
                        <li className={styles.textLisr}>Опыт 100% штатных аудиторов</li>
                        <li className={styles.textLisr}>Расширенные гарантии и страховка</li>
                    </ul>
                    <Link className={styles.btnUs1} href='#'>Оставить заявку</Link>
                </li>
                <li className={styles.listTwo}>
                    <h2 className={styles.nameList1}>Премиум</h2>
                    <p className={styles.prise}>2999$</p>
                    <ul className={styles.blockText}>
                        <li className={styles.textLisr}>распределение расходов;</li>
                        <li className={styles.textLisr}>документы для проверяющих органов</li>
                        <li className={styles.textLisr}>ведение корректного аналитического учета</li>
                        <li className={styles.textLisr}>Консультационная поддержка</li>
                    </ul>
                    <Link className={styles.btnUs} href='#'>Оставить заявку</Link>
                </li>
            </ul>
        </div>
    );
};

export default ThePrice;