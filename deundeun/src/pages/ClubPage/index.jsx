import {
	Button,
	Header,
	IconContainer,
	ProfileIcon,
	SideBar,
	Container,
	MainPage,
	Logo,
	TitleEnglish,
	TitleKorean
} from 'pages/ClubPage/styles';
import React, { useCallback, useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';
import ClubImageSlider from 'components/ClubImageSlider';
import GlobalFonts from 'fonts/fonts';
import styled from 'styled-components';

const ClubHome = () => {
	const [clickHome, setClickHome] = useState(true);
	const [clickCategory, setClickCategory] = useState(false);

	const onClickProfile = useCallback((e) => {
		e.preventDefault();
		console.log('profile');
	}, []);

	const onClickClubHome = useCallback((e) => {
		setClickHome(true);
		setClickCategory(false);
		console.log('club home');
	}, []);

	const onClickClubCategory = useCallback((e) => {
		setClickCategory(true);
		setClickHome(false);
		console.log('club category');
	}, []);

	return (
		<>
			<Header>
				<Logo>Logo</Logo>
				<IconContainer>
					<SearchIcon />
					<ProfileIcon onClick={onClickProfile} />
				</IconContainer>
			</Header>
			<Container>
				<SideBar>
					<Link to="/club/home">
						<Button className={`${clickHome ? 'clicked' : 'not-clicked'}`} onClick={onClickClubHome}>
							Home
						</Button>
					</Link>
					<Link to="/club/category">
						<Button className={`${clickCategory ? 'clicked' : 'not-clicked'}`} onClick={onClickClubCategory}>
							Category
						</Button>
					</Link>
				</SideBar>
				<MainPage>
					{clickHome && (
						<>
							<TitleEnglish>HOME</TitleEnglish>
							<GlobalFonts />
							<TitleKorean>모집중인 동아리</TitleKorean>
							<ClubImageSlider />
						</>
					)}
					{clickCategory && <h1>Category</h1>}
				</MainPage>
			</Container>
		</>
	);
};

export default ClubHome;
