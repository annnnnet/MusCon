import React from 'react';
import './TopTable.css';
import Table from 'react-bootstrap/Table';

const data = [
	{ id: 1, author: 'Anom', title: 'JBK' },
	{ id: 2, author: 'Megha', title: 'Ocjvxj' },
	{ id: 3, author: 'Subham', title: 'LKvnk' },
	{ id: 4, author: 'Anom', title: 'JBK' },
	{ id: 5, author: 'Megha', title: 'Ocjvxj' },
	{ id: 6, author: 'Subham', title: 'LKvnk' },
	{ id: 7, author: 'Anom', title: 'JBK' },
	{ id: 8, author: 'Megha', title: 'Ocjvxj' },
	{ id: 9, author: 'Subham', title: 'LKvnk' },
	{ id: 10, author: 'Subham', title: 'LKvnk' },
];

const Rad = {
	borderRadius: '50px 0px 0px 0px',
};

const Rad1 = {
	borderRadius: '0px 0px 0px 0px',
};

const Rad2 = {
	borderRadius: '0px 50px 0px 0px',
};

const Rad3 = {
	borderRadius: '0px 0px 50px 0px',
};

const Rad4 = {
	borderRadius: '0px 0px 0px 50px',
};

function Toptable() {
	return (
		<div className='Table '>
			<Table borderless class='table '>
				<tr>
					<th style={Rad}>№</th>
					<th style={Rad1}>Author</th>
					<th style={Rad2}>Title</th>
				</tr>
				{data.map((val, key) => {
					return (
						<tr key={key}>
							<td>{val.id}</td>
							<td>{val.author}</td>
							<td>{val.title}</td>
						</tr>
					);
				})}
				<tr>
					<th style={Rad4}></th>
					<th style={Rad1}></th>
					<th style={Rad3}></th>
				</tr>
			</Table>
		</div>
	);
}
export default Toptable;
