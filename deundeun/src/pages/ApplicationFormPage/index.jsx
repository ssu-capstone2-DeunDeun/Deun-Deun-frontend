import React, { useCallback, useState } from 'react';
import { Header, Container, ButtonContainer } from 'pages/ApplicationFormPage/styles';
import AddQuestionModal from 'components/AddQuestionModal';
import { IconButton, Tooltip } from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import DeleteIcon from '@material-ui/icons/Delete';
import { withStyles } from '@material-ui/core/styles';

const MyPage = () => {
	const LargerTooltip = withStyles((theme) => ({
		tooltip: {
			fontSize: 13
		}
	}))(Tooltip);

	const [showAddQuestionModal, setShowAddQuestionModal] = useState(false);

	const onClickAddApplication = useCallback(() => {
		setShowAddQuestionModal(true);
	}, []);

	const onClickDeleteApplication = useCallback(() => {
		console.log('delete application');
	}, []);

	const onCloseModal = useCallback(() => {
		setShowAddQuestionModal(false);
	});

	return (
		//
		<Container>
			<Header>지원서 양식 생성</Header>
			<ButtonContainer>
				<LargerTooltip title="지원서 양식 생성" placement="top">
					<IconButton onClick={onClickAddApplication}>
						<AddCircleOutlineIcon />
					</IconButton>
				</LargerTooltip>
				<LargerTooltip title="지원서 양식 삭제" placement="top">
					<IconButton onClick={onClickDeleteApplication}>
						<DeleteIcon />
					</IconButton>
				</LargerTooltip>
			</ButtonContainer>
			<AddQuestionModal show={showAddQuestionModal} onCloseModal={onCloseModal} />
		</Container>
	);
};

export default MyPage;
