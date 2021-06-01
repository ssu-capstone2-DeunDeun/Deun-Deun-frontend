import React, { useState } from 'react';
import { useEffect } from 'react';
import { ContainerColumn, ContainerRow } from 'styles';
import AnswerCard from '../AnswerCard/index';
import DropdownMenu from '../DropdownMenu/index';
import { DropdownContainer, QuestionInput, QuestionNumber, QuestionDeleteButton } from './styles';

const QuestionCard = ({ index, onDeleteQuestion, setQuestionTypeIdx }) => {
	const [questionTypeIndex, setQuestionTypeIndex] = useState(0);
	const [answerTypeIndex, setAnswerTypeIndex] = useState(0);

	const questionTypes = ['주관식', '선다형'];
	const answerTypes = ['단일 선택', '복수 선택'];

	useEffect(() => {
		const question = {
			multipleChoiceRequestDtos: [],
			questionContent: "",
			questionType: "",
		}
		const title = document.getElementById("questionTitle");

		if (questionTypeIndex === 0) {   //주관식
			question.questionContent = title.value;
		}
		else {  //객관식
			question.questionContent = title.value;
			if (answerTypeIndex === 0) {
				question.questionType = "SUBJECTIVE"  //단답형
			}
			else {
				question.questionType = "MULTIPLE"  //복수형
			}
		}
		console.log("question", question);
	}, [questionTypeIndex, setQuestionTypeIdx, answerTypeIndex]);

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
						<QuestionInput id="questionTitle" placeholder="질문을 입력해주세요."></QuestionInput>
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
