import { Content, HeaderContainer, TitleKorean } from 'pages/MyClubListPage/styles';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import React from 'react';
import MyApplicationCard from 'components/MyApplicationCard';
import { CardContainer, ContentKorean } from './styles';
import { ContainerColumn, ContainerPage, ContainerRow } from 'styles';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { CategoryKorean } from 'pages/MyLikeListPage/styles';
const MyApplicationPage = () => {
	return (
		//
		<>
			<ContainerPage>
				<HeaderContainer style={{ marginBottom: '12px' }}>
					<CategoryKorean>마이페이지</CategoryKorean>
					<ChevronRightIcon />
					<CategoryKorean>지원 목록</CategoryKorean>
				</HeaderContainer>
				<ContainerColumn style={{ marginTop: '1.25em', width: '100%', marginRight: '4em' }}>
					<TitleKorean>나의 지원 목록</TitleKorean>
					<ContainerRow>
						<ContentKorean>현재 3개의 동아리에 지원했습니다.</ContentKorean>
						<Content style={{ marginLeft: 'auto', marginRight: '1.1em' }}>
							<CheckCircleOutlineIcon style={{ marginRight: '0.3em' }} />
							<ContentKorean>이전 내역 모두 보기</ContentKorean>
						</Content>
					</ContainerRow>
				</ContainerColumn>
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
