import React, { FC } from 'react';
import s from './HubCenterCard.module.scss'
import hubLaptop from '../../../../assets/Hab_img/Frame.png'
import hubTablet from '../../../../assets/Hab_img/FramehubTablet.png'
import hubMobile from '../../../../assets/Hab_img/FramehubMobile.png'

const HubCenterCard: FC = () => {
    return (
        <div className={s.HubCenterCard}>
            <div className={`container ${s.HubBox}`}>
                <div className={s.contentLeft}>
                    <h2 className={s.title}>"Мы - Youth of Osh: Создаем будущее вместе!"</h2>
                    <h4 className={s.titleEm}>"Мы - Youth of Osh: Создаем будущее вместе!"</h4>
                    <p className={s.paragraf}>Мы - "Youth of Osh" - это не просто организация, мы - сообщество молодежи, объединенной общей целью создания лучшего будущего для нас самих и для нашего общества. С момента нашего создания более 15 лет назад, мы стали источником вдохновения и местом для реализации идей и мечтаний молодых людей в Кыргызстане.</p>
                    <p className={s.paragraf}>Мы верим в силу молодежи и стремимся создать мир, где каждый молодой человек может реализовать свой потенциал и внести свой вклад в общественное благополучие. "Youth of Osh" - это пространство для развития лидерских качеств, обмена идеями и вдохновения на пути к изменениям. Мы не просто организация, мы - движение, направленное на создание мирного, справедливого и устойчивого будущего для всех.</p>
                </div>

                <div className={s.contentRight}>
                    <img className={s.hubLaptop} src={hubLaptop} alt="hub" />
                    <img className={s.hubTablet} src={hubTablet} alt="hub" />
                </div>
            </div>
        </div>
    );
};

export default HubCenterCard;