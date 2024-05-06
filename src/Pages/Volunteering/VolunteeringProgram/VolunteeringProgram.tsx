import React, { FC, useState, useEffect } from 'react'
import s from './VolunteeringProgram.module.scss'
import img1 from '../../../assets/Volunteering_images/volun_img1.png'

const VolunteeringProgram: FC = () => {
	// animation on time

	return (
		<div className={`container ${s.wrapper}`}>
			<img src={img1} alt='Nature' />
			<div className={s.content}>
				<div className={s.block_text}>
					<h2>Программы Волонтерства</h2>
					<p>
						Мы предлагаем широкий спектр волонтерских программ, которые
						охватывают различные аспекты общественной жизни:
					</p>
				</div>
				<div className={s.timeline}>
					<div className={`${s.container_list} ${s.right_container}`}>
						<div className={s.number}>1</div>
						<div className={s.text_box}>
							<h2>Образовательные проекты:</h2>
							<p>
								Помощь в организации и проведении образовательных мероприятий,
								семинаров и тренингов для молодежи.
							</p>
						</div>
					</div>
					<div className={`${s.container_list} ${s.right_container}`}>
						<div className={s.number}>2</div>
						<div className={s.text_box}>
							<h2>Экологические инициативы:</h2>
							<p>
								Участие в проектах по озеленению города, очистке природных
								территорий и пропаганде экологически ответственного поведения.
							</p>
						</div>
					</div>
					<div className={`${s.container_list} ${s.right_container}`}>
						<div className={s.number}>3</div>
						<div className={s.text_box}>
							<h2>Социальная поддержка:</h2>
							<p>
								Организация помощи малоимущим семьям, детям-сиротам и пожилым
								людям.
							</p>
						</div>
					</div>
					<div className={`${s.container_list} ${s.right_container}`}>
						<div className={s.number}>4</div>
						<div className={s.text_box}>
							<h2>Культурные мероприятия:</h2>
							<p>
								Помощь в организации фестивалей, выставок, творческих встреч,
								направленных на развитие культурной жизни города.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default VolunteeringProgram
