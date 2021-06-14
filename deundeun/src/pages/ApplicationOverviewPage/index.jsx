import LoadingSpinner from 'components/common/LoadingSpinner/index';
import { API_BASE_URL, ACCESS_TOKEN } from 'constants/index';
import { ApplicationTitleInput, Header } from 'pages/ApplicationAddPage/styles';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { ContainerColumn, ContainerPage } from 'styles';
import { SpinnerContainer } from './styles';
import axios from '../../../node_modules/axios/index';
import { TitleKorean } from 'pages/RecruitAddPage/styles';
import QuestionList from 'components/QuestionList/index';

const ApplicationOverviewPage = () => {
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
			console.log(res.data);
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
							<Header>지원서 양식 미리보기</Header>
							<TitleKorean>제목</TitleKorean>
							<ApplicationTitleInput
								type="text"
								id="title"
								name="title"
								value={title ? title : ''}
								readOnly
							></ApplicationTitleInput>
							<TitleKorean style={{ marginBottom: '2em', marginTop: '2em' }}>질문</TitleKorean>
							<QuestionList questionList={questionList} />
						</ContainerColumn>
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

export default ApplicationOverviewPage;
