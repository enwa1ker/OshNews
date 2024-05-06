import React, { FC, useState } from 'react'
import s from './Services.module.scss'
import MainText from './MainText/MainText'
import YouthOfOsh from './YouthOfOsh/YouthOfOsh'
import YouthOfOshReverse from './YouthOfOshReverse/YouthOfOshReverse'
import MoreDetail from './MoreDetail/MoreDetail'
import MoreDetailOne from './MoreDetailOne/MoreDetailOne'
import MoreDetailThree from './MoreDetailThree/MoreDetailThree'
import YouthOfOshOne from './YouthOfOshOne/YouthOfOshOne'
import YouthOfOshReverseOne from './YouthOfOshReverseOne/YouthOfOshReverseOne'
import MoreDetailTwo from './MoreDetailTwo/MoreDetailTwo'
import { CSSTransition } from 'react-transition-group'
import 'animate.css'
const Services: FC = () => {
	const [show, setShow] = useState<boolean>(false)
	const [showOne, setShowOne] = useState<boolean>(false)
	const [showTwo, setShowTwo] = useState<boolean>(false)
	const [showThree, setShowThree] = useState<boolean>(false)

	return (
		<div className={s.wrapper}>
			<MainText />
			<YouthOfOsh show={show} setShow={setShow} />
			<CSSTransition
				in={show}
				timeout={300}
				className='animate__animated animate__fadeInUp'
				unmountOnExit
			>
				<div>{show && <MoreDetail />}</div>
			</CSSTransition>
			<YouthOfOshReverse showOne={showOne} setShowOne={setShowOne} />
			<CSSTransition
				in={showOne}
				timeout={300}
				className='animate__animated animate__fadeInUp'
				unmountOnExit
			>
				<div>{showOne && <MoreDetailOne />}</div>
			</CSSTransition>
			<YouthOfOshOne showTwo={showTwo} setShowTwo={setShowTwo} />
			<CSSTransition
				in={showTwo}
				timeout={300}
				className='animate__animated animate__fadeInUp'
				unmountOnExit
			>
				<div>{showTwo && <MoreDetailTwo />}</div>
			</CSSTransition>
			<YouthOfOshReverseOne showThree={showThree} setShowThree={setShowThree} />
			<CSSTransition
				in={showThree}
				timeout={300}
				className='animate__animated animate__fadeInUp'
				unmountOnExit
			>
				<div>{showThree && <MoreDetailThree />}</div>
			</CSSTransition>
		</div>
	)
}

export default Services
