import axios from 'axios';

//api endpoint
//promosie
export default {
	user: {
		login: credentials =>
			axios.post('/api/auth', { credentials }).then(res => res.data.user),
	},
};
