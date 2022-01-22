import React from 'react';
import style from './Footer.module.css'
import styleContainer from "../common/styles/Container.module.css";




function Footer() {
	return (
		<div className={style.footerBlock}>
			<div className={`${styleContainer.container} ${style.footerContainer}`}>
				<div className={style.icon}> Здесь фото </div>
				<h2 className={style.title}>Тюлендеев Ринат</h2>
				<span className={style.description}>© 2021. Все права защищены description</span>
			</div>

		</div>
	);
}

export default Footer;
