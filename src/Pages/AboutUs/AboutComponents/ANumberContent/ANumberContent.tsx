import React, { FC } from 'react';
import s from './ANumberContent.module.scss'

const ANumberContent: FC = () => {
    return (

        <div className={s.numberBox}>
            <h2 className={s.nTitle}>Мы в цыфрах</h2>
            <div className={`container ${s.numberWrapper}`}>
                <div className={s.tNumberContent}>
                    <div className={s.numberItemLeft}>
                        <div className={s.numberItem}>
                            <h3 className={s.nItemTop}>400</h3>
                            <h4 className={s.nItemBottom}>Социальных проектов молодежи</h4>
                        </div>
                        <div className={s.numberItem}>
                            <h3 className={s.nItemTop}>56000</h3>
                            <h4 className={s.nItemBottom}>Молодых людей</h4>
                        </div>
                    </div>
                    <div className={s.numberItemRight}>
                        <div className={s.numberItem}>
                            <h3 className={s.nItemTop}>200</h3>
                            <h4 className={s.nItemBottom}>Бизнес-проектов молодежи</h4>
                        </div>
                        <div className={s.numberItem}>
                            <h3 className={s.nItemTop}>80</h3>
                            <h4 className={s.nItemBottom}>Проектов</h4>
                        </div>
                    </div>
                </div>

                <div className={s.line}></div>

                <div className={s.bNumberContent}>
                    <div className={s.numberItem}>
                        <h3 className={s.nItemTop}>2</h3>
                        <h4 className={s.nItemBottom}>Молодежных ХАБа (Ош и Баткен)</h4>
                    </div>
                    <div className={s.numberItem}>
                        <h3 className={s.nItemTop}>700</h3>
                        <h4 className={s.nItemBottom}>Новых рабочих мест</h4>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default ANumberContent;