import React, { FC } from 'react';
import './ProjectCard.scss'
import projectImg from '../../../../assets/Home_img/projectImg.png'
import Slider from 'react-slick';

const ProjectCard: FC = () => {


    const settings = {
        infinite: true,
        slidesToShow: window.screen.width <= 768 ? 1 : 2,
        slidesToScroll: 1,
        autoplay: window.screen.width <= 768 ? true : false,
        autoplaySpeed: 4000,
        pauseHover: true,
        arrows: window.screen.width <= 768 ? true : false
    };
    return (
        <div className='ProjectCard'>
            <div className='container'>
                <Slider {...settings}>
                    <div>
                        <div className='leftCard'>
                            <div>
                                <img className='projectImg' src={projectImg} alt="part" />
                            </div>
                            <div className='leftItem'>
                                <h3 className='titleTop'>A1 high-quality solution for those who want a beautiful startup website quickly.</h3>
                                <h4 className='titleCenter'>A high-quality solution for those who want a beautiful startup website quickly.</h4>
                                <h5 className='titleBottom'>Подробнее...</h5>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='rightCard'>
                            <img className='projectImg' src={projectImg} alt="part" />
                            <div className='rightItem'>
                                <h3 className='titleTop'>A2 high-quality solution for those who want a beautiful startup website quickly.</h3>
                                <h4 className='titleCenter'>A high-quality solution for those who want a beautiful startup website quickly.</h4>
                                <h5 className='titleBottom'>Подробнее...</h5>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default ProjectCard;