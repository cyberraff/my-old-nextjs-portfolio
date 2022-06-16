import React, { useState } from 'react';
import Header from  './Header'
import About from './About';
import Portfolio from './Portfolio';


function IndexPage (  ) {
	
	return (
		<div className='lg:w-[1024px] sm:mx-auto   bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-200'>
		<Header className='px-0'/>
		<About className='px-0'/>
		<Portfolio className='px-0'/>
		</div>	);
}

export default IndexPage;

// export async function getStaticProps() {
// 	const data = await data();
// 	return {
// 		props: {
// 			data,
// 		},
// 	};
// }


export const getStaticProps = async () => {
	const posts = ( await getPosts () ) || []

	return {
		props : {
			posts,
		},
	}
}
