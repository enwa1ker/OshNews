import React, { FC } from 'react'
import s from './Footer.module.scss'
import { Link, NavLink } from 'react-router-dom'
import main_logo from '../../assets/Header_images/main_logo.png'
import twitter from '../../assets/Footer_images/footer_tw.png'
import telegram from '../../assets/Footer_images/footer_tg.png'
import instagram from '../../assets/Footer_images/footer_insta.png'
import facebook from '../../assets/Footer_images/footer_fc.png'
import email from '../../assets/Footer_images/email.png'
import address from '../../assets/Footer_images/address.png'
import phone from '../../assets/Footer_images/phone.png'

const Footer: FC = () => {
	return (
		<footer className={s.wrapper}>
			<div className={`container ${s.content}`}>
				<div className={s.info_block}>
					<div className={s.social_network}>
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
					<div className={s.footer_info}>
						<img className={s.img_email} src={email} alt='Email' />
						<p>osh.youth@gmail.com</p>
					</div>
					<div className={s.footer_info}>
						<img className={s.img_address} src={address} alt='Address' />
						<p>г. Ош, ул. Молдо Нияза 67</p>
					</div>
					<div className={s.footer_info}>
						<img className={s.img_phone} src={phone} alt='Phone' />
						<p>0709 62 53 79 </p>
					</div>
				</div>

				<NavLink to={'/'}>
					<img className={s.main_logo} src={main_logo} alt='Main Logo' />
				</NavLink>
			</div>
			<div className={`container ${s.privacy}`}>
				<p>2024© Все права защищены</p>
			</div>
		</footer>
	)
}

export default Footer
