import React, { useState } from 'react';

import { projects } from '../../data';
import Link from 'next/link';
function Portfolio () {
	
	return (
		< >
			<div className='px-5 py-5 '>
			<div>
				<h2 className='font-bold text-4xl font-extralight py-5'>Portfolio</h2>
				<p>here you can access and preview some of the projects i have worked on in the past and </p>
			</div>
			
			{projects.map((project)=>{
				return(
					<div key={project.id} className='py-7 border-b-2 border-gray-700 hover:bg-gray-900'>
						<div className='flex'>
							<p className='font-extralight px-2 py-3'>0{project.id}</p>
							<p className='font-extralight text-3xl py-2'>{project.name}</p>
						</div>
						<div className='float-right font-extralight text-sm flex space-x-0.5 px-2'>
							<a href={project.repo} target='_blank' rel="noreferrer">
								<button className='hover:bg-black rounded-full px-3 py-1'>Github Repo</button>
							</a>
							<a href={project.url} target='_blank' rel="noreferrer">
								<button className='hover:bg-black rounded-full px-3 py-1'>View Project</button>
							</a>
						</div>
					</div>
				)
			})}
			</div>
		</ >
	);
}

export default Portfolio;