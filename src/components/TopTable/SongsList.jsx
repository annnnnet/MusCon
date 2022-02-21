import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const data = [
	{ id: 1, title: 'Song' },
	{ id: 2, title: 'Song' },
	{ id: 3, title: 'Song' },
	{ id: 4, title: 'Song' },
	{ id: 5, title: 'Song' },
	{ id: 6, title: 'Song' },
	{ id: 7, title: 'Song' },
	{ id: 8, title: 'Song' },
	{ id: 9, title: 'Song' },
	{ id: 10, title: 'Song' },
];

export class SongsList extends Component {
	render() {
		return (
			<table className='table'>
				<tbody>
					{data.map((val, key) => {
						return (
							<tr key={key}>
								<td>{val.id}</td>
								<td>{val.title}</td>
								<td>
									<button type='button' className='btn btn-secondary'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='16'
											height='16'
											fill='currentColor'
											className='bi bi-plus'
											viewBox='0 0 16 16'
										>
											<path d='M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z'></path>
										</svg>
									</button>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		);
	}
}

export default SongsList;
