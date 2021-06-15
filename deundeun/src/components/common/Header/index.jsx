import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import { Container, Logo, IconContainer, ProfileIcon } from './styles';
import { ImageContainer, LoginContainer, LoginModal, NaverContainer, GoogleContainer } from './styles';
import { GOOGLE_AUTH_URL, NAVER_AUTH_URL } from 'constants/index';
import { MdClose } from "react-icons/md";
import { Divider } from 'components/ApplicationFormCard/styles';

const Header = ({ checkLogin, userInfo, onLogout }) => {
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
						<div className="signBtn" onClick={() => popupMake()}>로그인</div>
					</div>
				) : (
						<div className="signout">
							{/* <SearchIcon style={{ cursor: 'pointer' }} onClick={onClickSearch} /> */}
							{userInfo &&
								<div className="userInfo">
									<div className="userInfoNickname">{userInfo.nickname}님</div>
									<div className="userInfoText">환영합니다</div>
								</div>
							}
							<div className="signBtn signBtnLogout" onClick={onLogout}>로그아웃</div>
							{/* <ProfileIcon onClick={onClickProfile} /> */}
						</div>
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

							<GoogleContainer>
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
							</GoogleContainer>
							<NaverContainer>
								<a href={NAVER_AUTH_URL}>
									<div>
										<div className="naverBtn" href={NAVER_AUTH_URL}>
											<div className="naverImg">
												<img src="../../img/login/btnW_아이콘사각.png" alt="Naver" />
											</div>
										</div>
									</div>
									<div className="naverText">
										NAVER 계정으로 로그인 하기
									</div>
								</a>
							</NaverContainer>
						</div>
					</LoginModal>
				</div>
			</LoginContainer >
		</Container>
	);
};

export default Header;
