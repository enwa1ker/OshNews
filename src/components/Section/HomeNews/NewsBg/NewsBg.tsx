import React, { FC } from 'react';
import s from './NewsBg.module.scss'

const HnewsBg: FC = () => {
    return (
        <div className={s.newsBG}>
            <div className={s.newsBgConten}>
                <h2 className={s.title}>Start Creating Right Now</h2>
                <h3 className={s.paragraf}>Дипломатия | 12.12.2012</h3>
            </div>
        </div>
    );
};

export default HnewsBg;