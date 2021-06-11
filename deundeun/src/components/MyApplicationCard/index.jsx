import React, { useCallback } from 'react';
import { Container, ApplicationTitle, ClubName, ButtonContainer, Button } from './styles';

const MyApplicationCard = () => {
	const onClickDetailButton = useCallback((e) => {
		console.log('application detail');
	}, []);

	const onClickResultButton = useCallback((e) => {
		console.log('application result');
	}, []);

	return (
		//
		<Container>
			<ApplicationTitle>[3기] 야! 너도 트와이스 할 수 있어!</ApplicationTitle>
			<ClubName>IT동아리 트와이스</ClubName>
			<ButtonContainer>
				<Button onClick={onClickDetailButton} style={{ marginRight: '1.23em' }}>
					지원 내역
				</Button>
				<Button onClick={onClickResultButton}>지원 결과</Button>
			</ButtonContainer>
		</Container>
	);
};

export default MyApplicationCard;
