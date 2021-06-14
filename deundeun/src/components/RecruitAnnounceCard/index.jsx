import { Button } from 'components/MyApplicationCard/styles';
import React from 'react';
import { ContainerRow } from 'styles';
import { Container, HeaderContainer, RecruitingInfo, RecruitDeadline, RecruitTitle, ButtonContainer } from './styles';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
const RecruitAnnounceCard = ({ generation, title }) => {
	return (
		//
		<Container>
			<HeaderContainer>
				<RecruitingInfo className="pending">모집중</RecruitingInfo>
				<RecruitingInfo className="order">{generation ? generation : ''}기</RecruitingInfo>
				{/* <RecruitDeadline>2021.01.01 ~ 2021.01.08</RecruitDeadline> */}
				<MoreHorizIcon style={{ marginLeft: 'auto', marginTop: '-5vh', cursor: 'pointer' }} />
			</HeaderContainer>
			<ContainerRow style={{ marginTop: '2.4vh' }}>
				<RecruitTitle>{title ? title : ''}</RecruitTitle>
				<ButtonContainer>
					<Button>지원자 관리</Button>
					<Button>모집 종료</Button>
				</ButtonContainer>
			</ContainerRow>
		</Container>
	);
};

export default RecruitAnnounceCard;
