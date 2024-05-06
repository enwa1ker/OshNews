import React, { FC, useState } from 'react';
import './SlideCard.scss';
import { Pagination, ThemeProvider, createTheme } from '@mui/material';
import SlideBg from '../../../../assets/Home_img/slideBg.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from '@emotion/styled';

const SlideCard: FC = () => {
    const [activeSlide, setActiveSlide] = useState<number>(0);

    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseHover: true,
        afterChange: (currentSlide: number) => {
            setActiveSlide(currentSlide);
        },
        beforeChange: (oldIndex: number, newIndex: number) => {
            setActiveSlide(newIndex);
        }
    };

    const theme = createTheme({
        palette: {
            primary: {
                main: '#fdd835', // это желтый цвет из Material Design
            },
        },
        typography: {
            fontSize: 35, // Установка размера шрифта "large"
        },

        components: {
            MuiPagination: {
                styleOverrides: {
                    root: {
                        color: 'white', // Устанавливаем цвет текста
                    },
                },
            },
        },
    });

    const CustomPagination = styled(Pagination)(({ theme }) => ({
        "& .MuiPaginationItem-root": {
            color: 'white', // Устанавливаем желтый цвет по умолчанию для всех элементов
        },
        "& .Mui-selected": {
            color: 'white', // Устанавливаем цвет по умолчанию для текущего элемента
        },
    }));

    const handlePaginationChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setActiveSlide(value - 1);
    };

    return (
        <div className='sliderContainer'>
            <Slider {...settings}>
                <div>
                    <div className='SlideCardContainer'>
                        <div className='SlideCardBox container'>
                            <div className='SlideCardContent'>
                                <div className='PaginationSl'>
                                    <ThemeProvider theme={theme}>
                                        <CustomPagination
                                            count={4}
                                            page={activeSlide + 1}
                                            onChange={handlePaginationChange}
                                            color="primary"
                                            hidePrevButton
                                            hideNextButton
                                            size='large'
                                        />
                                    </ThemeProvider>
                                </div>
                                <h2 className='scTitle'>Start Creating Right Now</h2>
                                <h4 className='scParagraf'>Дипломатия | 11.11.2011</h4>
                            </div>
                        </div>
                        <div className='sliderBGBox'>
                            <img className='sliderBG' src={SlideBg} alt="bg" />
                        </div>
                    </div>
                </div>

                <div>
                    <div className='SlideCardContainer'>
                        <div className='SlideCardBox container'>
                            <div className='SlideCardContent'>
                                <div className='PaginationSl'>
                                    <ThemeProvider theme={theme}>
                                        <CustomPagination
                                            count={4}
                                            page={activeSlide + 1}
                                            onChange={handlePaginationChange}
                                            color="primary"
                                            hidePrevButton
                                            hideNextButton
                                            size='large'
                                        />
                                    </ThemeProvider>
                                </div>
                                <h2 className='scTitle'>Start Creating Right Now</h2>
                                <h4 className='scParagraf'>Дипломатия | 12.12.2012</h4>
                            </div>
                        </div>
                        <div className='sliderBGBox'>
                            <img className='sliderBG' src={SlideBg} alt="bg" />
                        </div>
                    </div>
                </div>

                <div>
                    <div className='SlideCardContainer'>
                        <div className='SlideCardBox container'>
                            <div className='SlideCardContent'>
                                <div className='PaginationSl'>
                                    <ThemeProvider theme={theme}>
                                        <CustomPagination
                                            count={4}
                                            page={activeSlide + 1}
                                            onChange={handlePaginationChange}
                                            color="primary"
                                            hidePrevButton
                                            hideNextButton
                                            size='large'
                                        />
                                    </ThemeProvider>
                                </div>
                                <h2 className='scTitle'>Start Creating Right Now</h2>
                                <h4 className='scParagraf'>Дипломатия | 12.13.2013</h4>
                            </div>
                        </div>
                        <div className='sliderBGBox'>
                            <img className='sliderBG' src={SlideBg} alt="bg" />
                        </div>
                    </div>
                </div>

                <div>
                    <div className='SlideCardContainer'>
                        <div className='SlideCardBox container'>
                            <div className='SlideCardContent'>
                                <div className='PaginationSl'>
                                    <ThemeProvider theme={theme}>
                                        <CustomPagination
                                            count={4}
                                            page={activeSlide + 1}
                                            onChange={handlePaginationChange}
                                            color="primary"
                                            hidePrevButton
                                            hideNextButton
                                            size='large'
                                        />
                                    </ThemeProvider>
                                </div>
                                <h2 className='scTitle'>Start Creating Right Now</h2>
                                <h4 className='scParagraf'>Дипломатия | 14.14.2014</h4>
                            </div>
                        </div>
                        <div className='sliderBGBox'>
                            <img className='sliderBG' src={SlideBg} alt="bg" />
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default SlideCard;
