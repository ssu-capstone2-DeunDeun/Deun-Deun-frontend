import React, { useCallback, useRef } from 'react';
import { Container, Input, ClubImageUploadButton } from './styles';

const ClubImageUpload = ({ onChangeFile }) => {
	const inputRef = useRef();
	const onClickInput = useCallback(() => {
		inputRef.current.click();
	}, []);

	return (
		//
		<Container>
			<Input ref={inputRef} type="file" accept="image/*" name="multipartFiles" onChange={onChangeFile} />
			<ClubImageUploadButton onClick={onClickInput}>+</ClubImageUploadButton>
		</Container>
	);
};

export default ClubImageUpload;
