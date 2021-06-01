import { Content, JoinedClubCardContainer, HeaderContainer, TitleKorean } from './styles';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import React from 'react';
import { ContainerColumn, ContainerPage, ContainerRow } from 'styles';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { CategoryKorean, ContentKorean } from 'pages/MyLikeListPage/styles';
import JoinedClubCard from 'components/JoinedClubCard';
const MyClubsPage = () => {
	return (
		//
		<>
			<ContainerPage style={{ width: '1400px' }}>
				<HeaderContainer>
					<CategoryKorean>마이페이지</CategoryKorean>
					<ChevronRightIcon />
					<CategoryKorean>가입 동아리 목록</CategoryKorean>
				</HeaderContainer>
				<ContainerColumn style={{ marginTop: '1.25em', width: '100%', marginRight: '4em' }}>
					<TitleKorean>나의 동아리 목록</TitleKorean>
					<ContainerRow>
						<ContentKorean style={{ fontSize: '1.1rem' }}>현재 4개의 동아리에 참여하고 있습니다.</ContentKorean>
						<Content style={{ marginLeft: 'auto' }}>
							<CheckCircleOutlineIcon style={{ marginRight: '0.3em' }} />
							<ContentKorean style={{ marginRight: '3.3em', fontSize: '1.1rem' }}>
								현재 참여중인 동아리만 보기
							</ContentKorean>
						</Content>
					</ContainerRow>
				</ContainerColumn>
				<JoinedClubCardContainer>
					<JoinedClubCard />
					<JoinedClubCard />
					<JoinedClubCard />
					<JoinedClubCard />
					<JoinedClubCard className="inactive" />
					<JoinedClubCard className="inactive" />
				</JoinedClubCardContainer>
			</ContainerPage>
		</>
	);
};

export default MyClubsPage;
