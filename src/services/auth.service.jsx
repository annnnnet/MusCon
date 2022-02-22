import axios from 'axios';

// const API_URL = 'https://muscon.herokuapp.com/';
const API_URL = 'http://127.0.0.1:5000/';

const register = (username, email, password, city, photo) => {
	return axios.post(API_URL + 'signup', {
		username,
		email,
		password,
		city,
		photo,
	});
};

const login = (username, password) => {
	return axios
		.get(API_URL + 'login', {
<<<<<<< HEAD
			username,
			password,
=======
			auth: {
				username,
				password,
			},
>>>>>>> 22d82b0805355db52a0ec020207c95d1e15b3083
		})
		.then((response) => {
			if (response.data.token) {
				localStorage.setItem('user', JSON.stringify(response.data));
			}
			return response.data;
		});
};

const logout = () => {
	localStorage.removeItem('user');
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	register,
	login,
	logout,
};
