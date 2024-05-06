import React, { FC } from 'react'
import s from './Volunteering.module.scss'
import MainText from './MainText/MainText'
import VolunteeringProgram from './VolunteeringProgram/VolunteeringProgram'
import VolunteeringProgramReverse from './VolunteeringProgramReverse/VolunteeringProgramReverse'
import JoinUs from './JoinUs/JoinUs'
import ImagesVolunteering from './ImagesVolunteering/ImagesVolunteering'
import Reviews from './Reviews/Reviews'
import FormVolunteering from './FormVolunteering/FormVolunteering'

const Volunteering: FC = () => {
	return (
		<div className={s.wrapper}>
			<MainText />
			<VolunteeringProgram />
			<VolunteeringProgramReverse />
			<JoinUs />
			<ImagesVolunteering />
			<Reviews />
		</div>
	)
}

export default Volunteering
