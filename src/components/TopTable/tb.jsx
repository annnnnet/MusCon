import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/src/collapse.js';

export class Example1 extends Component {
	render() {
		return (
			<div id='accordion'>
				<div className='card'>
					<div className='card-header'>
						<a
							className='btn'
							data-bs-toggle='collapse'
							href='#collapseOne'
						>
							First
						</a>
					</div>
					<div
						id='collapseOne'
						className='collapse show'
						data-bs-parent='#accordion'
					>
						<div className='card-body'>
							<table className='table'>
								<tbody>
									<tr>
										<td>John</td>
										<td>Doe</td>
										<td>john@example.com</td>
									</tr>
									<tr>
										<td>Mary</td>
										<td>Moe</td>
										<td>mary@example.com</td>
									</tr>
									<tr>
										<td>July</td>
										<td>Dooley</td>
										<td>july@example.com</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>

				<div className='card'>
					<div className='card-header'>
						<a
							className='collapsed btn'
							data-bs-toggle='collapse'
							href='#collapseTwo'
						>
							Second
						</a>
					</div>
					<div
						id='collapseTwo'
						className='collapse'
						data-bs-parent='#accordion'
					>
						<div className='card-body'>
							<table className='table'>
								<tbody>
									<tr>
										<td>John</td>
										<td>Doe</td>
										<td>john@example.com</td>
									</tr>
									<tr>
										<td>Mary</td>
										<td>Moe</td>
										<td>mary@example.com</td>
									</tr>
									<tr>
										<td>July</td>
										<td>Dooley</td>
										<td>july@example.com</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>

				<div className='card'>
					<div className='card-header'>
						<a
							className='collapsed btn'
							data-bs-toggle='collapse'
							href='#collapseThree'
						>
							Third
						</a>
					</div>
					<div
						id='collapseThree'
						className='collapse'
						data-bs-parent='#accordion'
					>
						<div className='card-body'>
							<table className='table'>
								<tbody>
									<tr>
										<td>John</td>
										<td>Doe</td>
										<td>john@example.com</td>
									</tr>
									<tr>
										<td>Mary</td>
										<td>Moe</td>
										<td>mary@example.com</td>
									</tr>
									<tr>
										<td>July</td>
										<td>Dooley</td>
										<td>july@example.com</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Example1;
