import axios from 'axios';
import { endPoints } from '.';

const addProduct = async (body) => {
	const { data: response } = await axios({
		method: 'POST',
		url: endPoints.products.addProducts,
		data: body,
	});
	return response;
};

export { addProduct };
