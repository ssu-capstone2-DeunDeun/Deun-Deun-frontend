import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Spinner } from './styles';

const LoadingSpinner = ({ size }) => {
	return (
		//
		<Spinner className={`${size === 'large' ? 'large' : ''}`} />
	);
};

export default LoadingSpinner;
