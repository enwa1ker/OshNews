import React, { FC } from 'react';
import './NewsCard.scss'
import Slider from 'react-slick';
import card1 from '../../../../assets/About_img/aboutTablet.png'
import card2 from '../../../../assets/Home_img/card2.png'
import card3 from '../../../../assets/Home_img/card3.png'
import card4 from '../../../../assets/Home_img/card4.png'

const NewsCard: FC = () => {


    const settings = {
        infinite: true,
        slidesToShow: window.screen.width <= 500 ? 1 : window.screen.width <= 768 ? 2 : window.screen.width <= 1290 ? 3 : 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 4000,
        pauseHover: true,
        arrows: window.screen.width <= 768 ? false : true
    };
    return (
        <div className='slider-container'>
            <Slider {...settings}>
                <div className='newsCardContent'>
                    <div className='newsIMg'>
                        <img src={card1} alt="car" />
                    </div>
                    <h2 className='newsCardTitle'>Start Creating Right Now</h2>
                    <h3 className='newsCardParagraf'>Дипломатия | 12.12.2012</h3>
                </div>

                <div className='newsCardContent'>
                    <div className='newsIMg'>
                        <img src={card2} alt="car" />
                    </div>
                    <h2 className='newsCardTitle'>Start Creating Right Now</h2>
                    <h3 className='newsCardParagraf'>Дипломатия | 12.12.2012</h3>
                </div>

                <div className='newsCardContent'>
                    <div className='newsIMg'>
                        <img src={card3} alt="car" />
                    </div>
                    <h2 className='newsCardTitle'>Start Creating Right Now</h2>
                    <h3 className='newsCardParagraf'>Дипломатия | 12.12.2012</h3>
                </div>

                <div className='newsCardContent'>
                    <div className='newsIMg'>
                        <img src={card4} alt="car" />
                    </div>
                    <h2 className='newsCardTitle'>Start Creating Right Now</h2>
                    <h3 className='newsCardParagraf'>Дипломатия | 12.12.2012</h3>
                </div>
            </Slider>
        </div>
    );
};

export default NewsCard;