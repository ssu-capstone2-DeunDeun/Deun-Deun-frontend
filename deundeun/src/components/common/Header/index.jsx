import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import { Container, Logo, IconContainer, ProfileIcon } from './styles';
import { useState } from 'react';
const Header = () => {
	const onClickSearch = useCallback((e) => {
		console.log('search');
	}, []);

	const onClickProfile = useCallback((e) => {
		console.log('search');
	}, []);

	const [checkLogin, setCheckLogin] = useState(false);
	//로그인 성공시 -> setCheckLogin(true) 로직 구성해야 한다.

	return (
		<Container>
			<Link to="/home">
				<Logo src="/images/logo/GROOPY.png" />
			</Link>
			<IconContainer>
				{
					checkLogin === false ?
						<div className="sign">
							<Link to="/login">로그인</Link>
							<div> / </div>
							<Link to="/register/1">회원가입</Link>
						</div>
						:
						<>
							<SearchIcon style={{ cursor: 'pointer' }} onClick={onClickSearch} />
							<ProfileIcon onClick={onClickProfile} />
						</>
				}
			</IconContainer>
		</Container>
	);
};

export default Header;

