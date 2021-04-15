import React, { useCallback, useState } from 'react';
import { Header, Container, AddQuestionButton, DeleteQuestionButton, ButtonContainer } from 'pages/MyPage/styles';
import AddQuestionModal from 'components/AddQuestionModal';
import { IconButton, Tooltip } from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import DeleteIcon from '@material-ui/icons/Delete';
import { withStyles } from '@material-ui/core/styles';

const MyPage = () => {
	const BiggerTooltip = withStyles((theme) => ({
		tooltip: {
			fontSize: 13
		}
	}))(Tooltip);

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
				<BiggerTooltip title="지원서 양식 추가" placement="top">
					<IconButton onClick={onClickAddQuestion}>
						<AddCircleOutlineIcon />
					</IconButton>
				</BiggerTooltip>
				<BiggerTooltip title="지원서 양식 삭제" placement="top">
					<IconButton onClick={onClickDeleteQuestion}>
						<DeleteIcon />
					</IconButton>
				</BiggerTooltip>
			</ButtonContainer>
			<AddQuestionModal show={showAddQuestionModal} onCloseModal={onCloseModal} />
		</Container>
	);
};

export default MyPage;
