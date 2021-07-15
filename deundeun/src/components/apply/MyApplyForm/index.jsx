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
import CheckListReadOnly from '../CheckListReadOnly/index';

const MyApplyForm = ({ match }) => {
	const { clubName, id } = match.params;
	const [title, setTitle] = useState(null);
	const [loading, setLoading] = useState(true);
	const [answerList, setAnswerList] = useState(null);

	const history = useHistory();

	useEffect(() => {
		axios({
			method: 'get',
			url: `${API_BASE_URL}/club/recruit/applies/${id}`,
			headers: {
				Authorization: 'Bearer ' + localStorage.getItem(ACCESS_TOKEN)
			}
		}).then((res) => {
			console.log(res.data);
			setTitle(res.data.recruitTitle);
			setAnswerList(res.data.applyQAResponseDtos);
			setLoading(false);
		});
	}, []);

	useEffect(() => {}, [answerList]);

	return (
		<RegisterFormBlock>
			<ApplyInfoBox>
				<div class="step">지원서 미리보기 [{clubName}]</div>
				<div class="info">
					<div>{title ? title : ''}</div>
				</div>
			</ApplyInfoBox>

			{!loading ? (
				answerList.map((answer) =>
					answer.recruitQuestionResponseDto.questionType === 'SUBJECTIVE' ? (
						<div key={answer.recruitQuestionResponseDto.questionNumber}>
							<FormContent>
								<div class="name">Q. {answer.recruitQuestionResponseDto.questionContent}</div>
								<StyledTextarea
									id={answer.recruitQuestionResponseDto.questionNumber}
									readOnly
									value={answer.applyAnswer}
								></StyledTextarea>
							</FormContent>
						</div>
					) : (
						<div key={answer.recruitQuestionResponseDto.questionNumber}>
							<FormContent>
								<div class="name">Q. {answer.recruitQuestionResponseDto.questionContent}</div>
								<CheckListReadOnly
									id={answer.recruitQuestionResponseDto.questionNumber}
									lists={answer.recruitQuestionResponseDto.multipleChoiceResponseDtos}
									answer={answer.applyAnswer}
								/>
							</FormContent>
						</div>
					)
				)
			) : (
				<LoadingSpinner size="large" style={{ margin: '0 auto' }} />
			)}
		</RegisterFormBlock>
	);
};

export default withRouter(MyApplyForm);
