import React from 'react';
import { ButtonContainer, Button } from 'components/MyApplicationCard/styles';
import { ApplicationDetail, ApplicationTitle, Container, Divider } from './styles';
const ApplicationFormCard = () => {
	return (
		//
		<Container>
			<ApplicationTitle>[3기] 야! 너도 트와이스 할 수 있어!</ApplicationTitle>
			<ApplicationDetail>IT동아리 트와이스</ApplicationDetail>
			<Divider />
			<ApplicationDetail>2021.01.01 수정</ApplicationDetail>
			<ButtonContainer>
				<Button style={{ marginRight: '1vw' }}>수정하기</Button>
				<Button>삭제하기</Button>
			</ButtonContainer>
		</Container>
	);
};

export default ApplicationFormCard;
