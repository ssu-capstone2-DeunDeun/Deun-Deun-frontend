// import MyPage from 'pages/MyPage';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import loadable from '@loadable/component';

const ClubHomePage = loadable(() => import('pages/ClubHomePage'));
const ClubDetailPage = loadable(() => import('pages/ClubDetailPage'));
const MyPage = loadable(() => import('pages/MyPage'));

const App = () => {
	return (
		//
		<Switch>
			<Route exact path="/">
				<Redirect to="/club/home" />
			</Route>
			{/* <Route path="/login" component={LogIn} />
			<Route path="/signup" component={SignUp} /> */}
			<Route path={['/club/home', '/club/category', '/mypage']} component={ClubHomePage} />
			<Route exact path="/club/detail" component={ClubDetailPage} />
			{/* <Route exact path="/mypage" component={MyPage} /> */}
		</Switch>
	);
};

export default App;
