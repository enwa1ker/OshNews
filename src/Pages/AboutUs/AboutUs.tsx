import React, { FC } from 'react';
import s from './AboutUs.module.scss'
import TopCard from './AboutComponents/TopCard/TopCard';
import AboutCenterContent from './AboutComponents/AboutCenterContent/AboutCenterContent';
import ABottomCard from './AboutComponents/ABottomCard/ABottomCard';
import ANumberContent from './AboutComponents/ANumberContent/ANumberContent';
import ABg from './AboutComponents/ABg/ABg';
import AboutVisionContent from './AboutComponents/AboutVisionContent/AboutVisionContent';


const AboutUs: FC = () => {
    return (
        <div className={s.AboutBox}>
            <TopCard />
            <div className='container'>
                <AboutCenterContent />
                <AboutVisionContent />
            </div>
            <ABottomCard />
            <ANumberContent />
            <ABg />
        </div>
    );
};

export default AboutUs;