import React, { FC, useState, useEffect } from 'react'
import s from './VolunteeringProgramReverse.module.scss'
import img1 from '../../../assets/Volunteering_images/volun_img1.png'

const VolunteeringProgramReverse: FC = () => {
	// animation on time
	return (
		<div className={`container ${s.wrapper}`}>
			<div className={s.content}>
				<div className={s.block_text}>
					<h2>Заполните анкету на нашем сайте:</h2>
					<p>
						Расскажите нам о себе, ваших интересах и том, как вы видите свое
						участие в волонтерских проектах.
					</p>
				</div>
				<div className={s.timeline}>
					<div className={`${s.container_list} ${s.right_container}`}>
						<div className={s.number}>1</div>
						<div className={s.text_box}>
							<h2>Пройдите вступительное собеседование:</h2>
							<p>
								Мы хотим лучше узнать вас и обсудить, как мы можем вместе
								работать.
							</p>
						</div>
					</div>
					<div className={`${s.container_list} ${s.right_container}`}>
						<div className={s.number}>2</div>
						<div className={s.text_box}>
							<h2> Присоединяйтесь к программам:</h2>
							<p>
								После прохождения собеседования вы станете полноправным членом
								нашей команды и сможете начать участие в выбранных проектах.
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
				</div>
			</div>
			<img src={img1} alt='Nature' />
		</div>
	)
}

export default VolunteeringProgramReverse
