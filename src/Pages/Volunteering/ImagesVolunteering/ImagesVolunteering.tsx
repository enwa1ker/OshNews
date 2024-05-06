import React, { FC } from 'react'
import s from './ImagesVolunteering.module.scss'
import detail_img1 from '../../../assets/Services_images/detail_img1.png'
import detail_img2 from '../../../assets/Services_images/detail_img2.png'
import detail_img3 from '../../../assets/Services_images/detail_img3.png'

const ImagesVolunteering: FC = () => {
	return (
		<div className={`container ${s.wrapper}`}>
			<img className={s.detail_imgOne} src={detail_img1} alt='Detail_Image' />
			<div className={s.block_images}>
				<img className={s.detail_imgTwo} src={detail_img2} alt='Detail_Image' />
				<img
					className={s.detail_imgThree}
					src={detail_img3}
					alt='Detail_Image'
				/>
			</div>
		</div>
	)
}

export default ImagesVolunteering
