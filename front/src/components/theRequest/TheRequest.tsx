'use client'

import React, {useState} from 'react'
import styles from './TheRequest.module.scss'
import {useSession} from "next-auth/react";

interface Direction {
	name: string;
	email: string;
}

const TheRequest = () => {
	const [newAplication, setNewAplication] = useState<Direction>({
		name: '',
		email: '',
	});


	const session = useSession();

	const handleChange = (e: any) => {
		const {name, value} = e.target;
		setNewAplication(prevState => ({
			...prevState,
			[name]: value
		}));
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			const formData = new FormData();
			formData.append('name', newAplication.name);
			formData.append('email', newAplication.email);

			const response = await fetch('http://localhost:5000/api/application/', {
				method: 'POST',
				body: formData,
			});

			if (response.ok) {
				if (!res.ok) {
					throw new Error('Unable to fetch directions!');
				}

				console.log('добавлен объект');
			} else {
				console.error('Ошибка при добавлении нового направления:', response.statusText);
			}
		} catch (error) {
			console.error('Ошибка при выполнении запроса:', error);
		}
	};

	return (
		<>
			<div className={styles.blockInfoForm}>
				<div className={styles.blockForm}>
					<div>
						<h3 className={styles.nameForm}>Оставьте заявку</h3>
						<p className={styles.textForm}>
							Оставьте заявку и мы вам ответим
						</p>
					</div>
					<form className={styles.form}>
						<div>
							<input className={styles.inputForm} value={newAplication.name} onChange={handleChange}
								   name='name' type='text' placeholder='Name'/>
						</div>
						<div className={styles.btnInput}>
							<input className={styles.inputForm} value={newAplication.email} onChange={handleChange}
								   name='email' type='email' placeholder='Email'/>
							<button className={styles.btnUs} type='button'>Отправить</button>
						</div>
					</form>
				</div>
			</div>
		</>
	)
}

export default TheRequest