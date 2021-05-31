import RecruitingClubList from 'components/RecruitingClubList';
import RecruitingClubCarousel from 'components/RecruitingClubCarousel';
import { ContentKorean, TitleKorean } from './styles';
import React, { useState } from 'react';
import { Content, Header } from './styles';
import { useSelector } from 'react-redux';

const RecruitingClubSection = ({ onClickHomeTab, onClickProfile, onClickSeeAll }) => {
	const [focusClubImage, setFocusClubImage] = useState(0);


	return (
		//
		<>
			<Header>
				<TitleKorean style={{ marginBottom: '2.063em' }}>지금 모집중인 동아리</TitleKorean>
				{/* <ContentKorean
					id="recruit"
					onClick={onClickSeeAll}
					style={{ marginLeft: 'auto', marginRight: '3em', cursor: 'pointer' }}
				>
					전체보기
				</ContentKorean> */}
			</Header>
			<Content>
				<RecruitingClubCarousel setFocusClubImage={setFocusClubImage} />
				<RecruitingClubList ocusClubImage={focusClubImage} />
			</Content>
		</>
	);
};

export default RecruitingClubSection;
