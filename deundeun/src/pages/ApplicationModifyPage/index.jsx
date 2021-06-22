import LoadingSpinner from 'components/common/LoadingSpinner/index';
import { API_BASE_URL, ACCESS_TOKEN } from 'constants/index';
import { ApplicationTitleInput, Header, SubmitButton } from 'pages/ApplicationAddPage/styles';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { ContainerColumn, ContainerPage } from 'styles';
import { SpinnerContainer } from './styles';
import axios from '../../../node_modules/axios/index';
import { TitleKorean } from 'pages/RecruitAddPage/styles';
import QuestionList from 'components/QuestionList/index';
import { Footer } from 'components/PostSection/styles';

const ApplicationModifyPage = () => {
	const { clubName, id } = useParams();
	const [questionList, setQuestionList] = useState(null);
	const [loading, setLoading] = useState(true);
	const [title, setTitle] = useState('');

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
			setLoading(false);
		});
	}, []);

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
							></ApplicationTitleInput>
							<TitleKorean style={{ marginBottom: '2em', marginTop: '2em' }}>질문</TitleKorean>
							<QuestionList questionList={questionList} />
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
