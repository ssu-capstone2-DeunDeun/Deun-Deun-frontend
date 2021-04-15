import React, { useCallback, useState } from 'react';
import { Header, Container, AddQuestionButton, DeleteQuestionButton, ButtonContainer } from 'pages/MyPage/styles';
import AddQuestionModal from 'components/AddQuestionModal';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { IconButton } from '@material-ui/core';

const MyPage = () => {
	const [showAddQuestionModal, setShowAddQuestionModal] = useState(false);

	const onClickAddQuestion = useCallback(() => {
		setShowAddQuestionModal(true);
	}, []);

	const onClickDeleteQuestion = useCallback(() => {
		console.log('delete question');
	}, []);

	const onCloseModal = useCallback(() => {
		setShowAddQuestionModal(false);
	});

	return (
		//
		<Container>
			<Header>지원서 양식 생성</Header>
			<ButtonContainer>
				{/* <AddQuestionButton onClick={onClickAddQuestion}>+</AddQuestionButton> */}
				<IconButton onClick={onClickAddQuestion}>
					<AddCircleOutlineIcon />
				</IconButton>
			</ButtonContainer>
			<AddQuestionModal show={showAddQuestionModal} onCloseModal={onCloseModal} />
		</Container>
	);
};

export default MyPage;
