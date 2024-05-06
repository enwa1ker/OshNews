import React, { FC } from 'react';
import s from './OurActivities.module.scss'
import OurActivitiesBottomCard from './OurActivitiesComponents/OurActivitiesBottomCard/OurActivitiesBottomCard';
import OurActivitiesTopCard from './OurActivitiesComponents/OurActivitiesTopCard/OurActivitiesTopCard';

const OurActivities: FC = () => {
    return (
        <div className={`container ${s.OurActivitiesBox}`}>
            <OurActivitiesTopCard />
            <OurActivitiesBottomCard />
        </div>
    );
};

export default OurActivities;