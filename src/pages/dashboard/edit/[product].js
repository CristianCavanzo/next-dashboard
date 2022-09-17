import { Alert } from '@common/Alert';
import FormProduct from '@components/formProduct';
import { useAlert } from '@hooks/useAlert';
import { endPoints } from '@services/api';
import axios from 'axios';
import { useRouter } from 'next/router';
import { Fragment, useEffect, useState } from 'react';
const Product = () => {
	const { alert, setAlert, toggleAlert } = useAlert();

	const [product, setProduct] = useState({});
	const {
		query: { product: id },
	} = useRouter();
	useEffect(() => {
		(async () => {
			if (id !== undefined) {
				try {
					const { data: response } = await axios({
						url: endPoints.products.getProduct(id),
					});
					setProduct(response);
				} catch (error) {
					console.log(error);
				}
			}
		})();
	}, [id]);

	return (
		<Fragment>
			<Alert alert={alert} handleClose={toggleAlert} />
			<FormProduct setAlert={setAlert} product={product} />
		</Fragment>
	);
};

export default Product;
