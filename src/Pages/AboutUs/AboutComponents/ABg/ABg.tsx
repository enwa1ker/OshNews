import React, { useState } from 'react';
import s from './ABg.module.scss'
import FormVolunteering from '../../../Volunteering/FormVolunteering/FormVolunteering';

const ABg = () => {
    const [enter, setEnter] = useState<boolean>(false)
    return (
        <div className={s.bgAbout}>
            <div className={s.bgContent}>
                <div className={s.bgItem}>
                    <h2 className={s.bgTitle}>Присоединяйтесь к нам !</h2>
                    <p className={s.bgParagraf}>Ты можешь присоединится к нам став волонтером, узнать и научится многому с нами вместе!</p>
                </div>
                <div className={s.btnBox}>
                    <button onClick={() => setEnter(!enter)} className={s.btn}>Стать волонтером</button>
                </div>
            </div>
            {enter && <FormVolunteering enter={enter} setEnter={setEnter} />}
        </div>
    );
};

export default ABg;