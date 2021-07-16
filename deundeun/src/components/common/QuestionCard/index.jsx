import React, { useState } from 'react';
import { useEffect } from 'react';
import { ContainerColumn, ContainerRow } from 'styles';
import AnswerCard from '../AnswerCard/index';
import DropdownMenu from '../DropdownMenu/index';
import DropdownMenuId from '../DropdownMenuId/index';
import { DropdownContainer, QuestionInput, QuestionNumber, QuestionDeleteButton } from './styles';

const QuestionCard = ({ index, onDeleteQuestion, setQuestionTypeIdx, onChangeQuestionInput, onChangeQuestionType }) => {
	const [questionTypeIndex, setQuestionTypeIndex] = useState(0);
	const [answerTypeIndex, setAnswerTypeIndex] = useState(0);

	const questionTypes = ['주관식', '선다형'];
	const answerTypes = ['단일 선택', '복수 선택'];

	return (
		//
		<div style={{ marginBottom: '2em' }}>
			<ContainerRow style={{ marginBottom: '0.6em', height: '60px' }}>
				<QuestionNumber>Q</QuestionNumber>
				<DropdownContainer>
					{`${questionTypes[questionTypeIndex]}`}
					<DropdownMenuId
						id={index}
						options={questionTypes}
						selectedIndex={questionTypeIndex}
						setSelectedIndex={setQuestionTypeIndex}
						onChangeItem={onChangeQuestionType}
					></DropdownMenuId>
				</DropdownContainer>
				{questionTypeIndex === 0 ? (
					<>
						<QuestionInput
							onChange={onChangeQuestionInput}
							id={index}
							name="questionContent"
							placeholder="질문을 입력해주세요."
						></QuestionInput>
						<QuestionDeleteButton id={index} onClick={onDeleteQuestion}>
							&times;
						</QuestionDeleteButton>
					</>
				) : (
					<>
						<QuestionInput id={index} placeholder="질문을 입력해주세요." onChange={onChangeQuestionInput} />
						<QuestionDeleteButton id={index} onClick={onDeleteQuestion}>
							&times;
						</QuestionDeleteButton>
					</>
				)}
			</ContainerRow>
			{questionTypeIndex === 1 && <AnswerCard id={index} />}
		</div>
	);
};

export default QuestionCard;
