import React, { FC, useState } from 'react';
import s from './homeVideo.module.scss'
import arrowLine from '../../../assets/Home_img/arrowLine.png'

const HomeVideo: FC = () => {
    const [active, setActive] = useState(false)
    return (
        <div className={s.hv}>
            <div onClick={() => setActive(!active)} className={`container ${s.homeVideo}`}>
                <div onClick={() => setActive(true)} className={active ? s.homeActive : s.iframeContent}>
                    <iframe onChange={() => setActive(true)} src="https://www.youtube.com/embed/YIwcA2ZlGMs?si=LAAWIMdNaSKhRK19&amp;controls=0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                </div>
                <div className={s.homeItem}>
                    <h2 className={s.title}>Меняй свое будущее уже сегодня!</h2>
                    <h4 className={s.paragraf}>"Вместе с Youth of Osh - к яркому будущему!"</h4>
                    <img className={s.arrowLine} src={arrowLine} alt="arrow" />
                </div>
            </div>
        </div>
    );
};

export default HomeVideo;