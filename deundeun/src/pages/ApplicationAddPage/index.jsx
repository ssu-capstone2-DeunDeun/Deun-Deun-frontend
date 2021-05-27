import DropdownMenu from 'components/common/DropdownMenu';
import { TitleKorean } from 'pages/RecruitAddPage/styles';
import React, { useCallback, useEffect, useState } from 'react';
import { ContainerColumn, ContainerPage, ContainerRow } from 'styles';
import {
	AddQuestionButton,
	AddSelectionButton,
	AnswerNumber,
	ApplicationTitleInput,
	InnerContainer,
	SubmitButton,
	Header
} from './styles';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import QuestionCard from 'components/common/QuestionCard/index';
const ApplicationAddPage = ({ setAddNewForm }) => {
	const [questionIndex, setQuestionIndex] = useState(2);
	const [questionList, setQuestionList] = useState([
		{
			index: 1
		}
	]);

	const onClickAddQuestion = () => {
		setQuestionIndex(questionIndex + 1);
		updateQuestion();
	};

	const onDeleteQuestion = (e) => {
		console.log(e.target.id);
	};

	const updateQuestion = () => {
		setQuestionList([...questionList, { index: questionIndex }]);
	};

	useEffect(() => {
		return () => setAddNewForm(false);
	}, []);

	return (
		//
		<ContainerPage style={{ width: '1166px', minHeight: '130vh' }}>
			<ContainerColumn>
				<Header>새 지원서 추가하기</Header>
				<TitleKorean>제목</TitleKorean>
				<ApplicationTitleInput placeholder="제목을 입력해주세요."></ApplicationTitleInput>
			</ContainerColumn>
			<ContainerColumn>
				<TitleKorean style={{ marginBottom: '1em' }}>질문</TitleKorean>
				{/* <QuestionCard questionIndex={questionIndex} /> */}
				{Object.keys(questionList).map((key) => (
					<QuestionCard key={key} index={questionList[key].index} onDeleteQuestion={onDeleteQuestion} />
				))}
				<AddQuestionButton>
					<InnerContainer onClick={onClickAddQuestion}>
						<AddCircleOutlineIcon style={{ marginRight: '0.5em' }} />
						질문 추가하기
					</InnerContainer>
				</AddQuestionButton>
				<SubmitButton>지원서 등록하기</SubmitButton>
			</ContainerColumn>
		</ContainerPage>
	);
};

export default ApplicationAddPage;
