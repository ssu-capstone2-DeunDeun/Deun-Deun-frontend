import React from 'react';
import { LoginFormBlock, RegisterInfoBox } from './styles';

const LoginForm = () => {
	return (
		<LoginFormBlock>
			<RegisterInfoBox>
				<div class="step">소셜 로그인</div>
			</RegisterInfoBox>
		</LoginFormBlock>
	);
};

export default LoginForm;