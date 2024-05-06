import React, { FC } from 'react';
import s from './OurPartners.module.scss'
import mok from '../../../assets/OurPartners/Frame 182mok.png'
import osh from '../../../assets/OurPartners/4-removebg-preview 1osh.png'
import kao from '../../../assets/OurPartners/3-removebg-preview 1kao.png'
import tunduk from '../../../assets/OurPartners/5-removebg-preview 1tunduk.png'
import undp from '../../../assets/OurPartners/10 1undp.png'
import amanat from '../../../assets/OurPartners/23 1amanatCity.png'
import omu from '../../../assets/OurPartners/22-removebg-preview 1omy.png'
import star from '../../../assets/OurPartners/6 1star.png'
import jia from '../../../assets/OurPartners/24-removebg-preview 1jia.png'
import alaiku from '../../../assets/OurPartners/21-removebg-preview 1alayku.png'
import embassy from '../../../assets/OurPartners/15 1embassy.png'
import gfa from '../../../assets/OurPartners/20 25gfa.png'
import axf from '../../../assets/OurPartners/18 1axf.png'
import hk from '../../../assets/OurPartners/12-removebg-preview 1hk.png'
import sch from '../../../assets/OurPartners/19 1sch.png'
import fhi from '../../../assets/OurPartners/13 1fhi.png'
import germen from '../../../assets/OurPartners/13 (1) 1germen.png'
import kmc from '../../../assets/OurPartners/2-removebg-preview 1kmc.png'
import west from '../../../assets/OurPartners/12 1west.png'
import usaid from '../../../assets/OurPartners/11 1usaid.png'
import vhs from '../../../assets/OurPartners/7-removebg-preview 1vhs.png'
import ook from '../../../assets/OurPartners/8 1ook.png'
import unusev from '../../../assets/OurPartners/9-removebg-preview 1unusev.png'
import irex from '../../../assets/OurPartners/14 1irex.png'






const OurPartners: FC = () => {
    return (

        <div className={s.OurPartners}>
            <div className='container'>
                <h2 className={s.title}>Наши партнеры</h2>
            </div>

            <div className={s.OurPartnersBox}>

                <div className={s.OurPartnerLogo}>
                    <img src={mok} alt="partners" />
                    <img src={osh} alt="partners" />
                    <img src={tunduk} alt="partners" />
                    <img src={undp} alt="partners" />
                    <img src={amanat} alt="partners" />
                    <img src={omu} alt="partners" />
                    <img src={star} alt="partners" />
                    <img src={jia} alt="partners" />
                    <img src={alaiku} alt="partners" />
                    <img src={embassy} alt="partners" />
                    <img src={gfa} alt="partners" />
                    <img src={axf} alt="partners" />
                    <img src={hk} alt="partners" />
                </div>

                <div className={s.OurPartnerLogo}>
                    <img src={mok} alt="partners" />
                    <img src={osh} alt="partners" />
                    <img src={tunduk} alt="partners" />
                    <img src={undp} alt="partners" />
                    <img src={amanat} alt="partners" />
                    <img src={omu} alt="partners" />
                    <img src={star} alt="partners" />
                    <img src={jia} alt="partners" />
                    <img src={alaiku} alt="partners" />
                    <img src={embassy} alt="partners" />
                    <img src={gfa} alt="partners" />
                    <img src={axf} alt="partners" />
                    <img src={hk} alt="partners" />
                </div>
            </div >

            <div className={s.OurPartnersBoxBootom}>
                <div className={s.OurPartnersBottomLogo}>
                    <img src={sch} alt="apart" />
                    <img src={fhi} alt="apart" />
                    <img src={germen} alt="apart" />
                    <img src={kmc} alt="apart" />
                    <img src={west} alt="apart" />
                    <img src={usaid} alt="apart" />
                    <img src={vhs} alt="apart" />
                    <img src={ook} alt="apart" />
                    <img src={unusev} alt="apart" />
                    <img src={irex} alt="apart" />

                </div>

                <div className={s.OurPartnersBottomLogo}>
                    <img src={sch} alt="apart" />
                    <img src={fhi} alt="apart" />
                    <img src={germen} alt="apart" />
                    <img src={kmc} alt="apart" />
                    <img src={west} alt="apart" />
                    <img src={usaid} alt="apart" />
                    <img src={vhs} alt="apart" />
                    <img src={ook} alt="apart" />
                    <img src={unusev} alt="apart" />
                    <img src={irex} alt="apart" />

                </div>
            </div>
        </div>
    );
};

export default OurPartners;