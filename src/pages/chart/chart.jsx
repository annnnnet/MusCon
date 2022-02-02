import React from 'react';
import './chart.css';
import '../../basic.css';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
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
