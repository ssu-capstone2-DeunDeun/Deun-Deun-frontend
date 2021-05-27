import { GOOGLE_AUTH_URL } from 'constants/index';
import React from 'react';
import { LoginContainer } from './styles';

const LoginForm = () => {
	return (
		<LoginContainer>
			<div className="login-content">
				<h1 className="login-title">Login to GROOPY</h1>
				<SocialLogin />
			</div>
		</LoginContainer>
	);
};


const SocialLogin = () => {
	return (
		<div className="social-login">
			<a className="btn btn-block social-btn google" href={GOOGLE_AUTH_URL}>
				<img src="../../img/login/google-logo.png" alt="Google" />
				<div>Login with Google</div>
			</a>
		</div >
	)
}

export default LoginForm;
