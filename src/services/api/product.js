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

const deleteProduct = async (id) => {
	const { data: response } = await axios({
		method: 'DELETE',
		url: endPoints.products.deleteProduct(id),
	});
	return response;
};

const updateProduct = async (id, data) => {
	const { data: response } = await axios({
		method: 'PUT',
		url: endPoints.products.updateProducts(id),
		data,
	});
	return response;
};

export { addProduct, deleteProduct, updateProduct };
