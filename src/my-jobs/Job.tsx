import React from 'react';
import style from './Job.module.css'

type JobType = {
	title: string
	description: string
}

function Job(props: JobType) {
	return (
		<div className={style.job}>
			<div className={style.icon}>
				<a href="">смотерть</a>
			</div>
			<h4>{props.title}</h4>
			<span className={style.description}> {props.description} </span>
		</div>
	);
}

export default Job;