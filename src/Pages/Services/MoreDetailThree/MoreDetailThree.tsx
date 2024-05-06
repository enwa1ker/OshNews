import React, { FC } from 'react'
import s from './MoreDetailThree.module.scss'
import detail_img1 from '../../../assets/Services_images/detail_img1.png'
import detail_img2 from '../../../assets/Services_images/detail_img2.png'
import detail_img3 from '../../../assets/Services_images/detail_img3.png'

const MoreDetailThree: FC = () => {
	return (
		<div className={`container ${s.wrapper}`}>
			<div className={s.content}>
				<h2>"Мы - Youth of Osh: Создаем будущее вместе!"</h2>
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
					создание мирного, справедливого и устойчивого будущего для всех.
				</p>
			</div>
			<div className={s.images}>
				<img className={s.detail_imgOne} src={detail_img1} alt='Detail_Image' />
				<div className={s.block_images}>
					<img
						className={s.detail_imgTwo}
						src={detail_img2}
						alt='Detail_Image'
					/>
					<img
						className={s.detail_imgThree}
						src={detail_img3}
						alt='Detail_Image'
					/>
				</div>
			</div>
		</div>
	)
}

export default MoreDetailThree
