import React from 'react';

import { PolarArea } from 'react-chartjs-2';
import { MDBContainer } from 'mdbreact';

// class Polar_Chart extends React.Component {
const Polar_Chart = () => {
	const state = {
		dataPolar: {
			datasets: [
				{
					data: [300, 50, 100, 40, 120],
					backgroundColor: [
						'rgba(247, 70, 74, 0.5)',
						'rgba(70, 191, 189, 0.5)',
						'rgba(253, 180, 92, 0.5)',
						'rgba(148, 159, 177, 0.5)',
						'rgba(77, 83, 96, 0.5)',
					],
					label: 'My dataset', // for legend
				},
			],
			labels: ['Red', 'Green', 'Yellow', 'Grey', 'Dark Grey'],
		},
	};
	//   render() {
	return (
		<div className='container col-md-10'>
			<MDBContainer>
				<h3 className='w-50'>Polar area chart</h3>
				<PolarArea data={state.dataPolar} options={{ responsive: true }} />
			</MDBContainer>
		</div>
	);
	//   }
};

export default Polar_Chart;
