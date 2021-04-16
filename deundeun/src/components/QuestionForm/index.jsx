import { makeStyles, MenuItem, TextField, withStyles, Tooltip, IconButton } from '@material-ui/core';
import React, { useCallback, useRef, useState } from 'react';
import { ButtonContainer, Form, Divider } from './styles';
import DeleteIcon from '@material-ui/icons/Delete';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import ImageIcon from '@material-ui/icons/Image';

function Alert(props) {
	return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const QuestionForm = () => {
	const [showDeleteErrorToast, setShowDeleteErrorToast] = useState(false);

	const useStyles = makeStyles((theme) => ({
		root: {
			width: '100%',
			'& > * + *': {
				marginTop: theme.spacing(2)
			}
		}
	}));

	// const StyledRadio = withStyles((theme) => ({
	// 	root: {
	// 		position: 'absolute',
	// 		right: '10px',
	// 		top: '6px',
	// 		background: 'transparent',
	// 		cursor: 'pointer'
	// 	}
	// }))(Radio);

	const StyledIconButton = withStyles((theme) => ({
		root: {
			background: 'transparent',
			cursor: 'pointer'
		}
	}))(IconButton);

	const LargerTooltip = withStyles((theme) => ({
		tooltip: {
			fontSize: 13
		}
	}))(Tooltip);

	const nameRef = useRef('');

	const genders = [
		{
			value: 'male',
			label: '남성'
		},
		{
			value: 'female',
			label: '여성'
		}
	];
	const [gender, setGender] = useState('');

	const onChangeGender = useCallback((e) => {
		e.preventDefault();
		setGender(e.target.value);
		console.log(e.target.value);
	}, []);

	const onClickDeleteQuestion = useCallback((e) => {
		e.preventDefault();
		setShowDeleteErrorToast(true);
		console.log('delete question');
	}, []);

	const onCloseDeleteErrorToast = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}

		setShowDeleteErrorToast(false);
	};

	const onClickAddImage = useCallback((e) => {
		e.preventDefault();
		console.log('add image');
	}, []);

	return (
		//
		<Form action="" noValidate autoComplete="off">
			<TextField ref={nameRef} required id="outlined-required" label="이름" variant="outlined" />
			<TextField
				required
				id="outlined-select-currency"
				select
				label="성별"
				value={gender}
				onChange={onChangeGender}
				variant="outlined"
				style={{ width: '80px' }}
			>
				{genders.map((v) => (
					<MenuItem key={v.value} value={v.value}>
						{v.label}
					</MenuItem>
				))}
			</TextField>
			<Divider />
			<ButtonContainer>
				<LargerTooltip title="이미지 첨부" placement="top">
					<StyledIconButton onClick={onClickAddImage}>
						<ImageIcon />
					</StyledIconButton>
				</LargerTooltip>

				<LargerTooltip title="질문 삭제" placement="top">
					<StyledIconButton onClick={onClickDeleteQuestion}>
						<DeleteIcon />
					</StyledIconButton>
				</LargerTooltip>
				<Snackbar open={showDeleteErrorToast} autoHideDuration={600} onClose={onCloseDeleteErrorToast}>
					<Alert onClose={onCloseDeleteErrorToast} severity="error">
						필수 질문은 삭제할 수 없습니다!
					</Alert>
				</Snackbar>
			</ButtonContainer>
		</Form>
	);
};

export default QuestionForm;
