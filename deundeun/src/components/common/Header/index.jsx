import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import { Container, Logo, IconContainer, ProfileIcon, SearchBox, SearchBoxContainer } from './styles';
import { useState } from 'react';
const Header = () => {
	const onSearch = useCallback(() => {
		console.log('search');
	}, []);

	const onClickProfile = useCallback((e) => {
		console.log('my profile');
	}, []);

	const [checkLogin, setCheckLogin] = useState(false);
	//로그인 성공시 -> setCheckLogin(true) 로직 구성해야 한다.

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
						<Link to="/login">로그인</Link>
					</div>
				) : (
					<>
						<ProfileIcon onClick={onClickProfile} />
					</>
				)}
			</IconContainer>
		</Container>
	);
};

export default Header;
