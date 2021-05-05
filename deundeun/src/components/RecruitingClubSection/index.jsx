import RecruitingClubList from 'components/RecruitingClubList';
import RecruitingClubCarousel from 'components/RecruitingClubCarousel';
import { ContentKorean, TitleKorean } from './styles';
import React, { useState } from 'react';
import { Content, Header } from './styles';

const RecruitingClubSection = ({ onClickHomeTab, onClickProfile, onClickSeeAll }) => {
	const [focusClubImage, setFocusClubImage] = useState(0);

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
				<RecruitingClubCarousel setFocusClubImage={setFocusClubImage} />
				<RecruitingClubList focusClubImage={focusClubImage} />
			</Content>
		</>
	);
};

export default RecruitingClubSection;
