import { IconButton, Tooltip } from '@material-ui/core';
import Modal from 'components/Modal';
import React, { useCallback, useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { TooltipContainer } from './styles';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import DeleteIcon from '@material-ui/icons/Delete';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import ShortTextIcon from '@material-ui/icons/ShortText';
import SubjectIcon from '@material-ui/icons/Subject';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import QuestionForm from 'components/QuestionForm';
import SaveAltIcon from '@material-ui/icons/SaveAlt';

const StyledMenu = withStyles({
	paper: {
		border: '1px solid #d3d4d5'
	}
})((props) => (
	<Menu
		elevation={0}
		getContentAnchorEl={null}
		anchorOrigin={{
			vertical: 'bottom',
			horizontal: 'center'
		}}
		transformOrigin={{
			vertical: 'top',
			horizontal: 'center'
		}}
		{...props}
	/>
));

const LargerTooltip = withStyles((theme) => ({
	tooltip: {
		fontSize: 14
	}
}))(Tooltip);

const AddQuestionModal = ({ show, onCloseModal }) => {
	const [anchorEl, setAnchorEl] = useState(null);

	const onCloseMenu = useCallback((e) => {
		setAnchorEl(null);
	}, []);

	const onClickShortText = useCallback((e) => {
		console.log('short text');
		setAnchorEl(null);
	}, []);

	const onClickLongText = useCallback((e) => {
		console.log('long text');
		setAnchorEl(null);
	}, []);

	const onClickChoice = useCallback((e) => {
		console.log('choice');
		setAnchorEl(null);
	}, []);

	const onClickCheckBox = useCallback((e) => {
		console.log('checkbox');
		setAnchorEl(null);
	}, []);

	const onClickAddQuestionButton = useCallback((e) => {
		setAnchorEl(e.currentTarget);
	}, []);

	const onClickSaveApplication = useCallback((e) => {
		console.log('save application');
	}, []);

	return (
		//
		<Modal show={show} onCloseModal={onCloseModal}>
			<span>새로운 지원서 양식 생성하기</span>
			<TooltipContainer>
				<LargerTooltip title="질문 추가" placement="top">
					<IconButton aria-controls="select-question-type" aria-haspopup="true" onClick={onClickAddQuestionButton}>
						<AddCircleOutlineIcon />
					</IconButton>
				</LargerTooltip>
				<StyledMenu
					id="select-question-type"
					anchorEl={anchorEl}
					keepMounted
					open={Boolean(anchorEl)}
					onClose={onCloseMenu}
				>
					<MenuItem onClick={onClickShortText}>
						<ListItemIcon>
							<ShortTextIcon fontSize="small" />
						</ListItemIcon>
						<ListItemText primary="단답형" />
					</MenuItem>

					<MenuItem onClick={onClickLongText}>
						<ListItemIcon>
							<SubjectIcon fontSize="small" />
						</ListItemIcon>
						<ListItemText primary="장문형" />
					</MenuItem>

					<MenuItem onClick={onClickChoice}>
						<ListItemIcon>
							<RadioButtonCheckedIcon fontSize="small" />
						</ListItemIcon>
						<ListItemText primary="객관식" />
					</MenuItem>
					<MenuItem onClick={onClickCheckBox}>
						<ListItemIcon>
							<CheckBoxIcon fontSize="small" />
						</ListItemIcon>
						<ListItemText primary="체크박스" />
					</MenuItem>
				</StyledMenu>

				<LargerTooltip title="지원서 저장" placement="top">
					<IconButton onClick={onClickSaveApplication}>
						<SaveAltIcon />
					</IconButton>
				</LargerTooltip>
			</TooltipContainer>
			<QuestionForm />
		</Modal>
	);
};

export default AddQuestionModal;
