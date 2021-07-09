import QuestionCard from 'components/common/QuestionCard/index';
import { QuestionInput, QuestionNumber } from 'components/common/QuestionCard/styles';
import { modifyQuestionContent } from 'modules/applicationModifyInfo';
import { DropdownContainer } from 'pages/ApplicationAddPage/styles';
import React, { useRef } from 'react';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { ContainerColumn, ContainerRow } from 'styles';

const QuestionList = ({ questionList }) => {
	const dispatch = useDispatch();
	const subjectiveQuestionRef = useRef();
	const selectiveQuestionRef = useRef();
	const choiceRef = useRef();

	const handleQuestionChange = useCallback(
		(e) => {
			dispatch(modifyQuestionContent(e.target.id, e.target.value));
		},
		[dispatch]
	);

	const handleChoiceChange = useCallback((e) => {}, []);

	return (
		//
		<>
			{questionList.map((question) =>
				question.questionType === 'SUBJECTIVE' ? (
					<div key={question.questionNumber}>
						<ContainerRow style={{ marginBottom: '2em', height: '60px' }}>
							<QuestionNumber>Q</QuestionNumber>
							<DropdownContainer>주관식</DropdownContainer>
							<QuestionInput
								type="text"
								id={question.questionNumber}
								// ref={subjectiveQuestionRef}
								value={question.questionContent}
								// placeholder={question.questionContent}
								onChange={handleQuestionChange}
							></QuestionInput>
						</ContainerRow>
					</div>
				) : (
					<div key={question.questionNumber}>
						<ContainerRow style={{ marginBottom: '0.6em', height: '60px' }}>
							<QuestionNumber>Q</QuestionNumber>
							<DropdownContainer>선다형</DropdownContainer>
							<QuestionInput
								type="text"
								id={question.questionNumber}
								value={question.questionContent}
								onChange={handleQuestionChange}
							></QuestionInput>
						</ContainerRow>
						<ContainerRow style={{ marginBottom: '2em' }}>
							<QuestionNumber>A</QuestionNumber>
							<ContainerColumn>
								{question.multipleChoiceResponseDtos.map((choice) => (
									<QuestionInput
										key={choice.choiceNumber}
										// id={choice.choiceNumber}
										type="text"
										style={{ width: '1167px', height: '60px', marginBottom: '0.6em' }}
										value={choice.choiceContent}
										onChange={handleChoiceChange}
									/>
								))}
							</ContainerColumn>
						</ContainerRow>
					</div>
				)
			)}
		</>
	);
};

export default QuestionList;
