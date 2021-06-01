import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import { Container, Logo, IconContainer, ProfileIcon } from './styles';
import { ImageContainer, LoginContainer, LoginModal, SocialContainer } from './styles';
import { GOOGLE_AUTH_URL } from 'constants/index';
import { MdClose } from "react-icons/md";

const Header = ({ checkLogin, userInfo, onLogout }) => {
	const onClickSearch = useCallback((e) => {
		console.log('search');
	}, []);

	const onClickProfile = useCallback((e) => {
		console.log('my profile');
	}, []);



	const popupClear = () => {
		const t = document.getElementById("popup");
		t.className = "delete";
	};
	const popupMake = () => {
		const t = document.getElementById("popup");
		t.className = "make";
	};

	return (
		<Container>
			<Link to="/home">
				<Logo src="/images/logo/GROOPY.png" />
			</Link>
			{/* <SearchBoxContainer>
				<SearchBox placeholder="동아리명 / 해시태그로 검색"></SearchBox>
				<SearchIcon style={{ marginLeft: 'auto', marginRight: '1em', cursor: 'pointer' }} onClick={onSearch} />
			</SearchBoxContainer> */}

			<IconContainer>
				{checkLogin === false ? (
					<div className="sign">
						<Link onClick={() => popupMake()}>로그인</Link>
					</div>
				) : (
						<>
							{/* <SearchIcon style={{ cursor: 'pointer' }} onClick={onClickSearch} /> */}
							{userInfo && `${userInfo.nickname}`}
							<button onClick={onLogout}>로그아웃</button>
							<ProfileIcon onClick={onClickProfile} />
						</>
					)}
			</IconContainer>


			<LoginContainer >
				<div id="popup" className="delete">
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
		</Container>
	);
};

export default Header;
