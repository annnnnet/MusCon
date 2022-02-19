import React, { Component } from 'react';

import Card from './Card';
import img1 from '../../pics/singer.jpg';
import img2 from '../../pics/singer.jpg';

// class Friends extends Component {
// 	render() {
// 		return (
// 			<div className='container-fluid d-flex justify-content-center'>
// 				<div className='row'>
// 					<div className='col-xxl-1 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12 '>
// 						<Card imgsrc={img1} title='Mark' />
// 					</div>
// 					<div className='col-xxl-1 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12'>
// 						<Card imgsrc={img2} title='John' />
// 					</div>
// 					<div className='col-xxl-1 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12'>
// 						<Card imgsrc={img1} title='Nick' />
// 					</div>
// 					<div className='col-xxl-1 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12'>
// 						<Card imgsrc={img1} title='Nick' />
// 					</div>
// 					<div className='col-xxl-1 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12'>
// 						<Card imgsrc={img1} title='Nick' />
// 					</div>
// 					<div className='col-xxl-1 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12'>
// 						<Card imgsrc={img1} title='Nick' />
// 					</div>
// 					<div className='col-xxl-1 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12'>
// 						<Card imgsrc={img1} title='Nick' />
// 					</div>
// 					<div className='col-xxl-1 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12'>
// 						<Card imgsrc={img1} title='Nick' />
// 					</div>
// 					<div className='col-xxl-1 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12'>
// 						<Card imgsrc={img1} title='Nick' />
// 					</div>
// 					<div className='col-xxl-1 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12'>
// 						<Card imgsrc={img1} title='Nick' />
// 					</div>
// 					<div className='col-xxl-1 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12'>
// 						<Card imgsrc={img1} title='Nick' />
// 					</div>
// 					<div className='col-xxl-1 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12'>
// 						<Card imgsrc={img1} title='Nick' />
// 					</div>
// 				</div>
// 			</div>
// 		);
// 	}
// }

// export default Friends;

import singer from '../../pics/singer.jpg';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

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
													className='btn btn-outline-success'
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
