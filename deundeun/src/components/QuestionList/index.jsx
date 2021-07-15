import { Add, ChoiceAddButton, ChoiceDeleteButton, ChoiceInput } from 'components/common/AnswerCard/styles';
// import QuestionCard from 'components/common/QuestionCard/index';
import { QuestionDeleteButton, QuestionInput, QuestionNumber } from 'components/common/QuestionCard/styles';
// import { modifyQuestionContent } from 'modules/applicationModifyInfo';
import { DropdownContainer } from 'pages/ApplicationAddPage/styles';
import React from 'react';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { ContainerColumn, ContainerRow } from 'styles';

const QuestionList = ({ questionList, handleDeleteQuestion, handleAddChoice, handleDeleteChoice }) => {
	const dispatch = useDispatch();

	const handleQuestionChange = useCallback(
		(e) => {
			// dispatch(modifyQuestionContent(e.target.id, e.target.value));
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
							<QuestionDeleteButton
								style={{ marginLeft: '-0.01em' }}
								id={question.questionNumber}
								onClick={handleDeleteQuestion}
							>
								&times;
							</QuestionDeleteButton>
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
							<QuestionDeleteButton
								style={{ marginLeft: '-0.01em' }}
								id={question.questionNumber}
								onClick={handleDeleteQuestion}
							>
								&times;
							</QuestionDeleteButton>
						</ContainerRow>
						<ContainerRow style={{ marginBottom: '2em' }}>
							<QuestionNumber>A</QuestionNumber>
							<ContainerColumn>
								{question.multipleChoiceResponseDtos.map((choice) => (
									<div key={choice.choiceNumber}>
										<ContainerRow>
											<ChoiceInput
												// id={choice.choiceNumber}
												type="text"
												style={{ width: '1167px', height: '60px', marginBottom: '0.6em' }}
												value={choice.choiceContent}
												onChange={handleChoiceChange}
											/>
											<ChoiceDeleteButton id={choice.choiceNumber} onClick={handleDeleteChoice}>
												&times;
											</ChoiceDeleteButton>
										</ContainerRow>
									</div>
								))}
								<ChoiceAddButton>
									<Add id={question.questionNumber} onClick={handleAddChoice}>
										+ 선택지 추가하기
									</Add>
								</ChoiceAddButton>
							</ContainerColumn>
						</ContainerRow>
					</div>
				)
			)}
		</>
	);
};

export default QuestionList;
