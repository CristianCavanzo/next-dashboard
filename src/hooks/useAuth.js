import React, { createContext, useContext, useState } from 'react';
import Cookie from 'js-cookie';
import axios from 'axios';
import { endPoints } from '@services/api';

const AuthContext = createContext();

const useProvideAuth = () => {
	const [user, setUser] = useState(null);

	const sigIn = async (email, password) => {
		const { data: acess_token } = await axios({
			method: 'POST',
			url: endPoints.auth.login,
			data: {
				email,
				password,
			},
		});
		console.log(acess_token);
	};
	return { user, sigIn };
};

export const ProviderAuth = ({ children }) => {
	const auth = useProvideAuth();
	return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export const ConsumerAuth = () => {
	return useContext(AuthContext);
};

export { AuthContext };
