import { ContentKorean } from 'components/ClubPostCard/styles';
import { TitleKorean } from 'pages/MyClubListPage/styles';
import React, { useEffect, useState } from 'react';
import { HeaderContainer, Container } from './styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DropdownMenu from 'components/DropdownMenu';
import ClubModifyPage from 'pages/ClubModifyPage';
import { Redirect } from 'react-router';

const ClubManagePage = () => {
	const [menuIndex, setMenuIndex] = useState(0);
	const menuOptions = ['정보 수정', '지원서 양식', '모집 공고', '지원자 관리', '멤버 관리'];

	return (
		//
		<>
			<HeaderContainer>
				<TitleKorean style={{ marginRight: '2.76vw' }}>동아리 관리</TitleKorean>
				<div>
					<ContentKorean style={{ marginRight: '0.625vw' }}>IT동아리 트와이스</ContentKorean>
					<ExpandMoreIcon style={{ marginRight: '1.56vw' }} />
				</div>
				<div>
					<ContentKorean style={{ marginRight: '0.625vw' }}>{`${menuOptions[menuIndex]}`}</ContentKorean>
					<DropdownMenu options={menuOptions} setSelectedIndex={setMenuIndex} />
				</div>
			</HeaderContainer>
			<Container>
				{menuIndex === 0 && (
					<>
						<Redirect to="/club/manage/modify" />
						<ClubModifyPage />
					</>
				)}
				{menuIndex === 1 && (
					<>
						<Redirect to="/club/manage/application" />
						<ClubModifyPage />
					</>
				)}
				{menuIndex === 2 && (
					<>
						<Redirect to="/club/manage/recruit" />
						<ClubModifyPage />
					</>
				)}
				{menuIndex === 3 && (
					<>
						<Redirect to="/club/manage/applicant" />
						<ClubModifyPage />
					</>
				)}
				{menuIndex === 4 && (
					<>
						<Redirect to="/club/manage/member" />
						<ClubModifyPage />
					</>
				)}
			</Container>
		</>
	);
};

export default ClubManagePage;
