import { ContentContainer, Content, HeaderContainer } from 'pages/MyClubListPage/styles';
import { ContentKorean } from 'components/ClubPostCard/styles';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import React from 'react';
import MyApplicationCard from 'components/MyApplicationCard';
import { CardContainer } from './styles';
import { ContainerPage } from 'styles';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { CategoryKorean } from 'pages/MyLikeListPage/styles';
const MyApplicationPage = () => {
	return (
		//
		<>
			<ContainerPage>
				<HeaderContainer>
					<CategoryKorean>마이페이지</CategoryKorean>
					<ChevronRightIcon />
					<CategoryKorean>지원 목록</CategoryKorean>
				</HeaderContainer>
				<ContentContainer>
					<ContentKorean>현재 3개의 동아리에 지원했습니다.</ContentKorean>
					<Content style={{ marginLeft: 'auto', marginRight: '4em' }}>
						<CheckCircleOutlineIcon style={{ marginRight: '0.5em' }} />
						<ContentKorean>이전 내역 모두 보기</ContentKorean>
					</Content>
				</ContentContainer>
				<CardContainer>
					<MyApplicationCard />
					<MyApplicationCard />
					<MyApplicationCard />
				</CardContainer>
			</ContainerPage>
		</>
	);
};

export default MyApplicationPage;
