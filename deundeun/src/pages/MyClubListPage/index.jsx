import { ContentKorean } from 'components/ClubPostCard/styles';
import { TitleKorean, ContentContainer, Content, ClubInfoCardContainer } from './styles';
import ClubInfoCard from 'components/ClubInfoCard';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import React from 'react';
import { ContainerPage } from 'styles';

const MyClubsPage = () => {
	return (
		//
		<>
			<ContainerPage>
				<TitleKorean>나의 동아리 목록</TitleKorean>
				<ContentContainer>
					<ContentKorean>현재 1개의 동아리에 참여하고 있습니다.</ContentKorean>
					<Content style={{ marginLeft: 'auto', marginRight: '4em' }}>
						<CheckCircleOutlineIcon style={{ marginRight: '0.5em' }} />
						<ContentKorean>현재 참여중인 동아리만 보기</ContentKorean>
					</Content>
				</ContentContainer>
				<ClubInfoCardContainer>
					<ClubInfoCard />
					<ClubInfoCard />
				</ClubInfoCardContainer>
			</ContainerPage>
		</>
	);
};

export default MyClubsPage;
