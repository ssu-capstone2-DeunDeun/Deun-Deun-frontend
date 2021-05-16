import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

export const Spinner = styled.div`
	width: 2em;
	height: 2em;
	border-radius: 50%;
	border: 3px solid #f7f7f7;
	border-top: 3px solid #9ddfd3;
	animation: ${spin} 0.9s linear infinite;
`;
