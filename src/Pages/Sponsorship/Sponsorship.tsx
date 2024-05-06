import React, { FC } from 'react';
import s from './Sponsorship.module.scss'
import spoLaptop from '../../assets/Home_img/sponsorshipLaptop.png'

const Sponsorship: FC = () => {
    return (
        <div className={s.Sponsorship}>
            <div className='container'>
                <div className={s.SponsorshipBox}>
                    <div className={s.SponsorshipLeft}>
                        <div className={s.topContent}>
                            <h3 className={s.title}>Компания "ТехноСфера" </h3>
                            <h3 className={s.title}>ИНН: 12345678901234</h3>
                            <h3 className={s.title}>Адрес: г. Новосибирск, ул. Ленина, 123</h3>
                            <h3 className={s.title}>Р/с: 98765432109876 </h3>
                            <h3 className={s.title}>Банк: ООО "Новый Банк"</h3>
                            <h3 className={s.title}>БИК: 543210 Исполнительный</h3>
                            <h3 className={s.title}>Директор: И. Петров.</h3>
                        </div>
                        <div className={s.bottomContent}>
                            <h3 className={s.title}>Компания "ДинамиксСофт"   </h3>
                            <h3 className={s.title}>ИНН: 98765432109876</h3>
                            <h3 className={s.title}>Адрес: г. Москва, ул. Профсоюзная, 55</h3>
                            <h3 className={s.title}>Р/с: 65432109876543</h3>
                            <h3 className={s.title}>Банк: АО "Банк Инноваций"</h3>
                            <h3 className={s.title}>БИК: 987654 Исполнительный</h3>
                            <h3 className={s.title}>Директор: О. Сидорова.</h3>

                        </div>
                    </div>
                    <div className={s.SponsorshipRight}>
                        <img className={s.spoLaptop} src={spoLaptop} alt="spo" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sponsorship;