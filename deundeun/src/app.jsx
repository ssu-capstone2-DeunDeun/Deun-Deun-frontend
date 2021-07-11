// import MyPage from 'pages/MyPage';
import React, { useEffect, useState } from 'react';
import { Redirect, Route, Switch, useLocation, useParams } from 'react-router-dom';
import loadable from '@loadable/component';
import { ContainerRow } from 'styles';

const HeaderContainer = loadable(() => import('container/common/HeaderContainer'));
const SideBar = loadable(() => import('components/common/SideBar'));
const ClubHomePage = loadable(() => import('pages/ClubHomePage'));
const CategoryPage = loadable(() => import('pages/CategoryPage'));
const ClubDetailPage = loadable(() => import('pages/ClubDetailPage'));
const MyClubListPage = loadable(() => import('pages/MyClubListPage'));
const MyApplicationPage = loadable(() => import('pages/MyApplicationPage'));
const MyLikeListPage = loadable(() => import('pages/MyLikeListPage'));
const ApplicationSuccessPage = loadable(() => import('pages/ApplicationSuccessPage'));
const ApplySuccessPage = loadable(() => import('pages/ApplySuccessPage'));
const RecruitSuccessPage = loadable(() => import('pages/RecruitSuccessPage'));
const MyApplyPage = loadable(() => import('pages/MyApplyPage'));
const ApplicationPreviewPage = loadable(() => import('pages/ApplicationPreviewPage'));
const ApplicationModifyPage = loadable(() => import('pages/ApplicationModifyPage'));
const RecruitModifyPage = loadable(() => import('pages/RecruitModifyPage'));

const ClubPostPage = loadable(() => import('pages/ClubPostPage'));
const ClubPostItemPage = loadable(() => import('pages/ClubPostItemPage'));
const ClubManagePostPage = loadable(() => import('pages/ClubManagePostPage'));
const ClubAddSuccessPage = loadable(() => import('pages/ClubAddSuccessPage'));
const PostAllPage = loadable(() => import('pages/PostAllPage'));

const LoginPage = loadable(() => import('pages/LoginPage'));
const ApplyPage = loadable(() => import('pages/ApplyPage'));
const ApplyPageSuccessPage = loadable(() => import('pages/ApplyPageSuccessPage'));
const RecruitDetailPage = loadable(() => import('pages/RecruitDetailPage'));
const PostDetailPage = loadable(() => import('pages/PostDetailPage'));

const ApplicationManagePage = loadable(() => import('pages/ApplicationManagePage'));
const RecruitManagePage = loadable(() => import('pages/RecruitManagePage'));
const ApplicantManagePage = loadable(() => import('pages/ApplicantManagePage'));
const MemberManagePage = loadable(() => import('pages/MemberManagePage'));

const OAuth2RedirectHandler = loadable(() => import('components/login/oauth2/OAuth2RedirectHandler'));
const RegisterInfoContainer = loadable(() => import('container/register/RegisterInfoContainer'));
const RegisterHashtagContainer = loadable(() => import('container/register/RegisterHashtagContainer'));
const ClubAddInfoContainer = loadable(() => import('container/clubRegister/ClubAddInfoContainer'));
const ClubModifyPageContainer = loadable(() => import('container/clubRegister/ClubModifyPageContainer'));
const MyProfileModifyPageContainer = loadable(() => import('container/myProfileModify/MyProfileModifyPageContainer'));
const RecruitAddInfoContainer = loadable(() => import('container/recruit/RecruitAddInfoContainer'));
const ApplicationAddInfoContainer = loadable(() => import('container/application/ApplicationAddInfoContainer'));
const SendMsgSuccess = loadable(() => import('components/SendMsgSuccess/index'));

const App = () => {
	let location = useLocation();

	const [user, setUser] = useState(false);

	useEffect(() => {}, [location]);

	return (
		//
		<Switch>
			<Route exact path="/">
				<Redirect to="/home" />
			</Route>
			<Route exact path="/home">
				<HeaderContainer setUser={setUser} />
				<ContainerRow>
					<SideBar user={user} location={location} />
					<ClubHomePage />
				</ContainerRow>
			</Route>
			<Route path="/post/all" exact>
				<HeaderContainer setUser={setUser} />
				<ContainerRow>
					<SideBar user={user} location={location} />
					<PostAllPage />
				</ContainerRow>
			</Route>
			<Route path="/club/category/:categoryType">
				<HeaderContainer setUser={setUser} />
				<ContainerRow>
					<SideBar user={user} location={location} />
					<CategoryPage />
				</ContainerRow>
			</Route>
			<Route path="/mypage/:name">
				<HeaderContainer setUser={setUser} />
				<ContainerRow>
					<SideBar user={user} location={location} />
					<MyPage />
				</ContainerRow>
			</Route>
			<Route exact path="/club/manage/application/:id">
				<HeaderContainer setUser={setUser} />
				<ContainerRow>
					<SideBar user={user} location={location} />
					<ApplicationPreviewPage />
				</ContainerRow>
			</Route>
			<Route exact path="/club/manage/application/modify/:id/">
				<HeaderContainer setUser={setUser} />
				<ContainerRow>
					<SideBar user={user} location={location} />
					<ApplicationModifyPage />
				</ContainerRow>
			</Route>
			<Route exact path="/club/manage/recruit/modify/:id">
				<HeaderContainer setUser={setUser} />
				<ContainerRow>
					<SideBar user={user} location={location} />
					<RecruitModifyPage />
				</ContainerRow>
			</Route>
			<Route path="/club/manage/:name">
				<HeaderContainer setUser={setUser} />
				<ContainerRow>
					<SideBar user={user} location={location} />
					<ClubManagePage location={location} />
				</ContainerRow>
			</Route>
			<Route exact path="/club/add">
				<HeaderContainer setUser={setUser} />
				<ContainerRow>
					<SideBar user={user} location={location} />
					<ClubAddInfoContainer />
				</ContainerRow>
			</Route>
			<Route exact path="/club/add/success">
				<HeaderContainer setUser={setUser} />
				<ClubAddSuccessPage />
			</Route>
			<Route exact path="/application/success">
				<HeaderContainer setUser={setUser} />
				<ApplicationSuccessPage />
			</Route>
			<Route exact path="/applicant/message/success">
				<HeaderContainer setUser={setUser} />
				<SendMsgSuccess />
			</Route>
			<Route exact path="/apply/success">
				<HeaderContainer setUser={setUser} />
				<ApplySuccessPage />
			</Route>
			<Route exact path="/recruit/success">
				<HeaderContainer setUser={setUser} />
				<RecruitSuccessPage />
			</Route>
			<Route component={LoginPage} path="/login" exact />
			<Route component={RegisterInfoContainer} path="/register/1" exact />
			{/* <Route component={RegisterPage2} path="/register/2" exact /> */}
			<Route component={RegisterHashtagContainer} path="/register/2" exact />
			<Route component={ApplyPage} path="/forms/:clubName/:id" exact />
			<Route component={ApplyPageSuccessPage} path="/forms/:clubName/success" exact />
			<Route component={MyApplyPage} path="/apply/:clubName/:id" exact />

			<Route component={RecruitDetailPage} path="/recruit/detail/id" exact />
			<Route component={PostDetailPage} path="/club/:clubName/post/:postId" exact />

			<Route component={ApplicantManagePage} path="/manager/applicant" exact />
			<Route component={MemberManagePage} path="/manager/member" exact />
			<Route component={OAuth2RedirectHandler} path="/oauth2/redirect" exact />
			<Route component={ClubPostPage} path="/club/post" exact />
			<Route component={ClubPostItemPage} path="/club/post/:postId" exact />
			<Route component={ClubDetailPage} path="/club/:clubName" exact />
		</Switch>
	);
};

const MyPage = () => {
	const { name } = useParams();
	return (
		//
		<>
			{(name === 'modify' || name === '') && <MyProfileModifyPageContainer />}
			{name === 'clubs' && <MyClubListPage />}
			{name === 'application' && <MyApplicationPage />}
			{name === 'likes' && <MyLikeListPage />}
		</>
	);
};

const ClubManagePage = ({ location }) => {
	const { name } = useParams();

	const [addNewApplication, setAddNewApplication] = useState(false);
	const [addNewRecruit, setAddNewRecruit] = useState(false);

	useEffect(() => {
		return () => {
			setAddNewApplication(false);
			setAddNewRecruit(false);
		};
	}, []);

	useEffect(() => {
		switch (true) {
			case location.pathname === '/club/manage/application':
				setAddNewApplication(false);
				break;
			case location.pathname === '/club/manage/recruit':
				setAddNewRecruit(false);
				break;
			default:
				break;
		}
	}, [location]);

	return (
		//
		<>
			{name === 'modify' && <ClubModifyPageContainer />}
			{name === 'application' &&
				(addNewApplication ? (
					<>
						{/* <Redirect to="/club/manage/application/new" /> */}
						{/* {history.push('/club/manage/application/new')} */}
						<ApplicationAddInfoContainer location={location} setAddNewForm={setAddNewApplication} />
					</>
				) : (
					<>
						{/* <Redirect to="/club/manage/application" /> */}
						<ApplicationManagePage setAddNewForm={setAddNewApplication} />
					</>
				))}
			{name === 'recruit' &&
				(addNewRecruit ? (
					<>
						<Redirect to="/club/manage/recruit/new" />
						<RecruitAddInfoContainer location={location} setAddNewForm={setAddNewRecruit} />
					</>
				) : (
					<>
						<Redirect to="/club/manage/recruit" />
						<RecruitManagePage setAddNewForm={setAddNewRecruit} />
					</>
				))}
			{name === 'applicant' && <ApplicantManagePage />}
			{name === 'member' && <MemberManagePage />}
			{name === 'post' && <ClubManagePostPage />}
		</>
	);
};

export default App;
