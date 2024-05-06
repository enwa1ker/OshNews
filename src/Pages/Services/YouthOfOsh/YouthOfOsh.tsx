import React, { FC, useState } from 'react'
import s from './YouthOfOsh.module.scss'
import image_1 from '../../../assets/Services_images/img1.png'
import { MdOutlineKeyboardArrowUp } from 'react-icons/md'

interface IYouthOfOsh {
	show: boolean
	setShow: (value: boolean) => void
}

const YouthOfOsh: FC<IYouthOfOsh> = ({ setShow, show }) => {
	return (
		<section className={`container ${s.wrapper}`}>
			<div className={s.content}>
				<span onClick={() => setShow(false)} className={show ? s.show : s.hide}>
					Свернуть <MdOutlineKeyboardArrowUp />
				</span>
				<h2>"Мы - Youth of Osh: Создаем будущее вместе!"</h2>
				<h3>
					"Мы - <span>Youth of Osh:</span> Создаем будущее вместе!"
				</h3>
				<p>
					Мы - "Youth of Osh" - это не просто организация, мы - сообщество
					молодежи, объединенной общей целью создания лучшего будущего для нас
					самих и для нашего общества. С момента нашего создания более 15 лет
					назад, мы стали источником вдохновения и местом для реализации идей и
					мечтаний молодых людей в Кыргызстане.
				</p>
				<p>
					Мы верим в силу молодежи и стремимся создать мир, где каждый молодой
					человек может реализовать свой потенциал и внести свой вклад в
					общественное благополучие. "Youth of Osh" - это пространство для
					развития лидерских качеств, обмена идеями и вдохновения на пути к
					изменениям. Мы не просто организация, мы - движение, направленное на
					создание мирного, справедливого и устойчивого будущего для
					всех.Подробнее...
					<span
						className={show ? s.hide : s.show}
						onClick={() => setShow(true)}
					>
						Подробнее...
					</span>
				</p>
			</div>
			<img src={image_1} alt='ServiceImage' />
		</section>
	)
}

export default YouthOfOsh
