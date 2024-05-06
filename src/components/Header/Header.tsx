import React, { FC } from 'react'
import s from './Header.module.scss'
import HeaderInfo from './HeaderInfo/HeaderInfo'
import HeaderNav from './HeaderNav/HeaderNav'

const Header: FC = () => {
	return (
		<header className={s.wrapper}>
			<HeaderInfo />
			<HeaderNav />
		</header>
	)
}

export default Header
