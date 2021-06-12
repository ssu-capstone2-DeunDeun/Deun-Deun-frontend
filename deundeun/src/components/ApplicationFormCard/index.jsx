import React from 'react';
import { ButtonContainer, Button } from 'components/MyApplicationCard/styles';
import { ApplicationDetail, ApplicationTitle, Container, Divider } from './styles';
import DeleteApplicationModal from 'components/modal/DeleteApplicationModal/index';
const ApplicationFormCard = ({ id, title, clubName, onDeleteApplication }) => {
	return (
		//
		<Container>
			<ApplicationTitle>{title}</ApplicationTitle>
			<Divider />
			<ApplicationDetail>{clubName}</ApplicationDetail>
			<ButtonContainer>
				<Button style={{ marginRight: '16px' }}>수정하기</Button>
				<Button id={id} onClick={onDeleteApplication}>
					삭제하기
				</Button>
			</ButtonContainer>
		</Container>
	);
};

export default ApplicationFormCard;
