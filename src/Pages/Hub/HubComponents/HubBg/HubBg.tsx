import React, { FC } from 'react';
import s from './HubBg.module.scss'

const HubBg: FC = () => {
    return (
        <div className={s.BgHubBox}>
            <div className='container'>
                <div className={s.BgHubTitle}>
                    <h2 className={s.title}>Start Creating Right Now</h2>
                    <p className={s.paragraf}>A high-quality solution for those who want a beautiful startup website quickly.</p>
                </div>
            </div>
        </div>
    );
};

export default HubBg;