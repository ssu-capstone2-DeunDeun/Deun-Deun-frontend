import styled from '@emotion/styled';

export const Header = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	margin-top: 6.5em;
	margin-bottom: 1.75em;
`;

export const Content = styled.div`
	margin-right: 7em;
	display: flex;
	justify-content: space-between;
	align-content: space-around;

	@media (max-width: 720px) {
		display: flex;
		justify-content: space-between;
		flex-direction: column;
	}
`;

export const CardContainer = styled.div`
	width: 105%;
	margin-bottom: 10em;
`;
