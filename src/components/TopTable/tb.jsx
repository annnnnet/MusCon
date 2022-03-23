import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/src/collapse.js';
import './tb.css';
export class Example1 extends Component {
	render() {
		return (
			<div id='accordion'>
				<div className='card'>
					<div className='card-header'>
						<a
							className='collapsed btn btn-outline-warning'
							data-bs-toggle='collapse'
							href='#collapseOne'
						>
							Lana Del Ray
						</a>
					</div>
					<div
						id='collapseOne'
						className='collapse'
						data-bs-parent='#accordion'
					>
						<div className='card-body'>
							<table className='table'>
								<tbody>
									<tr>
										<td>Summertime sadness</td>

										<td>
											<div className='float-end'>
												<a className='btn btn-circle '>+</a>
											</div>
										</td>
									</tr>
									<tr>
										<td>Dark paradise</td>

										<td>
											<div className='float-end'>
												<a className='btn btn-circle'>+</a>
											</div>
										</td>
									</tr>
									<tr>
										<td>Yuong and beautiful</td>

										<td>
											<div className='float-end'>
												<a className='btn btn-circle'>+</a>
											</div>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>

				<div className='card'>
					<div className='card-header'>
						<a
							className='collapsed btn btn-outline-warning'
							data-bs-toggle='collapse'
							href='#collapseTwo'
						>
							Adele
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
										<td>Hello</td>

										<td>
											<div className='float-end'>
												<a className='btn btn-circle'>+</a>
											</div>
										</td>
									</tr>
									<tr>
										<td>Easy on me</td>

										<td>
											<div className='float-end'>
												<a className='btn btn-circle'>+</a>
											</div>
										</td>
									</tr>
									<tr>
										<td>Skyfall</td>

										<td>
											<div className='float-end'>
												<a className='btn btn-circle'>+</a>
											</div>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>

				<div className='card'>
					<div className='card-header'>
						<a
							className='collapsed btn btn-outline-warning'
							data-bs-toggle='collapse'
							href='#collapseThree'
						>
							Eminem
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
										<td>Lose yourself</td>

										<td>
											<div className='float-end'>
												<a className='btn btn-circle'>+</a>
											</div>
										</td>
									</tr>
									<tr>
										<td>Rap God</td>

										<td>
											<div className='float-end'>
												<a className='btn btn-circle'>+</a>
											</div>
										</td>
									</tr>
									<tr>
										<td>Not Afraid</td>

										<td>
											<div className='float-end'>
												<a className='btn btn-circle'>+</a>
											</div>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
				<div className='card'>
					<div className='card-header'>
						<a
							className='collapsed btn btn-outline-warning'
							data-bs-toggle='collapse'
							href='#collapseFour'
						>
							The Weeknd
						</a>
					</div>
					<div
						id='collapseFour'
						className='collapse'
						data-bs-parent='#accordion'
					>
						<div className='card-body'>
							<table className='table'>
								<tbody>
									<tr>
										<td>Blinding Lights</td>

										<td>
											<div className='float-end'>
												<a className='btn btn-circle '>+</a>
											</div>
										</td>
									</tr>
									<tr>
										<td>The Hills</td>

										<td>
											<div className='float-end'>
												<a className='btn btn-circle'>+</a>
											</div>
										</td>
									</tr>
									<tr>
										<td>Call Out My Name</td>

										<td>
											<div className='float-end'>
												<a className='btn btn-circle'>+</a>
											</div>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>

				<div className='card'>
					<div className='card-header'>
						<a
							className='collapsed btn btn-outline-warning'
							data-bs-toggle='collapse'
							href='#collapseFive'
						>
							Ed Sheeran
						</a>
					</div>
					<div
						id='collapseFive'
						className='collapse'
						data-bs-parent='#accordion'
					>
						<div className='card-body'>
							<table className='table'>
								<tbody>
									<tr>
										<td>Bad Habits</td>

										<td>
											<div className='float-end'>
												<a className='btn btn-circle '>+</a>
											</div>
										</td>
									</tr>
									<tr>
										<td>Shape of You</td>

										<td>
											<div className='float-end'>
												<a className='btn btn-circle'>+</a>
											</div>
										</td>
									</tr>
									<tr>
										<td>Perfect</td>

										<td>
											<div className='float-end'>
												<a className='btn btn-circle'>+</a>
											</div>
										</td>
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
