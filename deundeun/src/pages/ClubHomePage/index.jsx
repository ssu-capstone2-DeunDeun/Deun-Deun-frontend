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
	TitleKorean,
	Footer
} from 'pages/ClubHomePage/styles';
import React, { useCallback, useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';
import GlobalFonts from 'fonts/fonts';
import RecruitingClubSection from 'components/RecruitingClubSection';
import PopularClubSection from 'components/PopularClubSection';
import ClubPostSection from 'components/ClubPostSection';

const ClubHome = () => {
	const [clickHomeTab, setClickHomeTab] = useState(true);
	const [clickCategoryTab, setClickCategoryTab] = useState(false);
	const [clickCategory, setClickCategory] = useState(false);

	const onClickProfile = useCallback((e) => {
		e.preventDefault();
		console.log('profile');
	}, []);

	const onClickSearch = useCallback((e) => {
		e.preventDefault();
		console.log('search');
	}, []);

	const onClickHomeTab = useCallback((e) => {
		setClickHomeTab(true);
		setClickCategoryTab(false);
		console.log('club home');
	}, []);

	const onClickCategoryTab = useCallback((e) => {
		setClickCategoryTab(true);
		setClickHomeTab(false);
		console.log('club category');
	}, []);

	const onClickCategory = useCallback((e) => {
		// setClickCategory(true);
		console.log('clicked category');
	}, []);

	const onClickSeeAll = useCallback((e) => {
		console.log(e.target.id);
	}, []);

	return (
		<>
			<Header>
				<Link to="/club/home">
					<Logo onClick={onClickHomeTab}>Logo</Logo>
				</Link>
				<IconContainer>
					<SearchIcon style={{ cursor: 'pointer' }} onClick={onClickSearch} />
					<ProfileIcon onClick={onClickProfile} />
				</IconContainer>
			</Header>
			<Container>
				<SideBar>
					<Link to="/club/home">
						<Button className={`${clickHomeTab ? 'clicked' : 'not-clicked'}`} onClick={onClickHomeTab}>
							Home
						</Button>
					</Link>
					<Link to="/club/category/1">
						<Button className={`${clickCategoryTab ? 'clicked' : 'not-clicked'}`} onClick={onClickCategoryTab}>
							Category
						</Button>
					</Link>
					{clickCategoryTab && (
						<>
							<Link to="/club/category/1">
								<Button className="category" onClick={onClickCategory}>
									카테고리 1
								</Button>
							</Link>
							<Link to="/club/category/2">
								<Button className="category" onClick={onClickCategory}>
									카테고리 2
								</Button>
							</Link>
							<Link to="/club/category/3">
								<Button className="category" onClick={onClickCategory}>
									카테고리 3
								</Button>
							</Link>
							<Link to="/club/category/4">
								<Button className="category" onClick={onClickCategory}>
									카테고리 4
								</Button>
							</Link>
							<Link to="/club/category/5">
								<Button className="category" onClick={onClickCategory}>
									카테고리 5
								</Button>
							</Link>
							<Link to="/club/category/6">
								<Button className="category" onClick={onClickCategory}>
									카테고리 6
								</Button>
							</Link>
						</>
					)}
				</SideBar>
				<MainPage>
					{clickHomeTab && (
						<>
							<TitleEnglish style={{ marginBottom: '3.68em' }}>HOME</TitleEnglish>
							<GlobalFonts />
							<RecruitingClubSection onClickSeeAll={onClickSeeAll} />
							<PopularClubSection onClickSeeAll={onClickSeeAll} />
							<ClubPostSection onClickSeeAll={onClickSeeAll} />
						</>
					)}
					{clickCategoryTab && (
						<>
							<TitleKorean>카테고리 1</TitleKorean>
						</>
					)}
					<Footer />
				</MainPage>
			</Container>
		</>
	);
};

export default ClubHome;
