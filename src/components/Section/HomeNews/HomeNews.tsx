import React, { FC } from 'react';
import s from './HomeNews.module.scss'
import HnewsBg from './NewsBg/NewsBg';
import NewsCard from './NewsCard/NewsCard';

const HomeNews: FC = () => {
    return (
        <div className={`container ${s.homeBox}`}>
            <div className={s.homeItem}>
                <h2 className={s.title}>Актуальные новости</h2>
                <h4 className={s.moreNews}>Еще новости...</h4>
            </div>
            <HnewsBg />
            <NewsCard />
        </div>
    );
};

export default HomeNews;