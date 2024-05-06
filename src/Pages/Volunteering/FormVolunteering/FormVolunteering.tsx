import React, { FC, useEffect, useState } from 'react'
import s from './FormVolunteering.module.scss'
import { MdClose } from 'react-icons/md'
import { useForm, SubmitHandler } from 'react-hook-form'
import FormSuccess from '../FormSuccess/FormSuccess'

interface IForm {
	enter: boolean
	setEnter: (value: boolean) => void
}

type ITypeForm = {
	name: string
	gender: string
	age: number
	city: string
	cause: string
	phone_number: number
}

const FormVolunteering: FC<IForm> = ({ enter, setEnter }) => {
	//modal success
	const [showSuccess, setShowSuccess] = useState<boolean>(false)

	const handleClose = () => {
		setShowSuccess(false)
	}

	// modal form
	const hideModal = () => {
		setEnter(false)
	}

	useEffect(() => {
		// При рождении убрать скрол
		document.body.style.overflow = 'hidden'
		// При нажатии на ESC закрыть модальное окно
		document.addEventListener('keydown', e => {
			e.code === 'Escape' && hideModal()
		})
		// При рождении навесит другое событие на кнопку назад у браузера
		if (enter) {
			window.history.pushState(null, '', window.location.href)
			window.onpopstate = () => setEnter(false)
		}
		return () => {
			// При закрытии  модального окна вернуть скролл
			document.body.style.overflow = 'auto'
			// При закрытии убрать действия с кнопки ESC
			document.removeEventListener('keydown', () => {})
			// При закрытии вернуть действие по умолчанию на кнопку назад в браузере
			if (!enter) window.history.back()
			window.onpopstate = () => {}
		}
	}, [])

	// form
	const {
		register,
		handleSubmit,
		formState: { isSubmitting, isSubmitSuccessful },
		reset,
	} = useForm<ITypeForm>()

	const onSubmit: SubmitHandler<ITypeForm> = async data => {
		await new Promise(resolve => setTimeout(resolve, 1000))
		console.log(data)
		setShowSuccess(true)
	}

	useEffect(() => {
		if (isSubmitSuccessful) {
			reset()
		}
	}, [isSubmitSuccessful, reset])

	return (
		<div onClick={hideModal} className={s.wrapper}>
			<div onClick={e => e.stopPropagation()}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className={s.form_header}>
						<div className={s.icon}>
							<MdClose onClick={hideModal} className={s.close_icon} />
						</div>
						<h2 className={s.title}>Чтобы стать волонтером заполните данные</h2>
					</div>
					<div className={s.content}>
						<div className={s.input_block}>
							<h2>Введите Имя</h2>
							<input {...register('name')} type='text' placeholder='Имя' />
						</div>
						<div className={s.input_block}>
							<h2>Введите Пол</h2>
							<input {...register('gender')} type='text' placeholder='Пол' />
						</div>
						<div className={s.input_block}>
							<h2>Введите Возраст</h2>
							<input
								{...register('age')}
								type='text'
								placeholder='Возраст'
								onFocus={e => (e.target.type = 'date')}
								onBlur={e => (e.target.type = 'text')}
							/>
						</div>
						<div className={s.input_block}>
							<h2>Введите Город</h2>
							<input {...register('city')} type='text' placeholder='Город' />
						</div>
						<div className={s.input_block}>
							<h2>Почему вы хотите стать волонтером?</h2>
							<input
								{...register('cause')}
								type='text'
								placeholder='Введите ответ'
							/>
						</div>
						<div className={s.input_block}>
							<h2>Введите Контакты</h2>
							<input
								{...register('phone_number')}
								type='string'
								placeholder='Контакты'
							/>
						</div>
					</div>
					<div className={s.btn}>
						<button disabled={isSubmitting} type='submit'>
							{isSubmitting ? 'Загрузка...' : 'Отправить'}
						</button>
					</div>
					{showSuccess && (
						<FormSuccess
							enter={enter}
							setEnter={setEnter}
							onClose={handleClose}
						/>
					)}
				</form>
			</div>
		</div>
	)
}

export default FormVolunteering
