import React from 'react';
import { Link } from 'react-router-dom';
// import bootstrap from 'bootstrap';

const Friends = (friends) => {
	return (
		//     <div class="list-group list-group-mine">
		//     {friends.map((items, index) => {
		//     return (
		//         <a class="col-md-12 list-group-item" href="/{items}"><a href="#" class="col-md-6">{items}</a><button type="button" class="col-md-6 delete btn-close" aria-label="Close"></button></a>)  })}
		// </div>

		<div className='list-group-mine'>
			{friends.map((items, index) => {
				return (
					<p
						className='col-md-12 list-group-item'
						key={index}
						href='/{items}'
					>
						<div className='left col-md-9'>{items}</div>
						<button
							type='button'
							className='col-md-1 delete right btn-close'
							aria-label='Close'
						></button>
					</p>
				);
			})}
		</div>
	);
};
export default Friends;
