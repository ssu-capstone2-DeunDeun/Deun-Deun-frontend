import React, { useCallback, useState } from 'react';
import { ContainerRow } from 'styles';
import { QuestionNumber } from '../QuestionCard/styles';
import { AnswerContainer, ChoiceInput, ChoiceAddButton, ChoiceDeleteButton, Add } from './styles';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import { useEffect } from 'react';
import { addChoice, deleteChoice, modifyChoice } from 'modules/applicationAddInfo';
import { useDispatch } from 'react-redux';
const AnswerCard = ({ id }) => {
	const dispatch = useDispatch();
	const [choiceIndex, setChoiceIndex] = useState(2);
	const [deleteError, setDeleteError] = useState(false);
	const [choiceList, setChoiceList] = useState([
		{
			choiceNumber: 1,
			choiceContent: ''
		}
	]);

	const onAddChoice = useCallback(
		(e) => {
			const newChoice = {
				choiceNumber: choiceIndex,
				choiceContent: ''
			};
			setChoiceList(choiceList.concat(newChoice));
			dispatch(addChoice(e.target.id, choiceIndex));
			setChoiceIndex(choiceIndex + 1);
		},
		[choiceList, choiceIndex, dispatch]
	);

	const onDeleteChoice = useCallback((e) => {}, [choiceList]);

	const onCloseSnackbar = useCallback(() => {
		setDeleteError(false);
	}, []);

	useEffect(() => {}, []);
	return (
		//
		<>
			<ContainerRow style={{ marginBottom: '0.6em' }}>
				<QuestionNumber>A</QuestionNumber>
				<AnswerContainer>
					{choiceList.map((choice) => (
						<div key={choice.choiceNumber}>
							<ContainerRow style={{ marginBottom: '0.6em' }}>
								<ChoiceInput
									id={id}
									placeholder="선택지를 입력해주세요."
									onChange={(e) => {
										dispatch(modifyChoice(e.target.id, choice.choiceNumber, e.target.value));
									}}
								></ChoiceInput>
								<ChoiceDeleteButton
									id={id}
									className={choice.choiceNumber}
									onClick={(e) => {
										if (choiceList.length === 1) {
											setDeleteError(true);
											return;
										} else {
											const deleteIndex = parseInt(e.target.className.slice(0, 1));
											setChoiceList(choiceList.filter((choice) => choice.choiceNumber !== deleteIndex));
											dispatch(deleteChoice(e.target.id, choice.choiceNumber));
										}
									}}
								>
									&times;
								</ChoiceDeleteButton>
							</ContainerRow>
						</div>
					))}
					<ChoiceAddButton>
						<Add id={id} onClick={onAddChoice}>
							+ 선택지 추가하기
						</Add>
					</ChoiceAddButton>
				</AnswerContainer>
				<Snackbar open={deleteError} autoHideDuration={1000} onClose={onCloseSnackbar}>
					<Alert onClose={onCloseSnackbar} severity="error">
						하나 이상의 선택지가 필요합니다.
					</Alert>
				</Snackbar>
			</ContainerRow>
		</>
	);
};

export default AnswerCard;
