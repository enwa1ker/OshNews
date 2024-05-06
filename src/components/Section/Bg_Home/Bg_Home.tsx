import React, { FC } from 'react';
import s from './Bg_Home.module.scss'

const BgHome: FC = () => {
    return (
        <div className={s.BgHomeBox}>
            <div className='container'>
                <div className={s.BgHomeTitle}>
                    <h2 className={s.title}>Youth of Osh - с тобой к лучшему будущему</h2>
                    <p className={s.paragraf}>Мы расширяем возможности молодежи для приобретения знаний и навыков, способствуя улучшению их качества жизни.</p>
                </div>
            </div>
        </div>
    );
};

export default BgHome