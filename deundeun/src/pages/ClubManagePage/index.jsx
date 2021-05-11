import { ContentKorean } from 'components/ClubPostCard/styles';
import { TitleKorean } from 'pages/MyClubListPage/styles';
import React, { useEffect, useState } from 'react';
import { HeaderContainer, MenuContainer } from './styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DropdownMenu from 'components/DropdownMenu';
import ClubModifyPage from 'pages/ClubModifyPage';
import { Redirect } from 'react-router';
import ApplicationManagePage from 'pages/ApplicationManagePage';
import ApplicationAddPage from 'pages/ApplicationAddPage';
import { ContainerPage } from 'styles';
import RecruitManagePage from 'pages/RecruitManagePage';
import RecruitAddPage from 'pages/RecruitAddPage';
import MemberManagePage from 'pages/MemberManagePage';
import ApplicantManagePage from 'pages/ApplicantManagePage';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const ClubManagePage = () => {
	const [menuIndex, setMenuIndex] = useState(0);
	const [addNewForm, setAddNewForm] = useState(false);
	const menuOptions = ['정보 수정', '지원서 양식', '모집 공고', '지원자 관리', '멤버 관리'];

	useEffect(() => {
		return () => setAddNewForm(false);
	}, []);

	return (
		//
		<>
			<ContainerPage>
				<HeaderContainer>
					<TitleKorean style={{ marginRight: '0.5em' }}>동아리 관리</TitleKorean>
					<ChevronRightIcon style={{ marginRight: '0.5em' }} />
					<div>
						<ContentKorean style={{ marginRight: '0.625vw' }}>IT동아리 트와이스</ContentKorean>
						<ExpandMoreIcon style={{ marginRight: '1.56vw' }} />
					</div>
					<div>
						<ContentKorean style={{ marginRight: '0.625vw' }}>{`${menuOptions[menuIndex]}`}</ContentKorean>
						<DropdownMenu options={menuOptions} selectedIndex={menuIndex} setSelectedIndex={setMenuIndex} />
					</div>
				</HeaderContainer>
				<MenuContainer>
					{menuIndex === 0 && (
						<>
							<Redirect to="/club/manage/modify" />
							<ClubModifyPage />
						</>
					)}
					{menuIndex === 1 &&
						(addNewForm ? (
							<>
								<Redirect to="/club/manage/application/new" />
								<ApplicationAddPage setAddNewForm={setAddNewForm} />
							</>
						) : (
							<>
								<Redirect to="/club/manage/application" />
								<ApplicationManagePage setAddNewForm={setAddNewForm} />
							</>
						))}
					{menuIndex === 2 &&
						(addNewForm ? (
							<>
								<Redirect to="/club/manage/recruit/new" />
								<RecruitAddPage setAddNewForm={setAddNewForm} />
							</>
						) : (
							<>
								<Redirect to="/club/manage/recruit" />
								<RecruitManagePage setAddNewForm={setAddNewForm} />
							</>
						))}
					{menuIndex === 3 && (
						<>
							<Redirect to="/club/manage/applicant" />
							<ApplicantManagePage />
						</>
					)}
					{menuIndex === 4 && (
						<>
							<Redirect to="/club/manage/member" />
							<MemberManagePage />
						</>
					)}
				</MenuContainer>
			</ContainerPage>
		</>
	);
};

export default ClubManagePage;
