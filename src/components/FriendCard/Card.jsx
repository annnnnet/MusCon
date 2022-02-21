/* eslint-disable react/prop-types */
import React from 'react';
import './Сard.css';
import singer from '../../pics/singer.jpg';

const Card = (props) => {
	return (
		<div className='card text-center shadow'>
			<div className='overflow'>
				<img src={singer} alt='example' className='card-img-top' />
			</div>
			<div className='card-body text-dark'>
				<h4 className='card-title'>{props.title}</h4>
				<h5 className='card-title'>Name Surname</h5>
				<p className='card-text text-secondary'>Info about a friend</p>
				<a href='#' className='btn btn-outline-warning'>
					Add friend
				</a>
				<a href='#' className='btn btn-outline-danger'>
					Delete
				</a>
			</div>
		</div>
	);
};

export default Card;
