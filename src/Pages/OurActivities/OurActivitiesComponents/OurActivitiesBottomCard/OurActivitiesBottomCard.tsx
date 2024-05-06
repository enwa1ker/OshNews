import React, { FC } from 'react';
import s from './OurActivitiesBottomCard.module.scss'
import ourArt from '../../../../assets/OurActv_img/ourAtr.png'

const OurActivitiesBottomCard: FC = () => {
    return (
        <div className={s.OurActivitiesBBox}>
            <h2 className={s.title}>Аналитика</h2>
            <div className={s.OurActivitiesContent}>
                <div className={s.leftItem}>
                    <img className={s.ourArt} src={ourArt} alt="our" />
                </div>
                <div className={s.rightItem}>
                    <div className={s.rightContent}>
                        <h3 className={s.one}>1</h3>
                        <div className={s.rightParagraf}>
                            <h4 className={s.titleParagraf}>Внимание</h4>
                            <p className={s.paragraf}>Мы верим в силу молодежи и стремимся создать мир, где каждый молодой человек может реализовать свой потенциал.</p>
                        </div>
                    </div>
                    <div className={s.rightContent}>
                        <h3 className={s.two}>2</h3>
                        <div className={s.rightParagraf}>
                            <h4 className={s.titleParagraf}>Умение</h4>
                            <p className={s.paragraf}>Мы верим в силу молодежи и стремимся создать мир, где каждый молодой человек может реализовать свой потенциал.</p>
                        </div>
                    </div>
                    <div className={s.rightContent}>
                        <h3 className={s.three}>3</h3>
                        <div className={s.rightParagraf}>
                            <h4 className={s.titleParagraf}>Интерес</h4>
                            <p className={s.paragraf}>Мы верим в силу молодежи и стремимся создать мир, где каждый молодой человек может реализовать свой потенциал.</p>
                        </div>
                    </div>
                    <div className={s.rightContent}>
                        <h3 className={s.for}>4</h3>
                        <div className={s.rightParagraf}>
                            <h4 className={s.titleParagraf}>Желание</h4>
                            <p className={s.paragraf}>Мы верим в силу молодежи и стремимся создать мир, где каждый молодой человек может реализовать свой потенциал.</p>
                        </div>
                    </div>
                    <div className={s.rightContent}>
                        <h3 className={s.five}>5</h3>
                        <div className={s.rightParagraf}>
                            <h4 className={s.titleParagraf}>Действие</h4>
                            <p className={s.paragraf}>Мы верим в силу молодежи и стремимся создать мир, где каждый молодой человек может реализовать свой потенциал.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default OurActivitiesBottomCard;