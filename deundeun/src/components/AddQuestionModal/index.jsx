import { IconButton, Tooltip } from '@material-ui/core';
import Modal from 'components/Modal';
import React, { useCallback } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Label, TooltipContainer } from './styles';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

const AddQuestionModal = ({ show, onCloseModal }) => {
	const BiggerTooltip = withStyles((theme) => ({
		tooltip: {
			fontSize: 13
		}
	}))(Tooltip);

	const onClickAddQuestionButton = useCallback((e) => {
		e.preventDefault();
	}, []);
	return (
		//
		<Modal show={show} onCloseModal={onCloseModal}>
			<TooltipContainer>
				<BiggerTooltip title="질문 추가" placement="top">
					<IconButton onClick={onClickAddQuestionButton}>
						<AddCircleOutlineIcon />
					</IconButton>
				</BiggerTooltip>
			</TooltipContainer>
		</Modal>
	);
};

export default AddQuestionModal;
