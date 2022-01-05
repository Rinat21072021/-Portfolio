import React from 'react';
import style from './Email.module.css';
// под мобилку, работа с myJobs верстка

function Email() {
	return (

		<div className={style.email}>
			<input className={style.textDescription} placeholder={'Your name'}/>
			<input className={style.textDescription} placeholder={'E-mail'}/>
			<textarea className={style.textDescription} rows={10} placeholder={'Job offer'}> </textarea>
		</div>


	);
}

export default Email;