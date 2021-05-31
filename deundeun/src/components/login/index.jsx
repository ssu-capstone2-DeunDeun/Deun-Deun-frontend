import { GOOGLE_AUTH_URL } from 'constants/index';
import React from 'react';
import { ImageContainer, LoginContainer, LoginModal, SocialContainer } from './styles';
import { MdClose } from "react-icons/md";




const LoginForm = () => {
	const popupClear = () => {
		const t = document.getElementById("popup");
		t.className = "delete";
	};
	return (
		<LoginContainer >
			<div id="popup" className="control">
				<LoginModal>
					<ImageContainer>
						<MdClose onClick={() => {
							popupClear();
						}} />
					</ImageContainer>
					<div className="logo">
						<img src="../../img/logo/GROOPY.png" alt="logo" />
						<div className="text">동아리가 쉬워진다. GROOPY!</div>
						<div className="sub">
							<div className="bar"></div>
							<div className="subtext">소셜로그인</div>
							<div className="bar"></div>
						</div>

						<SocialContainer>
							<a href={GOOGLE_AUTH_URL}>
								<div>
									<div className="googleBtn" href={GOOGLE_AUTH_URL}>
										<div className="googleImg">
											<img src="../../img/login/google-logo.png" alt="Google" />
										</div>
									</div>
								</div>
								<div className="googleText">
									GOOGLE 계정으로 로그인 하기
							</div>
							</a>
						</SocialContainer>
					</div>
				</LoginModal>
			</div>
		</LoginContainer >
	);
};


export default LoginForm;