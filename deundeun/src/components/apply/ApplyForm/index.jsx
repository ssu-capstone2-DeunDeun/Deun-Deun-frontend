import React, { useCallback, useEffect, useState } from 'react';
import { ApplyInfoBox, ButtonBlock, FormContent, RegisterFormBlock, StyledTextarea } from './styles';
import CheckList from '../CheckList/index';
import Button from 'components/common/Button/index';
import { getApplyForms } from 'lib/api/apply';
import LoadingSpinner from 'components/common/LoadingSpinner/index';
import { List } from 'immutable';
import { useHistory, useParams, withRouter } from 'react-router';
import axios from '../../../../node_modules/axios/index';
import { ACCESS_TOKEN, API_BASE_URL } from 'constants/index';

const ApplyForm = ({ match }) => {
	const { clubName, id } = match.params;

	const [apply, setApply] = useState(null);
	const [title, setTitle] = useState(null);
	const [loading, setLoading] = useState(true);
	const [value, setValue] = useState('');
	const [answerList, setAnswerList] = useState(List([]));
	const history = useHistory();

	async function getApply() {
		const response = await getApplyForms(clubName);
		console.log(response.data);
		setTitle(response.data[0].title);
		setApply(response.data[0].recruitQuestionResponseDtos);
	}

	const onChangeTextArea = useCallback(
		(e) => {
			setValue(e.target.value);
			const index = apply.findIndex((question) => question.questionNumber === parseInt(e.target.id));
			console.log(index);
			setAnswerList(answerList.set(index, e.target.value));
		},
		[answerList, apply]
	);

	const onChangeCheckList = (id, text) => {
		const index = apply.findIndex((question) => question.questionNumber === id);
		console.log(index, text);
		setAnswerList(answerList.set(index, text));
	};

	const onSubmit = useCallback(
		(e) => {
			e.preventDefault();
			const data = {
				applyAnswers: answerList.toJS()
			};
			axios({
				method: 'post',
				url: `${API_BASE_URL}/club/recruit/${id}/applies`,
				data: data,
				headers: {
					Authorization: 'Bearer ' + localStorage.getItem(ACCESS_TOKEN)
				}
			}).then((response) => {
				const res = response.data;
				console.log(res);
				history.push('/apply/success');
			});
		},
		[answerList, id, history]
	);

	useEffect(() => {
		console.log(clubName);
		getApply();
	}, []);

	useEffect(() => { }, [answerList]);

	useEffect(() => {
		if (apply) {
			console.log(apply);
			setLoading(false);
			console.log(apply.length);
		}
	}, [apply]);

	return (
		<RegisterFormBlock>
			<ApplyInfoBox>
				<div class="step">지원서 작성 [{clubName}]</div>
				<div class="info">
					<div>{title}</div>
				</div>
			</ApplyInfoBox>

			<form>
				{!loading ? (
					apply.map((question) =>
						question.questionType === 'SUBJECTIVE' ? (
							<div key={question.questionNumber}>
								<FormContent>
									<div class="name">Q. {question.questionContent}</div>
									<StyledTextarea
										id={question.questionNumber}
										onChange={onChangeTextArea}
										value={value}
										placeholder="내용을 입력해주세요."
									></StyledTextarea>
								</FormContent>
							</div>
						) : (
								<div key={question.questionNumber}>
									<FormContent>
										<div class="name">Q. {question.questionContent}</div>
										<CheckList
											id={question.questionNumber}
											lists={question.multipleChoiceResponseDtos}
											onChangeCheckList={onChangeCheckList}
										/>
									</FormContent>
								</div>
							)
					)
				) : (
						<LoadingSpinner size="large" style={{ margin: '0 auto' }} />
					)}
				<ButtonBlock>
					<Button onClick={onSubmit} applyBtn>
						지원하기
					</Button>
				</ButtonBlock>
			</form>
		</RegisterFormBlock>
	);
};

export default withRouter(ApplyForm);
