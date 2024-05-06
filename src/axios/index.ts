import axios from "axios";


const instanse = axios.create({
	baseURL: 'http://5.35.84.76:8080/',
	headers: {
		'Content-Type': 'application/json',
	},
})