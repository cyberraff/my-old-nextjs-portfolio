import React from 'react';
import {FaDev, FaGithub, FaLinkedin, FaTwitterSquare} from 'react-icons/fa'
import {HiMail} from  'react-icons/hi'

const Header = ( props ) => (
	<>
	<div className=' px-5'>
	
		<h1 className='text-5xl py-6'>
			Hello, <br/> I&#39;m Raphael <br/>Ejeogo
		</h1>
		<p className='font-extralight text-xl mb-2'>A Front-End Developer, content writer,<br/> Gamer and  Blogger</p>
		<div className='flex space-x-4 text-2xl mt-5'>
			
			<button>
				<a href = 'https://www.dev.to' target='_blank'>				<FaDev/>
				</a >
			</button>
			<button>
				<FaGithub/>
			</button>
			<button>
				<FaLinkedin/>
			</button>
			<button>
				<FaTwitterSquare/>
			</button>
			
			<button>
				<HiMail/>
			</button>
		
		</div>
		<div>
			<button className='my-8 border border-amber-50 rounded-full py-2 px-10 text-2xs font-extrabold'>DOWNLOAD CV</button>
		</div>
	</div>
	</>
);

export default Header;
