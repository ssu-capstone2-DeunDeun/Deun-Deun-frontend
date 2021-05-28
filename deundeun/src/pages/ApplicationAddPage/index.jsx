import { TitleKorean } from 'pages/RecruitAddPage/styles';
import React, { useCallback, useEffect, useState } from 'react';
import { ContainerColumn, ContainerPage } from 'styles';
import { AddQuestionButton, ApplicationTitleInput, InnerContainer, SubmitButton, Header, Error } from './styles';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import QuestionCard from 'components/common/QuestionCard/index';
import { useHistory } from 'react-router';
const ApplicationAddPage = ({ setAddNewForm }) => {
	const history = useHistory();
	const [title, setTitle] = useState('');
	// const [titleError, setTitleError] = useState(false);
	const [submitError, setSubmitError] = useState(false);
	const [questionIndex, setQuestionIndex] = useState(2);
	const [questionList, setQuestionList] = useState([
		{
			index: 1
		}
	]);

	const onSubmit = useCallback(() => {
		console.log('application submit');
		history.push('/apply/success');
	}, [history]);

	const onClickAddQuestion = () => {
		setQuestionIndex(questionIndex + 1);
		updateQuestion();
	};

	const onDeleteQuestion = (e) => {
		if (questionList.length === 1) return;
		setQuestionList(questionList.filter((question) => question.index !== Number(e.target.id)));
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
			<form onSubmit={onSubmit}>
				<ContainerColumn style={{ marginBottom: '3em' }}>
					<Header>새 지원서 추가하기</Header>
					<TitleKorean>제목</TitleKorean>
					<ApplicationTitleInput
						type="text"
						id="title"
						name="title"
						onChange={setTitle}
						placeholder="제목을 입력해주세요."
					></ApplicationTitleInput>
					{!title && <Error>* 제목은 필수 입력 항목입니다.</Error>}
				</ContainerColumn>
				<ContainerColumn>
					<TitleKorean style={{ marginBottom: '1em' }}>질문</TitleKorean>
					{Object.keys(questionList).map((key) => (
						<QuestionCard key={key} index={questionList[key].index} onDeleteQuestion={onDeleteQuestion} />
					))}
					<AddQuestionButton>
						<InnerContainer onClick={onClickAddQuestion}>
							<AddCircleOutlineIcon style={{ marginRight: '0.5em' }} />
							질문 추가하기
						</InnerContainer>
					</AddQuestionButton>
					<SubmitButton type="submit">지원서 등록하기</SubmitButton>
				</ContainerColumn>
			</form>
		</ContainerPage>
	);
};

export default ApplicationAddPage;
