import React, { FC } from 'react';
import s from './OurActivitiesTopCard.module.scss'
import ourLaptop from '../../../../assets/OurActv_img/ourALaptop.png'
import ourTablet from '../../../../assets/OurActv_img/tabletour.png'
import ourMobile from '../../../../assets/OurActv_img/ourAMobile.png'


const OurActivitiesTopCard: FC = () => {
    return (
        <div className={s.OurActivitiesBox}>
            <div className={s.OurActivitiesContent}>
                <div className={s.leftItem}>
                    <img className={s.ourLaptop} src={ourLaptop} alt="our" />
                </div>
                <div className={s.rightItem}>
                    <h2 className={s.title}>2024</h2>
                    <h4 className={s.titleEm}>"Мы - Youth of Osh: Создаем будущее вместе!"</h4>
                    <p className={s.paragraf}>Мы верим в силу молодежи и стремимся создать мир, где каждый молодой человек может реализовать свой потенциал и внести свой вклад в общественное благополучие. "Youth of Osh" - это пространство для развития лидерских качеств, обмена идеями и вдохновения на пути к изменениям. Мы не просто организация, мы - движение, направленное на создание мирного, справедливого и устойчивого будущего для всех.</p>
                </div>
            </div>

            <div className={s.OurActivitiesContent}>
                <div className={s.rightItem}>
                    <h2 className={s.title}>2023</h2>
                    <h4 className={s.titleEm}>"Мы - Youth of Osh: Создаем будущее вместе!"</h4>
                    <p className={s.paragraf}>Мы верим в силу молодежи и стремимся создать мир, где каждый молодой человек может реализовать свой потенциал и внести свой вклад в общественное благополучие. "Youth of Osh" - это пространство для развития лидерских качеств, обмена идеями и вдохновения на пути к изменениям. Мы не просто организация, мы - движение, направленное на создание мирного, справедливого и устойчивого будущего для всех.</p>
                </div>
                <div className={s.leftItem}>
                    <img className={s.ourLaptop} src={ourLaptop} alt="our" />
                </div>
            </div>

            <div className={s.OurActivitiesContent}>
                <div className={s.leftItem}>
                    <img className={s.ourLaptop} src={ourLaptop} alt="our" />
                </div>
                <div className={s.rightItem}>
                    <h2 className={s.title}>2022</h2>
                    <h4 className={s.titleEm}>"Мы - Youth of Osh: Создаем будущее вместе!"</h4>
                    <p className={s.paragraf}>Мы верим в силу молодежи и стремимся создать мир, где каждый молодой человек может реализовать свой потенциал и внести свой вклад в общественное благополучие. "Youth of Osh" - это пространство для развития лидерских качеств, обмена идеями и вдохновения на пути к изменениям. Мы не просто организация, мы - движение, направленное на создание мирного, справедливого и устойчивого будущего для всех.</p>
                </div>
            </div>

            <div className={s.OurActivitiesContent}>
                <div className={s.rightItem}>
                    <h2 className={s.title}>2021</h2>
                    <h4 className={s.titleEm}>"Мы - Youth of Osh: Создаем будущее вместе!"</h4>
                    <p className={s.paragraf}>Мы верим в силу молодежи и стремимся создать мир, где каждый молодой человек может реализовать свой потенциал и внести свой вклад в общественное благополучие. "Youth of Osh" - это пространство для развития лидерских качеств, обмена идеями и вдохновения на пути к изменениям. Мы не просто организация, мы - движение, направленное на создание мирного, справедливого и устойчивого будущего для всех.</p>
                </div>
                <div className={s.leftItem}>
                    <img className={s.ourLaptop} src={ourLaptop} alt="our" />
                </div>
            </div>

            <div className={s.OurActivitiesContent}>
                <div className={s.leftItem}>
                    <img className={s.ourLaptop} src={ourLaptop} alt="our" />
                </div>
                <div className={s.rightItem}>
                    <h2 className={s.title}>2020</h2>
                    <h4 className={s.titleEm}>"Мы - Youth of Osh: Создаем будущее вместе!"</h4>
                    <p className={s.paragraf}>Мы верим в силу молодежи и стремимся создать мир, где каждый молодой человек может реализовать свой потенциал и внести свой вклад в общественное благополучие. "Youth of Osh" - это пространство для развития лидерских качеств, обмена идеями и вдохновения на пути к изменениям. Мы не просто организация, мы - движение, направленное на создание мирного, справедливого и устойчивого будущего для всех.</p>
                </div>
            </div>
        </div>
    );
};

export default OurActivitiesTopCard;