import React, { useCallback, useState } from 'react';
import { ContainerRow } from 'styles';
import { QuestionNumber } from '../QuestionCard/styles';
import { AnswerContainer, ChoiceInput, ChoiceAddButton, ChoiceDeleteButton, Add } from './styles';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import { useEffect } from 'react';
const AnswerCard = () => {
	const [choiceIndex, setChoiceIndex] = useState(2);
	const [deleteError, setDeleteError] = useState(false);
	const [choiceList, setChoiceList] = useState([
		{
			choiceNumber: 1,
			choiceContent: "",
		}
	]);

	const onAddChoice = useCallback(() => {
		const value = document.getElementById("choiceValue");

		const newChoice = {
			choiceNumber: choiceIndex,
			choiceContnetL: value,
		};
		setChoiceList(choiceList.concat(newChoice));
		setChoiceIndex(choiceIndex + 1);
	}, [choiceList, choiceIndex]);

	const onDeleteChoice = useCallback(
		(e) => {
			if (choiceList.length === 1) {
				setDeleteError(true);
				return;
			}
			setChoiceList(choiceList.filter((choice) => choice.index !== parseInt(e.target.id)));
		},
		[choiceList]
	);

	const onCloseSnackbar = useCallback(() => {
		setDeleteError(false);
	}, []);


	useEffect(() => {

	}, []);
	return (
		//
		<>
			<ContainerRow style={{ marginBottom: '0.6em' }}>
				<QuestionNumber>A</QuestionNumber>
				<AnswerContainer>
					{choiceList.map((choice) => (
						<div key={choice.index}>
							<ContainerRow style={{ marginBottom: '0.6em' }}>
								<ChoiceInput id="choiceValue" placeholder="선택지를 입력해주세요."></ChoiceInput>
								<ChoiceDeleteButton id={choice.index} onClick={onDeleteChoice}>
									&times;
								</ChoiceDeleteButton>
							</ContainerRow>
						</div>
					))}
					<ChoiceAddButton>
						<Add onClick={onAddChoice}>+ 선택지 추가하기</Add>
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
