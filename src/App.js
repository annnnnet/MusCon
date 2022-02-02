import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './pages/main/main';
import Pd from './pages/post_demonstrate/pd';
import Singerchoose from './pages/singerchoose/singerchoose';
import Genrechoose from './pages/genrechoose/genrechoose';
import PostCreate from './pages/postcreate/postcreate';
import My_Page from './pages/My_Page/my_page';
import User_Page from './pages/User_Page/user_page';
import Registration from './pages/Registration/registration';
import Friends from './components/friendCard/cards';
import Toptable from './components/toptable/toptable';

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';
import Chart from './pages/chart/chart';
import Example from './components/toptable/aditional';
import Example1 from './components/toptable/test';

export default function App() {
	return (
		<Router>
			<Switch>
				<Route exact path='/'>
					<Redirect to='/Main' />
				</Route>
				<Route path='/Main'>
					<Main />
				</Route>
				<Route path='/Singerchoose'>
					<Singerchoose />
				</Route>
				<Route path='/Genrechoose'>
					<Genrechoose />
				</Route>
				<Route path='/PostCreate'>
					<PostCreate />
				</Route>
				<Route path='/pd'>
					<Pd />
				</Route>
				<Route path='/My_Page'>
					<My_Page />
				</Route>
				<Route path='/User_Page'>
					<User_Page />
				</Route>
				<Route path='/reg'>
					<Registration />
				</Route>
				<Route path='/table'>
					<Toptable />
				</Route>
				<Route path='/Friends'>
					<Friends />
				</Route>
				<Route path='/Chart'>
					<Chart />
				</Route>
			</Switch>
		</Router>
	);
}
