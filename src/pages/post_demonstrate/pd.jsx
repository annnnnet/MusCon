import React from 'react';
import '../main/main.css';
import '../../basic.css';
import News_output from '../../components/news output/news_output';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';

const Pd = () => {
	return (
		<div className='background'>
			<div className='sticky-top '>
				<Header />
			</div>
			<div className='content'>
				<img
					className='wavy'
					src={require('../../pics/purple_bottom_wave_01.png')}
				/>
				<div className='main_wavy_content'>
					<News_output />
				</div>
				<div className='main_wavy_bottom'>
					<img src={require('../../pics/white_bottom_wave_01.png')} />
				</div>
			</div>

			<Footer />
		</div>
	);
};

export default Pd;
