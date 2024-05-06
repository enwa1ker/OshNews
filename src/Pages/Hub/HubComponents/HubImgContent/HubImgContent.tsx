import React, { FC } from 'react';
import s from './HubImgContent.module.scss'
import img1 from '../../../../assets/Hab_img/img1.png'
import img2 from '../../../../assets/Hab_img/img2.png'
import img3 from '../../../../assets/Hab_img/img3.png'
import img4 from '../../../../assets/Hab_img/img4.png'
import img5 from '../../../../assets/Hab_img/img5.png'
import img6 from '../../../../assets/Hab_img/img6.png'


const HubImgContent: FC = () => {
    return (
        <div className={s.HubImgContent}>
            <div className={`container ${s.HubImgBox}`}>
                <div className={s.ImgTop}>
                    <div className={s.ImgTopLeft}>
                        <div className={s.ImgTopLeftTop}>
                            <img className={s.img1} src={img1} alt="hub" />
                        </div>
                        <div className={s.ImgTopLeftCenter}>
                            <div className={s.img2C}>
                                <img className={s.img2} src={img2} alt="hub" />
                            </div>
                            <div className={s.img2C}>
                                <img className={s.img3} src={img3} alt="hub" />
                            </div>
                        </div>
                    </div>
                    <div className={s.ImgTopRight}>
                        <div className={s.img4Con}>
                            <img className={s.img4} src={img4} alt="hub" />
                        </div>
                        <div className={s.rightBtnCon}>
                            <img className={s.img6R} src={img6} alt="hub" />
                        </div>
                    </div>
                </div>
                <div className={s.ImgBottom}>
                    <div className={s.img5Con}>
                        <img className={s.img5} src={img5} alt="hub" />
                    </div>
                    <div className={s.img6Con}>
                        <img className={s.img6} src={img6} alt="hub" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HubImgContent;