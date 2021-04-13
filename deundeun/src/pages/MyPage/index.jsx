import React, { useCallback } from 'react';
import { Header, Container, AddQuestionButton, DeleteQuestionButton, ButtonContainer } from 'pages/MyPage/styles';

const MyPage = () => {
	const onClickAddQuestion = useCallback(() => {
		console.log('add question');
	}, []);

	const onClickDeleteQuestion = useCallback(() => {
		console.log('delete question');
	}, []);

	return (
		//
		<Container>
			<Header>지원서 양식 생성</Header>
			<ButtonContainer>
				<AddQuestionButton onClick={onClickAddQuestion}>+</AddQuestionButton>
				<DeleteQuestionButton onClick={onClickDeleteQuestion}>-</DeleteQuestionButton>
			</ButtonContainer>
		</Container>
	);
};

export default MyPage;
