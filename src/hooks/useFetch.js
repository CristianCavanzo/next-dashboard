import axios from 'axios';
import { useEffect, useState } from 'react';

const useFetch = (endpoint, type) => {
	const [data, setData] = useState([]);
	const fetchData = async () => {
		const response = await axios({
			method: type,
			url: endpoint,
		});
		setData(response.data);
	};

	useEffect(() => {
		try {
			fetchData();
		} catch (error) {
			console.log(error);
		}
	}, [endpoint, type]);

	return data;
};

export default useFetch;
