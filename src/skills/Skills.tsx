import React from 'react';
import style from './Skills.module.css';
import styleContainer from "../common/styles/Container.module.css";
import Skill from "./Skill";


function Skills() {
	return (
		<div className={style.skillsBlock}>
			<div className={`${styleContainer.container} ${style.skillsContainer}`}>
				<h2 className={style.title}>Skills</h2>
				<div className={style.skills}>
					<Skill title={'JS'}
						   description={'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam '}/>
					<Skill title={'React'}
						   description={'rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae'}/>
					<Skill title={'Redux'} description={' ab illo inventore veritatis et quasi architecto beatae'}/>
				</div>
			</div>
		</div>
	);
}

export default Skills;