// import MyPage from 'pages/MyPage';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import loadable from '@loadable/component';

const ClubPage = loadable(() => import('pages/ClubPage'));

const App = () => {
	return (
		//
		<Switch>
			<Route exact path="/">
				<Redirect to="/club" />
			</Route>
			{/* <Route path="/login" component={LogIn} />
			<Route path="/signup" component={SignUp} /> */}
			<Route path="/club" component={ClubPage} />
		</Switch>
	);
};

export default App;
