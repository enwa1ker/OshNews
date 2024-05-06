import React, { FC } from 'react';
import s from './Hub.module.scss'
import HubBg from './HubComponents/HubBg/HubBg';
import HubCenterCard from './HubComponents/HubCenterCard/HubCenterCard';
import HubImgContent from './HubComponents/HubImgContent/HubImgContent';

const Hub: FC = () => {
    return (
        <div className={s.Hub}>
            <HubBg />
            <HubCenterCard />
            <HubImgContent />
        </div>
    );
};

export default Hub;
