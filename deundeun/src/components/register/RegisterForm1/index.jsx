import Button from 'components/common/Button/Button';
import React from 'react';
import { ButtonBlock, FormContent, RegisterFormBlock, RegisterInfoBox, StyledInput } from './styles';



const RegisterForm1 = () => {
	return (
		<RegisterFormBlock>
			<RegisterInfoBox>
				<div class="step">STEP 1.</div>
				<div class="info">
					<div>반갑습니다!</div>
					<div>기본 정보를 입력해주세요.</div>
				</div>
			</RegisterInfoBox>
			<form>
				<FormContent>
					<div class="name">이름*</div>
					<StyledInput placeholder="이름을 입력해주세요."></StyledInput>
				</FormContent>
				<FormContent>
					<div class="name">닉네임*</div>
					<div class="checking">
						<StyledInput placeholder="닉네임을 입력해주세요."></StyledInput>
						<button onClick={(e) => e.preventDefault()}>중복 검사</button>
					</div>
				</FormContent>
				<FormContent>
					<div class="name">이메일*</div>
					<StyledInput placeholder="이메일을 입력해주세요."></StyledInput>
				</FormContent>
				<ButtonBlock>
					<Button to="/register/2">다음 단계로</Button>
				</ButtonBlock>
			</form>
		</RegisterFormBlock >
	);
};

export default RegisterForm1;