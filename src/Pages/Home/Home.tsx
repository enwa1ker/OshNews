import React, { FC } from 'react'
import s from './Home.module.scss'
import HomeNews from '../../components/Section/HomeNews/HomeNews'
import OurPartners from '../../components/Section/OurPartners/OurPartners'
import OurProjects from '../../components/Section/OurProjects/OurProjects'
import HomeVideo from '../../components/Section/homeVideo/homeVideo'
import BgHome from '../../components/Section/Bg_Home/Bg_Home'

const Home: FC = () => {
	return (
		<div className={s.Home}>
			<BgHome />
			<HomeNews />
			<HomeVideo />
			<OurPartners />
			<OurProjects />
		</div>
	)
}

export default Home
