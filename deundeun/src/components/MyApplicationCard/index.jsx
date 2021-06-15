import React, { useCallback } from 'react';
import { useHistory } from 'react-router';
import { Container, ApplicationTitle, ClubName, ButtonContainer, Button } from './styles';

const MyApplicationCard = ({ id, title, clubName }) => {
	const history = useHistory();
	const onClickDetailButton = useCallback(
		(e) => {
			console.log('application detail');
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
			<ApplicationTitle>{title}</ApplicationTitle>
			<ClubName>{clubName}</ClubName>
			<ButtonContainer>
				<Button onClick={onClickDetailButton} style={{ marginRight: '1.23em' }}>
					지원서 보기
				</Button>
				<Button onClick={onClickResultButton}>지원 결과</Button>
			</ButtonContainer>
		</Container>
	);
};

export default MyApplicationCard;
