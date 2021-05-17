import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import { Container, Logo, IconContainer, ProfileIcon } from './styles';
const Header = () => {
	const onClickSearch = useCallback((e) => {
		console.log('search');
	}, []);

	const onClickProfile = useCallback((e) => {
		console.log('search');
	}, []);

	return (
		<Container>
			<Link to="/club/home">
				<Logo src="/images/logo/GROOPY.png" />
			</Link>
			<IconContainer>
				<SearchIcon style={{ cursor: 'pointer' }} onClick={onClickSearch} />
				<ProfileIcon onClick={onClickProfile} />
			</IconContainer>
		</Container>
	);
};

export default Header;

