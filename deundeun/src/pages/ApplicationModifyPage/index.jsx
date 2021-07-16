import LoadingSpinner from 'components/common/LoadingSpinner/index';
import { API_BASE_URL, ACCESS_TOKEN } from 'constants/index';
import {
	AddQuestionButton,
	ApplicationTitleInput,
	Error,
	Header,
	InnerContainer,
	SubmitButton
} from 'pages/ApplicationAddPage/styles';
import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { ContainerColumn, ContainerPage } from 'styles';
import { SpinnerContainer } from './styles';
import axios from '../../../node_modules/axios/index';
import { TitleKorean } from 'pages/RecruitAddPage/styles';
import QuestionList from 'components/QuestionList/index';
import { Footer } from 'components/PostSection/styles';
import { changeInput, deleteQuestion, addQuestion } from 'modules/applicationModifyInfo';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { fromJS, List } from 'immutable';
const ApplicationModifyPage = () => {
	const { clubName, id } = useParams();
	const dispatch = useDispatch();
	const [questionList, setQuestionList] = useState(null);
	const [questionIndex, setQuestionIndex] = useState(0);
	const [loading, setLoading] = useState(true);
	const [title, setTitle] = useState('');

	const findNextQuestionIndex = useCallback(() => {
		let largestQuestionNumber = -1;
		let listOfIndex = [];
		if (!loading) {
			for (let i = 0; i < questionList.length; i++) {
				listOfIndex.push(questionList[i].questionNumber);
			}
			largestQuestionNumber = Math.max(...listOfIndex);
		}
		return largestQuestionNumber + 1;
	}, [questionList, loading]);

	const handleTitleChange = useCallback(
		(e) => {
			setTitle(e.target.value);
			dispatch(changeInput({ type: 'title', value: e.target.value }));
		},
		[dispatch]
	);

	const handleAddQuestion = useCallback(
		(e) => {
			if (questionIndex > 0) {
				const newQuestion = {
					questionType: 'SUBJECTIVE',
					questionContent: '',
					questionNumber: questionIndex,
					multipleChoiceResponseDtos: []
				};
				setQuestionList(questionList.concat(newQuestion));
				dispatch(addQuestion(questionIndex, List([]), '', 'SUBJECTIVE'));
				setQuestionIndex(questionIndex + 1);
			}
		},
		[questionIndex, questionList, dispatch]
	);

	const handleAddChoice = useCallback((e) => {}, []);

	const handleDeleteQuestion = useCallback(
		(e) => {
			if (questionList.length === 1) {
				return;
			}
			setQuestionList(questionList.filter((question) => question.questionNumber !== parseInt(e.target.id)));
			dispatch(deleteQuestion(e.target.id));
		},
		[questionList, dispatch]
	);

	const handleDeleteChoice = useCallback((e) => {}, []);

	useEffect(() => {
		axios({
			method: 'get',
			url: `${API_BASE_URL}/clubs/${clubName}/forms/${id}`,
			headers: {
				Authorization: 'Bearer ' + localStorage.getItem(ACCESS_TOKEN)
			}
		}).then((res) => {
			setTitle(res.data.title);
			setQuestionList(res.data.recruitQuestionResponseDtos);
			dispatch(changeInput({ type: 'title', value: res.data.title }));
			dispatch(changeInput({ type: 'applyFormId', value: res.data.applyFormId }));
			dispatch(
				changeInput({ type: 'recruitQuestionResponseDtos', value: fromJS(res.data.recruitQuestionResponseDtos) })
			);

			setLoading(false);
		});
	}, []);

	useEffect(() => {
		setQuestionIndex(findNextQuestionIndex());
	}, [questionList, findNextQuestionIndex]);

	return (
		//
		<>
			{!loading ? (
				<>
					<ContainerPage style={{ width: '1300px' }}>
						<ContainerColumn style={{ marginBottom: '3em' }}>
							<Header>지원서 수정하기</Header>
							<TitleKorean>제목</TitleKorean>
							<ApplicationTitleInput
								type="text"
								id="title"
								name="title"
								value={title ? title : ''}
								onChange={handleTitleChange}
							></ApplicationTitleInput>
							{title === '' && <Error style={{ marginLeft: '0.3em' }}>* 제목은 필수 입력 항목입니다.</Error>}
							<TitleKorean style={{ marginBottom: '2em', marginTop: '2em' }}>질문</TitleKorean>
							<QuestionList
								questionList={questionList}
								handleDeleteQuestion={handleDeleteQuestion}
								handleDeleteChoice={handleDeleteChoice}
							/>
							<AddQuestionButton>
								<InnerContainer onClick={handleAddQuestion}>
									<AddCircleOutlineIcon style={{ marginRight: '0.5em' }} />
									질문 추가하기
								</InnerContainer>
							</AddQuestionButton>
							<SubmitButton>지원서 수정하기</SubmitButton>
						</ContainerColumn>
						<Footer />
					</ContainerPage>
				</>
			) : (
				<>
					<SpinnerContainer>
						<LoadingSpinner size="large" />
					</SpinnerContainer>
				</>
			)}
		</>
	);
};

export default ApplicationModifyPage;
