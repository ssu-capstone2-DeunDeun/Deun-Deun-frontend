import React, { useCallback, useRef } from 'react';
import { Container, Input, Add, InputButton } from './styles';

const ClubImageUpload = ({ onChangeFile }) => {
	const inputRef = useRef();
	const onClickInput = useCallback(() => {
		inputRef.current.click();
	}, []);

	return (
		//
		<Container>
			<Input ref={inputRef} type="file" accept="image/*" name="multipartFiles" onChange={onChangeFile} />
			<InputButton onClick={onClickInput}>
				<Add>+</Add>
			</InputButton>
		</Container>
	);
};

export default ClubImageUpload;
