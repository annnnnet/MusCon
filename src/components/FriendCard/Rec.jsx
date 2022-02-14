import React from 'react';
import './Rec.css';
import singer from '../../pics/singer.jpg';
const Recommendation = () => {
	return (
		<div className='card-deck'>
			<div className='card'>
				<img src={singer} alt='example' className='card-img-top' />
				<div className='card-b text-center'>
					<h5 className='card-title'>Name Surname</h5>
					<p className='card-text'>Info about a friend</p>
					<p className='card-btn'>
						<a href='#' className='btn btn-outline-warning'>
							Add friend
						</a>
						<a href='#' className='btn btn-outline-danger'>
							Delete
						</a>
					</p>
				</div>
			</div>
			<div className='card'>
				<img src={singer} alt='example' className='card-img-top' />
				<div className='card-b text-center'>
					<h5 className='card-title'>Name Surname</h5>
					<p className='card-text'>Info about a friend</p>
					<p className='card-btn'>
						<a href='#' className='btn btn-outline-warning'>
							Add friend
						</a>
						<a href='#' className='btn btn-outline-danger'>
							Delete
						</a>
					</p>
				</div>
			</div>
			<div className='card'>
				<img src={singer} alt='example' className='card-img-top' />
				<div className='card-b text-center'>
					<h5 className='card-title'>Name Surname</h5>
					<p className='card-text'>Info about a friend</p>
					<p className='card-btn'>
						<a href='#' className='btn btn-outline-warning'>
							Add friend
						</a>
						<a href='#' className='btn btn-outline-danger'>
							Delete
						</a>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Recommendation;
