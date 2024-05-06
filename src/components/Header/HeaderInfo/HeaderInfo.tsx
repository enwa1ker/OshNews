import React, { FC } from 'react'
import s from './HeaderInfo.module.scss'
import address_icon from '../../../assets/Header_images/address.png'
import phone_icon from '../../../assets/Header_images/phone.png'
import logo from '../../../assets/Header_images/logo.png'
import twitter from '../../../assets/Header_images/tw.png'
import telegram from '../../../assets/Header_images/tg.png'
import instagram from '../../../assets/Header_images/insta.png'
import facebook from '../../../assets/Header_images/fc.png'
import { useTranslation } from 'react-i18next'
import { Link, NavLink } from 'react-router-dom'
// import map from '../../../assets/Header_images/map.png'

const HeaderInfo: FC = () => {
	const { i18n } = useTranslation()

	const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const selectedLanguage = event.target.value
		i18n.changeLanguage(selectedLanguage)
	}

	// const lang = i18n.language

	return (
		<div className={s.header_info}>
			<div className={`container ${s.headerBox}`}>
				<div className={s.company_info}>
					<div className={s.address}>
						<img
							className={s.img_address}
							src={address_icon}
							alt='Address Icon'
						/>
						<p>г. Ош, ул. Молдо Нияза 67</p>
					</div>
					<div className={s.address}>
						<img className={s.img_phone} src={phone_icon} alt='Phone Icon' />
						<p>0709 62 53 79</p>
					</div>
				</div>
				<div className={s.social_network}>
					<div className={s.logo}>
						<NavLink to={'/hub'}>
							<img src={logo} alt='Logo' />
						</NavLink>
					</div>
					<div className={s.social_icons}>
						<Link className={s.telegram} to={'https://twitter.com/'}>
							<img src={twitter} alt='Social Network' />
						</Link>
						<Link className={s.telegram} to={'https://t.me/'}>
							{' '}
							<img src={telegram} alt='Social Network' />
						</Link>
						<Link className={s.telegram} to={'https://www.instagram.com/'}>
							<img src={instagram} alt='Social Network' />
						</Link>
						<Link className={s.telegram} to={'https://t.me/'}>
							<img src={facebook} alt='Social Network' />
						</Link>
					</div>
					<div className={s.multiple_lang}>
						<select
							value={i18n.language}
							onChange={changeLanguage}
							className={s.languageDropdown}
						>
							<option value='ru'>RU</option>
							<option value='kg'>KG</option>
							<option value='eng'>EN</option>
						</select>
					</div>
				</div>
			</div>
		</div>
	)
}

export default HeaderInfo
