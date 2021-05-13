import { Content, JoinedClubCardContainer, HeaderContainer, TitleKorean } from './styles';
import ClubInfoCard from 'components/ClubInfoCard';
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
			<ContainerPage>
				<HeaderContainer>
					<CategoryKorean>마이페이지</CategoryKorean>
					<ChevronRightIcon />
					<CategoryKorean>가입 동아리 목록</CategoryKorean>
				</HeaderContainer>
				<ContainerColumn style={{ marginTop: '1.25em', width: '1246px' }}>
					<TitleKorean>나의 동아리 목록</TitleKorean>
					<ContainerRow style={{ marginTop: '0.25em' }}>
						<ContentKorean>현재 4개의 동아리에 참여하고 있습니다.</ContentKorean>
						<Content style={{ marginLeft: 'auto' }}>
							<CheckCircleOutlineIcon style={{ marginRight: '0.3em' }} />
							<ContentKorean>현재 참여중인 동아리만 보기</ContentKorean>
						</Content>
					</ContainerRow>
				</ContainerColumn>
				<JoinedClubCardContainer>
					<JoinedClubCard />
					<JoinedClubCard />
					<JoinedClubCard />
					<JoinedClubCard />
					{/* <JoinedClubCard />
					<JoinedClubCard /> */}
				</JoinedClubCardContainer>
			</ContainerPage>
		</>
	);
};

export default MyClubsPage;
