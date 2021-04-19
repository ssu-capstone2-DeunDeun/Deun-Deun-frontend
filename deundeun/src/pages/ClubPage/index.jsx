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
	Footer
} from 'pages/ClubPage/styles';
import React, { useCallback, useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';
import GlobalFonts from 'fonts/fonts';
import RecruitingClubSection from 'components/RecruitingClubSection';
import PopularClubSection from 'components/PopularClubSection';
import ClubPostSection from 'components/ClubPostSection';

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

	const onClickSeeAll = useCallback((e) => {
		console.log(e.target.id);
	}, []);

	return (
		<>
			<Header>
				<Link to="/club/home">
					<Logo onClick={onClickClubHome}>Logo</Logo>
				</Link>
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
							<TitleEnglish style={{ marginBottom: '3.68em' }}>HOME</TitleEnglish>
							<GlobalFonts />
							<RecruitingClubSection onClickSeeAll={onClickSeeAll} />
							<PopularClubSection onClickSeeAll={onClickSeeAll} />
							<ClubPostSection onClickSeeAll={onClickSeeAll} />
						</>
					)}
					{clickCategory && <TitleEnglish>Category</TitleEnglish>}
					<Footer />
				</MainPage>
			</Container>
		</>
	);
};

export default ClubHome;
