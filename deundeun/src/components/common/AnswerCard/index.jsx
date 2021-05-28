import React, { useCallback, useState } from 'react';
import { ContainerRow } from 'styles';
import { QuestionNumber } from '../QuestionCard/styles';
import { AnswerContainer, ChoiceInput, ChoiceAddButton, ChoiceDeleteButton, Add } from './styles';

const AnswerCard = ({ key }) => {
	const [choiceIndex, setChoiceIndex] = useState(2);
	const [choiceList, setChoiceList] = useState([
		{
			index: 1
		}
	]);

	const onAddChoice = useCallback(() => {
		const newChoice = {
			index: choiceIndex
		};
		setChoiceList(choiceList.concat(newChoice));
		setChoiceIndex(choiceIndex + 1);
	}, [choiceList, choiceIndex]);

	const onDeleteChoice = useCallback(
		(e) => {
			if (choiceList.length === 1) return;
			setChoiceList(choiceList.filter((choice) => choice.index !== parseInt(e.target.id)));
		},
		[choiceList]
	);

	return (
		//
		<>
			<ContainerRow style={{ marginBottom: '0.6em' }}>
				<QuestionNumber>A</QuestionNumber>
				<AnswerContainer>
					{/* {Object.keys(choiceList).map((key) => (
						<div key={key}>
							<ContainerRow style={{ marginBottom: '0.6em' }}>
								<ChoiceInput placeholder="선택지를 입력해주세요."></ChoiceInput>
								<ChoiceDeleteButton id={choiceList[key].index} onClick={onDeleteChoice}>
									&times;
								</ChoiceDeleteButton>
							</ContainerRow>
						</div>
					))} */}
					{choiceList.map((choice) => (
						<div key={choice.index}>
							<ContainerRow style={{ marginBottom: '0.6em' }}>
								<ChoiceInput placeholder="선택지를 입력해주세요."></ChoiceInput>
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
			</ContainerRow>
		</>
	);
};

export default AnswerCard;
