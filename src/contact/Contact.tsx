import React from 'react';
import style from './Contact.module.css';
import styleContainer from "../common/styles/Container.module.css";
import Email from "./Email";


function Contact() {
	return (
		<div className={style.contactBlock}>
			<div className={`${styleContainer.container} ${style.contactContainer}`}>
				<h2>Связь со мной</h2>
				<Email/>

			</div>
		</div>
	);
}

export default Contact;