import React, { useCallback } from 'react';
import { useHistory } from 'react-router';
import { Container, ApplicationTitle, ClubName, ButtonContainer, Button } from './styles';

const MyApplicationCard = ({ id, title, clubName }) => {
	const history = useHistory();
	const onClickTitle = useCallback(
		(e) => {
			history.push(`/apply/${clubName}/${id}`);
		},
		[history, id, clubName]
	);

	const onClickDetailButton = useCallback(
		(e) => {
			history.push(`/apply/${clubName}/${id}`);
		},
		[history, id, clubName]
	);

	const onClickResultButton = useCallback((e) => {
		console.log('application result');
	}, []);

	return (
		//
		<Container>
			<ApplicationTitle onClick={onClickTitle}>{title}</ApplicationTitle>
			<ClubName>{clubName}</ClubName>
			<ButtonContainer>
				<Button onClick={onClickDetailButton} style={{ marginRight: '1.23em' }}>
					지원서 수정
				</Button>
				<Button onClick={onClickResultButton}>지원 결과</Button>
			</ButtonContainer>
		</Container>
	);
};

export default MyApplicationCard;
