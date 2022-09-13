import React, { createContext, useContext, useState } from 'react';
import Cookie from 'js-cookie';
import axios from 'axios';
import { endPoints } from '@services/api';

const AuthContext = createContext();

const useProvideAuth = () => {
	const [user, setUser] = useState(null);

	const sigIn = async (email, password) => {
		try {
			const { data: access_token } = await axios({
				method: 'POST',
				url: endPoints.auth.login,
				data: {
					email,
					password,
				},
			});
			console.log(access_token);
			if (access_token) {
				const token = access_token.access_token;
				Cookie.set('token', token, { expires: 5 });

				let { data: user } = await axios({
					method: 'GET',
					url: endPoints.auth.profile,
					headers: {
						Authorization: `Bearer ${token}`,
					},
				});
				setUser(user);
			}
		} catch (error) {
			console.log(error);
		}
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
