import React, { FC } from 'react'
import s from './MainText.module.scss'
import main_image from '../../../assets/Services_images/services_main_image.png'

const MainText: FC = () => {
	return (
		<section className={s.wrapper}>
			<div className={s.content}>
				<h1>Start Creating Right Now</h1>
				<p>
					A high-quality solution for those who want a beautiful startup website
					quickly.
				</p>
			</div>
			<img src={main_image} alt='Main Image' />
		</section>
	)
}

export default MainText
