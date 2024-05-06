import React, { FC, useEffect, useState } from 'react'
import s from './FormSuccess.module.scss'
import { MdClose } from 'react-icons/md'

interface ISuccess {
	enter: boolean
	setEnter: (value: boolean) => void
	onClose: () => void // Добавлен проп onClose
}

const FormSuccess: FC<ISuccess> = ({ enter, setEnter, onClose }) => {
	useEffect(() => {
		// При рождении убрать скрол
		document.body.style.overflow = 'hidden'
		// При нажатии на ESC закрыть модальное окно
		document.addEventListener('keydown', e => {
			e.code === 'Escape' && onClose() // Закрываем модальное окно при нажатии на ESC
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

	const hideModal = () => {
		onClose()
	}

	return (
		<div onClick={hideModal} className={s.wrapper}>
			<div onClick={e => e.stopPropagation()}>
				<div className={s.content}>
					<div className={s.icon}>
						<MdClose onClick={hideModal} className={s.close_icon} />
					</div>
					<div className={s.block_text}>
						<h2 className={s.title}>Ваша заявка успешно отправлена</h2>
						<p>Мы свяжемся с вами в течении 2-3 рабочих недель</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default FormSuccess
