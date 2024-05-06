import React, { FC } from 'react'
import s from './NotFound.module.scss'

const NotFound: FC = () => {
	return (
		<div className={`container ${s.notFound}`}>
			<h1 className={s.title}>К сожалению, запрашиваемая страница не найдена.<br />
				Возможно, она была перемещена, удалена или временно недоступна. </h1>
		</div>
	);
};

export default NotFound
