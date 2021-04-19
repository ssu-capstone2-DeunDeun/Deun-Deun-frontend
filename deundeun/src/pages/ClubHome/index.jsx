import { Button, Header, IconContainer, ProfileIcon, SideBar, Title } from 'pages/ClubHome/styles';
import React, { useCallback, useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';

const ClubHome = () => {
	const [clickHome, setClickHome] = useState(true);
	const [clickCategory, setClickCategory] = useState(false);

	const onClickProfile = useCallback((e) => {
		e.preventDefault();
		console.log('profile');
	}, []);

	const onClickClubHome = useCallback((e) => {
		e.preventDefault();
		setClickHome(true);
		setClickCategory(false);
		console.log('club home');
	}, []);

	const onClickClubCategory = useCallback((e) => {
		e.preventDefault();
		setClickCategory(true);
		setClickHome(false);
		console.log('club category');
	}, []);

	return (
		<>
			<Header>
				<Title>Logo</Title>
				<IconContainer>
					<SearchIcon />
					<ProfileIcon onClick={onClickProfile} />
				</IconContainer>
			</Header>
			<SideBar>
				<Link to="/home">
					<Button className={`${clickHome ? 'clicked' : 'not-clicked'}`} onClick={onClickClubHome}>
						Home
					</Button>
				</Link>
				<Link to="/category">
					<Button className={`${clickCategory ? 'clicked' : 'not-clicked'}`} onClick={onClickClubCategory}>
						Category
					</Button>
				</Link>
			</SideBar>
		</>
	);
};

export default ClubHome;
