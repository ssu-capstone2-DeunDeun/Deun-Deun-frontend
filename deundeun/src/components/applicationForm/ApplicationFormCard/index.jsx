import React, { useCallback } from 'react';
import { ButtonContainer, Button } from 'components/MyApplicationCard/styles';
import { ApplicationDetail, ApplicationTitle, Container, Divider } from './styles';
import { useHistory } from 'react-router';
const ApplicationFormCard = ({ id, title, clubName, onDeleteApplication }) => {
	const history = useHistory();

	const onClickApplication = useCallback(
		(e) => {
			console.log(e.target.id);
			history.push(`/club/manage/application/${id}`);
		},
		[history, id]
	);

	const onModify = (e) => {
		history.push(`/club/manage/application/modify/${id}/`);
	};

	return (
		//
		<Container>
			<ApplicationTitle style={{ cursor: 'pointer' }} id={id} onClick={onClickApplication}>
				{title}
			</ApplicationTitle>
			<Divider />
			<ApplicationDetail>{clubName}</ApplicationDetail>
			<ButtonContainer>
				<Button onClick={onModify} style={{ marginRight: '16px' }}>
					수정하기
				</Button>
				<Button id={id} onClick={onDeleteApplication}>
					삭제하기
				</Button>
			</ButtonContainer>
		</Container>
	);
};

export default ApplicationFormCard;
