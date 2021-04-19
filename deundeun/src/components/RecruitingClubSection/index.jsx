import RecruitingClubList from 'components/RecruitingClubList';
import RecruitingClubCarousel from 'components/RecruitingClubCarousel';
import { ContentKorean, TitleKorean } from 'pages/ClubPage/styles';
import React from 'react';
import { Content, Header } from './styles';

const RecruitingClubSection = ({ onClickSeeAll }) => {
	return (
		//
		<>
			<Header>
				<TitleKorean>모집중인 동아리</TitleKorean>
				<ContentKorean
					id="recruit"
					onClick={onClickSeeAll}
					style={{ marginLeft: 'auto', marginRight: '3em', cursor: 'pointer' }}
				>
					전체보기
				</ContentKorean>
			</Header>
			<Content>
				<RecruitingClubCarousel />
				<RecruitingClubList />
			</Content>
		</>
	);
};

export default RecruitingClubSection;
