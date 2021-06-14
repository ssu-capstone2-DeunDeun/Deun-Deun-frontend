import QuestionCard from 'components/common/QuestionCard/index';
import { QuestionInput, QuestionNumber } from 'components/common/QuestionCard/styles';
import { DropdownContainer } from 'pages/ApplicationAddPage/styles';
import React from 'react';
import { ContainerColumn, ContainerRow } from 'styles';

const QuestionList = ({ questionList }) => {
	return (
		//
		<>
			{questionList.map((question) =>
				question.questionType === 'SUBJECTIVE' ? (
					<div key={question.questionNumber}>
						<ContainerRow style={{ marginBottom: '2em', height: '60px' }}>
							<QuestionNumber>Q</QuestionNumber>
							<DropdownContainer>주관식</DropdownContainer>
							<QuestionInput readOnly value={question.questionContent}></QuestionInput>
						</ContainerRow>
					</div>
				) : (
					<div key={question.questionNumber}>
						<ContainerRow style={{ marginBottom: '0.6em', height: '60px' }}>
							<QuestionNumber>Q</QuestionNumber>
							<DropdownContainer>선다형</DropdownContainer>
							<QuestionInput readOnly value={question.questionContent}></QuestionInput>
						</ContainerRow>
						<ContainerRow style={{ marginBottom: '2em' }}>
							<QuestionNumber>A</QuestionNumber>
							<ContainerColumn>
								{question.multipleChoiceResponseDtos.map((choice) => (
									<QuestionInput
										style={{ width: '1167px', height: '60px', marginBottom: '0.6em' }}
										readOnly
										value={choice.choiceContent}
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
