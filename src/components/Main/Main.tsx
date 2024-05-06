import React, { FC } from 'react'
import s from './Main.module.scss'
import { Route, Routes } from 'react-router-dom';
import AboutUs from '../../Pages/AboutUs/AboutUs';
import Event from '../../Pages/Event/Event';
import News from '../../Pages/News/News';
import OurActivities from '../../Pages/OurActivities/OurActivities';
import Services from '../../Pages/Services/Services';
import Sponsorship from '../../Pages/Sponsorship/Sponsorship';
import Team from '../../Pages/Team/Team';
import Volunteering from '../../Pages/Volunteering/Volunteering';
import NotFound from '../../Pages/NotFound/NotFound';
import Home from '../../Pages/Home/Home';
import Projects from '../../Pages/Projects/Projects';
import Hub from '../../Pages/Hub/Hub';
const Main: FC = () => {
	return (
		<main>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about-us' element={<AboutUs />} />
				<Route path='/event' element={<Event />} />
				<Route path='/news' element={<News />} />
				<Route path='/our-activities' element={<OurActivities />} />
				<Route path='/services' element={<Services />} />
				<Route path='/sponsorship' element={<Sponsorship />} />
				<Route path='/team' element={<Team />} />
				<Route path='/volunteering' element={<Volunteering />} />
				<Route path='/projects' element={<Projects />} />
				<Route path='/hub' element={<Hub />} />
				<Route path='/*' element={<NotFound />} />
			</Routes>
		</main>
	)
}

export default Main
