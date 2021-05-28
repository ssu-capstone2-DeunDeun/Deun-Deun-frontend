import React, { useState } from 'react';
import { ContainerColumn, ContainerRow } from 'styles';
import AnswerCard from '../AnswerCard/index';
import DropdownMenu from '../DropdownMenu/index';
import { DropdownContainer, QuestionInput, QuestionNumber, QuestionDeleteButton } from './styles';

const QuestionCard = ({ index, onDeleteQuestion }) => {
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
					<DropdownMenu
						options={questionTypes}
						selectedIndex={questionTypeIndex}
						setSelectedIndex={setQuestionTypeIndex}
					></DropdownMenu>
				</DropdownContainer>
				{questionTypeIndex === 0 ? (
					<>
						<QuestionInput placeholder="질문을 입력해주세요."></QuestionInput>
						<QuestionDeleteButton id={index} onClick={onDeleteQuestion}>
							&times;
						</QuestionDeleteButton>
					</>
				) : (
					<>
						<DropdownContainer style={{ width: '138px' }}>
							{`${answerTypes[answerTypeIndex]}`}
							<DropdownMenu
								options={answerTypes}
								selectedIndex={answerTypeIndex}
								setSelectedIndex={setAnswerTypeIndex}
							></DropdownMenu>
						</DropdownContainer>
						<QuestionInput className="small" placeholder="질문을 입력해주세요." />
						<QuestionDeleteButton id={index} onClick={onDeleteQuestion}>
							&times;
						</QuestionDeleteButton>
					</>
				)}
			</ContainerRow>
			{questionTypeIndex === 1 && <AnswerCard />}
		</div>
	);
};

export default QuestionCard;
