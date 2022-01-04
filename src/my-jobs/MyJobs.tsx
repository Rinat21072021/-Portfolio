import React from 'react';
import style from './MyJobs.module.css';
import styleContainer from "../common/styles/Container.module.css";
import Job from "./Job";


function MyJobs() {
	return (
		<div className={style.jobsBlock}>
			<div className={`${styleContainer.container} ${style.jobsContainer}`}>
				<h2 className={style.title}>My jobs</h2>
				<div className={style.jobs}>
					<Job title={'Название проекта'} description={'описание проекта'}/>
					<Job title={'Название проекта'} description={'описание проекта'}/>

				</div>

			</div>
		</div>
	);
}

export default MyJobs;