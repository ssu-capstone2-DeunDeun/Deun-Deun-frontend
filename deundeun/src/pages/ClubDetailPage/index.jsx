import { Header, Logo, IconContainer, ProfileIcon } from 'pages/ClubHomePage/styles';
import React, { useCallback } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';
import ClubInfo from 'components/ClubInfo';

const ClubDetailPage = () => {
	const onClickProfile = useCallback((e) => {
		console.log('profile');
	}, []);

	const onClickSearch = useCallback((e) => {
		console.log('search');
	}, []);

	return (
		//
		<>
			<Header className="detail">
				<Link to="/club/home">
					<Logo>Logo</Logo>
				</Link>
				<IconContainer>
					<SearchIcon style={{ cursor: 'pointer' }} onClick={onClickSearch} />
					<ProfileIcon onClick={onClickProfile} />
				</IconContainer>
			</Header>
			<ClubInfo />
			{/* <ClubRecruitInfo /> */}
			{/* <ClubPosts /> */}
		</>
	);
};

export default ClubDetailPage;
