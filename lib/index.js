import { request, gql } from 'graphql-request'
import { data } from 'autoprefixer';

const userName='cyberraff'
const url =process.env.DEV_PUBLIC_DEVTO_ENDPOINT



// const url = 'https://dev.to/api/articles/me'


export  const getPosts = async () =>{
	await fetch('https://dev.to/api/articles?username=cyberraff')
			.then(response => response.json())
			.then(data => console.log(data));
return data
	}

// }
// `fetch('https://dev.to/api/articles?username=iamluisj')
//         .then(response => response.json())
//         .then(data => console.log(data));`

