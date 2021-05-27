import React, { useCallback, useState } from 'react';
import { ContainerRow } from 'styles';
import { QuestionNumber } from '../QuestionCard/styles';
import { AnswerContainer, ChoiceInput, ChoiceAddButton, ChoiceDeleteButton, Add } from './styles';

const AnswerCard = ({ index }) => {
	const [choiceIndex, setChoiceIndex] = useState(2);
	const [choiceList, setChoiceList] = useState([
		{
			index: 1
		}
	]);

	const onAddChoice = () => {
		setChoiceIndex(choiceIndex + 1);
		setChoiceList([...choiceList, { index: choiceIndex }]);
	};

	const onDeleteChoice = (e) => {
		if (e.target.id < 2) return;
		setChoiceList(choiceList.filter((choice) => choice.index !== Number(e.target.id)));
	};

	return (
		//
		<>
			<ContainerRow style={{ marginBottom: '0.6em' }}>
				<QuestionNumber>A{index}</QuestionNumber>
				<AnswerContainer>
					{Object.keys(choiceList).map((key) => (
						<div key={key}>
							<ContainerRow style={{ marginBottom: '0.6em' }}>
								<ChoiceInput placeholder="선택지를 입력해주세요."></ChoiceInput>
								<ChoiceDeleteButton id={choiceList[key].index} onClick={onDeleteChoice}>
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
