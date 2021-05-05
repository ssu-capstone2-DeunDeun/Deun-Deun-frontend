// import { Header, Logo, IconContainer, ProfileIcon } from 'components/Header';
import Header from 'components/Header';
import React, { useCallback } from 'react';
import ClubInfoSection from 'components/ClubInfoSection';
import RecruitInfoSection from 'components/RecruitInfoSection';
import PostSection from 'components/PostSection';

const ClubDetailPage = () => {
	// const onClickProfile = useCallback((e) => {
	// 	console.log('profile');
	// }, []);

	// const onClickSearch = useCallback((e) => {
	// 	console.log('search');
	// }, []);

	return (
		//
		<>
			<Header>
				{/* <Link to="/club/home">
					<Logo>Logo</Logo>
				</Link>
				<IconContainer>
					<SearchIcon style={{ cursor: 'pointer' }} onClick={onClickSearch} />
					<ProfileIcon onClick={onClickProfile} />
				</IconContainer> */}
			</Header>
			<ClubInfoSection />
			<RecruitInfoSection />
			<PostSection />
		</>
	);
};

export default ClubDetailPage;
