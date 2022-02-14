import React from 'react';
import './Chart.css';
import '../../basic.css';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Toptable from '../../components/TopTable/TopTable';

const Chart = () => {
	return (
		<div className='back'>
			<div className='top sticky-top '>
				<Header />
			</div>
			<div className='row'>
				<img
					className='wavy'
					src={require('../../pics/purple_bottom_wave_01.png')}
					alt='wave'
				/>
				<div className='table-responsive col-md-6'>
					<Toptable />
				</div>
				<div className='table-responsive col-md-6'>
					<Toptable />
				</div>
			</div>
			<div className='main_wavy_bottom'>
				<img
					className='wavy'
					src={require('../../pics/white_bottom_wave_01.png')}
					alt='wave'
				/>
			</div>
			<Footer />
		</div>
	);
};

export default Chart;
