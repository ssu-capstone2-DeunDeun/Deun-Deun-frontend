import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import { Container, Logo, IconContainer, ProfileIcon } from './styles';

const Header = ({ checkLogin, userInfo, onLogout }) => {
	const onClickSearch = useCallback((e) => {
		console.log('search');
	}, []);

	const onClickProfile = useCallback((e) => {
		console.log('my profile');
	}, []);

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
						{/* <SearchIcon style={{ cursor: 'pointer' }} onClick={onClickSearch} /> */}
						{userInfo && `${userInfo.nickname}`}
						<button onClick={onLogout}>로그아웃</button>
						<ProfileIcon onClick={onClickProfile} />
					</>
				)}
			</IconContainer>
		</Container>
	);
};

export default Header;
