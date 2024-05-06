import React, { FC } from 'react';
import s from './AboutVisionContent.module.scss'

const AboutVisionContent: FC = () => {
    return (
        <div className={s.visionContent}>
            <h3 className={s.vTitle}>Видение Youth of Osh"</h3>
            <p className={s.vParafraf}> «В Центральной Азии живет образованная и счастливая молодежь».</p>
        </div>
    );
};

export default AboutVisionContent;