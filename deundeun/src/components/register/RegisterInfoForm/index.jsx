import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { ButtonBlock, ErrorMessage, FormContent, RegisterFormBlock, RegisterInfoBox, StyledInput } from './styles';
import Button from 'components/common/Button/index';
import { withRouter } from 'react-router-dom';
import { signup } from 'lib/api/auth';
// import { getCurrentUser, signup } from 'utils/APIUtils';



const RegisterInfoForm = ({ history, onChange, nickname, error }) => {

	const handleSubmit = (e) => {
		const form = { nickname: nickname };
		const userRequestDto = Object.assign({}, form);
		// signup(userRequestDto);
		signup(userRequestDto);
	}
	// 이 부분도 전부 container로 넣는다

	return (
		<RegisterFormBlock>
			<RegisterInfoBox>
				<div className="step">STEP 1.</div>
				<div className="info">
					<div>반갑습니다!</div>
					<div>기본 정보를 입력해주세요.</div>
				</div>
			</RegisterInfoBox>
			<form>
				<FormContent>
					<div className="name">이름</div>
					<StyledInput placeholder="이름을 입력해주세요."></StyledInput>
				</FormContent>
				<FormContent>
					<div className="name">닉네임*</div>
					<div className="checking">
						<StyledInput value={nickname} name="nickname" onChange={onChange} placeholder="닉네임을 입력해주세요."></StyledInput>
						<button onClick={(e) => e.preventDefault()}>중복 검사</button>
					</div>
					{
						error && <ErrorMessage>{error}</ErrorMessage>
					}
				</FormContent>
				<FormContent>
					<div className="name">이메일</div>
					<StyledInput placeholder="이메일을 입력해주세요."></StyledInput>
				</FormContent>
				<ButtonBlock>
					<Button to="/register/2" onClick={(e) => {
						e.preventDefault();
						handleSubmit();
						// getCurrentUser();
						// history.push('/register/2');
					}}>다음 단계로</Button>
				</ButtonBlock>
			</form>
		</RegisterFormBlock >
	);
};

export default withRouter(RegisterInfoForm);