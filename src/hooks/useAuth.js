import React, { createContext, useContext, useState } from 'react';
import Cookie from 'js-cookie';
import axios from 'axios';
import { endPoints } from '@services/api';

const AuthContext = createContext();

const useProvideAuth = () => {
	const [user, setUser] = useState(null);

	const sigIn = (email, password) => {
		// eslint-disable-next-line no-async-promise-executor
		return new Promise(async (res, rej) => {
			try {
				const { data: access_token } = await axios({
					method: 'POST',
					url: endPoints.auth.login,
					data: {
						email,
						password,
					},
				});
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
					return res('success');
				} else {
					return rej('error');
				}
			} catch (error) {
				console.log(error);
				return rej('error');
			}
		});
	};
	const logout = () => {
		Cookie.remove('token');
		setUser(null);
		delete axios.defaults.headers.authorization;
		window.location.href = '/login';
	};
	return { user, sigIn, logout };
};

export const ProviderAuth = ({ children }) => {
	const auth = useProvideAuth();
	return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export const ConsumerAuth = () => {
	return useContext(AuthContext);
};

export { AuthContext };
