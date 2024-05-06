import React, { FC } from 'react'
import s from './HeaderNav.module.scss'
import main_logo from '../../../assets/Header_images/main_logo.png'
import { IoIosArrowDown } from 'react-icons/io'
import { NavLink } from 'react-router-dom'

const HeaderNav: FC = () => {
	return (
		<div className={`container ${s.header_nav}`}>
			<nav className={s.navbar}>
				<ul>
					<li className={s.about_us_li}>
						<NavLink
							to={'/about-us'}
							className={({ isActive }) =>
								isActive ? 'nav_link active_nav' : 'nav_link'
							}
						>
							О нас{' '}
						</NavLink>
						<span></span> <IoIosArrowDown className={s.icon_arrow} />
						<ul>
							<li className={s.line}>
								<NavLink
									to={'/team'}
									className={({ isActive }) =>
										isActive ? 'nav_link active_nav' : 'nav_link'
									}
								>
									Команда
								</NavLink>
							</li>
							<li>
								<NavLink
									to={'/news'}
									className={({ isActive }) =>
										isActive ? 'nav_link active_nav' : 'nav_link'
									}
								>
									Новости
								</NavLink>
							</li>
						</ul>
					</li>
					<li className={s.young_li}>

						Для молодежи
						<span></span> <IoIosArrowDown className={s.icon_arrow} />
						<ul>
							<li className={s.line}>
								<NavLink
									to={'/volunteering'}
									className={({ isActive }) =>
										isActive ? 'nav_link active_nav' : 'nav_link'
									}
								>
									Волонтерство
								</NavLink>
							</li>
							<li>
								<NavLink
									to={'/event'}
									className={({ isActive }) =>
										isActive ? 'nav_link active_nav' : 'nav_link'
									}
								>
									Мероприятие
								</NavLink>
							</li>
						</ul>
					</li>
					<li>
						<NavLink
							to={'/projects'}
							className={({ isActive }) =>
								isActive ? 'nav_link active_nav' : 'nav_link'
							}
						>
							Проекты
						</NavLink>
					</li>
				</ul>
			</nav>
			<NavLink to={'/'}>
				<img className={s.logo} src={main_logo} alt='Main Logo' />
			</NavLink>
			<nav className={s.navbar}>
				<ul>
					<li>
						{' '}
						<NavLink
							to={'/our-activities'}
							className={({ isActive }) =>
								isActive ? 'nav_link active_nav' : 'nav_link'
							}
						>
							Наша деятельность
						</NavLink>
					</li>
					<li>
						<NavLink
							to={'/services'}
							className={({ isActive }) =>
								isActive ? 'nav_link active_nav' : 'nav_link'
							}
						>
							Услуги
						</NavLink>
					</li>
					<li>
						<NavLink
							to={'/sponsorship'}
							className={({ isActive }) =>
								isActive ? 'nav_link active_nav' : 'nav_link'
							}
						>
							Спонсорство
						</NavLink>
					</li>
				</ul>
			</nav>
		</div>
	)
}

export default HeaderNav