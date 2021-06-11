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
	width: 100%;
	display: flex;
	justify-content: space-between;

	@media (max-width: 720px) {
		display: flex;
		justify-content: space-between;
		flex-direction: column;
	}
`;

export const CardContainer = styled.div`
	width: 100%;
	margin-bottom: 10em;
`;
