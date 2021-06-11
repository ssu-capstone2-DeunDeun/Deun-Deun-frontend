// import { Header, Logo, IconContainer, ProfileIcon } from 'components/Header';
import React, { useCallback } from 'react';
import ClubInfoSection from 'components/ClubInfoSection';
import RecruitInfoSection from 'components/RecruitInfoSection';
import PostSection from 'components/PostSection';
import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { getClubInfo } from 'lib/api/auth';
import { useState } from 'react';

const ClubDetailPage = ({ match }) => {
	const { clubName } = match.params;
	// console.log("dfqe", match.params);
	const [club, setClub] = useState(null);

	// console.log("clubname ", clubName);
	// const onClickProfile = useCallback((e) => {
	// 	console.log('profile');
	// }, []);

	// const onClickSearch = useCallback((e) => {
	// 	console.log('search');
	// }, []);

	useEffect(() => {
		async function getClub() {
			const response = await getClubInfo(clubName);
			setClub(response.data);
		}
		getClub();
	}, [clubName, club]);

	return (
		//
		<>
			{club && <ClubInfoSection clubInfo={club.clubResponseDto} />}
			{club && <RecruitInfoSection clubRecruitInfo={club.clubRecruitResponseDto} clubName={clubName} />}
			{club && <PostSection postResponse={club.postResponseDtos} clubName={clubName} />}
		</>
	);
};

export default withRouter(ClubDetailPage);
