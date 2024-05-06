import React, { FC } from 'react';
import s from './AboutCenterContent.module.scss'

const AboutCenterContent: FC = () => {
    return (
        <div className={s.missionContent}>
            <h3 className={s.mTitle}>Миссия Youth of Osh"</h3>
            <p className={s.mParafraf}>«Мы расширяем возможности молодежи получать знания и навыки для улучшения качества жизни».</p>
        </div>
    );
};

export default AboutCenterContent;