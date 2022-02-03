import React from 'react';
import './Chart.css';
import '../../basic.css';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Toptable from '../../components/toptable/toptable';

const Chart = () => {
	return (
		<div className='back'>
			<div className='top sticky-top '>
				<Header />
			</div>
			<div className='table-inner d-flex align-items-center'>
				<Toptable />
			</div>

			<Footer />
		</div>
	);
};

export default Chart;
