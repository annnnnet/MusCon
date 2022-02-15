import React from 'react';
import '../Main/Main.css';
import '../../basic.css';
import NewsOutput from '../../components/PostOutput/PostOutput';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

const PostDemonstrate = () => {
	return (
		<div className='background'>
			<div className='sticky-top '>
				<Header />
			</div>
			<div className='content'>
				<img
					className='wavy'
					src={require('../../pics/purple_bottom_wave_01.png')}
					alt='wave'
				/>
				<div className='main_wavy_content'>
					<NewsOutput />
				</div>
				<div className='main_wavy_bottom'>
					<img
						className='wavy'
						src={require('../../pics/white_bottom_wave_01.png')}
						alt='wave'
					/>
				</div>
			</div>

			<Footer />
		</div>
	);
};

export default PostDemonstrate;
