import React, { FC, useState } from 'react'
import s from './JoinUs.module.scss'
import img1 from '../../../assets/Volunteering_images/join_us.png'
import FormVolunteering from '../FormVolunteering/FormVolunteering'

const JoinUs: FC = () => {
	const [enter, setEnter] = useState<boolean>(false)
	return (
		<div className={s.wrapper}>
			<img src={img1} alt='Baground_Image' />
			<div className={s.bg_fone}></div>
			<div className={`container ${s.content}`}>
				<h2>Присоединяйтесь к нам !</h2>
				<p>
					Если вы молоды, активны и полны желания принести пользу обществу,
					"Youth of Osh" открыто для вас. Вместе мы можем достичь большего –
					присоединяйтесь к нашей волонтерской семье и вносите свой вклад в
					развитие нашего сообщества.
				</p>
				<button onClick={() => setEnter(!enter)}>Стать волонтером</button>
			</div>
			{/* <FormVolunteering enter={enter} setEnter={setEnter} /> */}
			{enter && <FormVolunteering enter={enter} setEnter={setEnter} />}
		</div>
	)
}

export default JoinUs
