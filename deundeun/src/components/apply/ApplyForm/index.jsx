import React from 'react';
import { ApplyInfoBox, ButtonBlock, FormContent, RegisterFormBlock, StyledTextarea } from './styles';
import CheckList from '../CheckList/index';
import Button from 'components/common/Button/index';




const ApplyForm = () => {
	// lists를 나중에는 props로 받아와야 한다. 우선은, 임의적으로 생성했습니다.
	const lists = ["내용을 입력해주세요.", "내용을 입력해주세요.", "내용을 입력해주세요.", "내용을 입력해주세요.", "내용을 입력해주세요."];
	return (
		<RegisterFormBlock>
			<ApplyInfoBox>
				<div class="step">게시글</div>
				<div class="info">
					<div>[3기] 야! 너도 일리네어 할 수 있어!</div>
				</div>
			</ApplyInfoBox>

			<form>
				<FormContent>
					<div class="name">Q1 서술형 질문 제목 텍스트 질문 제목 테스트</div>
					<StyledTextarea placeholder="내용을 입력해주세요."></StyledTextarea>
				</FormContent>
				<FormContent>
					<div class="name">Q2 서술형 질문 제목 텍스트 질문 제목 텍스트</div>
					<StyledTextarea placeholder="내용을 입력해주세요."></StyledTextarea>
				</FormContent>
				<FormContent>
					<div class="name">Q3 서술형 질문 제목 텍스트 질문 제목 텍스트</div>
					<StyledTextarea placeholder="내용을 입력해주세요."></StyledTextarea>
				</FormContent>
				<FormContent>
					<div class="name">Q4 선택형 질문 제목</div>
					<CheckList lists={lists} />               {/* lists를 문항으로 만들어주는 컴포넌트 */}
				</FormContent >

				<ButtonBlock>
					<Button applyBtn to="/apply/success">지원하기</Button>
				</ButtonBlock>
			</form >
		</RegisterFormBlock >
	);
};

export default ApplyForm;