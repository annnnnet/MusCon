import React from 'react';
import singer from '../../pics/singer.jpg';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Cards.css';

var friends = [
	'Tom',
	'Nick',
	'John',
	'Bob',
	'Emma',
	'James',
	'Ru',
	'Kate',
	'Camila',
	'Betty',
	'Tina',
	'Rachel',
];

const Friends = () => {
	return (
		<div className='back'>
			<div className='top sticky-top '>
				<Header />
			</div>

			<div className='content'>
				<div className='sc_top'>
					{/* <img
						className='wavy'
						src={require('../../pics/yellow_top_wave_01.png')}
						alt='wave'
					/> */}
					<img
						className='wavy'
						src={require('../../pics/purple_bottom_wave_01.png')}
					/>
					<div className='sc_top_content'>
						<h1 id='sc_text'>Your possible friends:</h1>
					</div>
				</div>

				<div className='sc_wavy_content'>
					<div className='block'>
						<div className='row products-container'>
							{friends.map((items, index) => {
								return (
									<div
										key={index}
										className='col-xxl-1 col-xl-3 col-lg-4 col-md-6 col-sm-12'
									>
										<p></p>
										<div className='card text-center shadow'>
											<div className='overflow'>
												<img
													src={singer}
													alt='example'
													className='card-img-top'
												/>
											</div>
											<div className='card-body text-dark'>
												<h4 className='card-title'>{items}</h4>
												<p className='card-text text-secondary'>
													Lorem ipsum dolor sit amet consectetur
													adipisicing elit. Iusto fuga, quis
													pariatur, eveniet libero facere aut
													voluptas cupiditate cumque quod ipsa.
												</p>
												<a
													href='#'
													className='btn btn-outline-warning'
												>
													Add friend
												</a>
												<a
													href='#'
													className='btn btn-outline-danger'
												>
													Delete
												</a>
											</div>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Friends;
