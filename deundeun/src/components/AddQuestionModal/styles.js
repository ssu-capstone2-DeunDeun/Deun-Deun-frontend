import styled from '@emotion/styled';

export const Label = styled.label`
	margin-bottom: 16px;

	& > span {
		display: block;
		text-align: left;
		padding-bottom: 8px;
		font-size: 15px;
		cursor: pointer;
		line-height: 1.46666667;
		font-weight: 700;
	}
`;

export const TooltipContainer = styled.div`
	margin-top: 2em;
	display: flex;
	justify-content: flex-end;
	flex-direction: row;
	margin-right: 1em;
`;
