import React, { FC } from 'react';
import s from './TopCard.module.scss'
import aboutLaptop from '../../../../assets/About_img/aboutLaptop.png'

const TopCard: FC = () => {
    return (
        <div className={`container ${s.topCard}`}>
            <div className={s.leftItem}>
                <h2 className={s.title}>Общественное объединение “Youth of Osh” (YoO)</h2>
                <p className={s.paragraf}>Прогрессивная молодежная организация, действующая в Кыргызстане более 15 лет. С момента своего создания «Youthof Osh» является одним из ведущих акторов в следующих областях</p>
                <p className={s.paragrafLast}>• Развитие молодежного лидерства и вовлечение молодежи в демократические процессы;<br /> • Гражданское участие, формальное и неформальное образование молодежи;<br /> • Расширение экономических возможностей и поддержка достойной занятости и молодежного предпринимательства;<br /> • Экспертно-аналитическое сопровождение молодежной политики и молодежной работы на местном и национальном уровнях.</p>
            </div>
            <div className={s.rightItem}>
                <img className={s.aboutLaptop} src={aboutLaptop} alt="osh" />
            </div>
        </div>
    );
};

export default TopCard;