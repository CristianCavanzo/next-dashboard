import {
	Chart as ChartJs,
	BarElement,
	Legend,
	LinearScale,
	Title,
	Tooltip,
	CategoryScale,
} from 'chart.js';
import React, { Fragment } from 'react';
import { Bar } from 'react-chartjs-2';

ChartJs.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const Chart = ({ charData }) => {
	return (
		<Fragment>
			<Bar
				data={charData}
				options={{
					title: {
						display: true,
						text: 'Category',
						fontSize: 20,
					},
					legend: {
						display: true,
						position: true,
					},
				}}
			/>
		</Fragment>
	);
};
