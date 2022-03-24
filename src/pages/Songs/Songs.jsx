import React from 'react';
import './Songs.css';
import '../../basic.css';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Example1 from '../../components/TopTable/tb';

const Songs = () => {
	return (
		<div>
			<div className='sticky-top '>
				<Header />
			</div>
			<div className='sc_top'>
				{/* <img
					className='wavy'
					src={require('../../pics/purple_bottom_wave_01.png')}
					alt='wave'
				/> */}
				<div className='sc_top_content'>
					<h1 id='sc_text'>Choose favourite songs:</h1>
				</div>
			</div>
			<div className='yellow_top_wave'>
				<div className='sc_top_content'>
					<h1 id='sc_text'>Songs you may like:</h1>
				</div>
				<div className='songs'>
					<Example1 />
				</div>
			</div>
			<div className='yellow_bottom_wave'>
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

export default Songs;
