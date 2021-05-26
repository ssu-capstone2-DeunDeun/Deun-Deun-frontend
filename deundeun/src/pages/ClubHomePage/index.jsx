import React, { useCallback } from 'react';
import { TitleEnglish } from './styles';
import GlobalFonts from 'fonts/fonts';
import RecruitingClubSection from 'components/RecruitingClubSection';
import PopularClubSection from 'components/PopularClubSection';
import ClubPostSection from 'components/ClubPostSection';
import { ContainerColumn, ContainerPage } from 'styles';
const ClubHome = () => {
	const onClickSeeAll = useCallback((e) => {
		console.log('see all');
	}, []);

	return (
		//
		<>
			<ContainerPage style={{ width: '1462px' }}>
				<>
					{/* <TitleEnglish style={{ marginBottom: '3.68em' }}>HOME</TitleEnglish>
					<GlobalFonts /> */}
					<RecruitingClubSection onClickSeeAll={onClickSeeAll} />
					<PopularClubSection onClickSeeAll={onClickSeeAll} />
					<ClubPostSection onClickSeeAll={onClickSeeAll} />
				</>
			</ContainerPage>
		</>
	);
};

export default ClubHome;
