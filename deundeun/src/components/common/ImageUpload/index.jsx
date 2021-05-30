import React, { useCallback, useRef } from 'react';
import { Container, Input, Add, InputButton } from './styles';

const ImageUpload = ({ type, onChangeFile, multiple }) => {
	const inputRef = useRef();
	const onClickInput = useCallback(() => {
		inputRef.current.click();
	}, []);

	return (
		//
		<Container className={`${type === 'background' ? 'background' : ''}`}>
			{multiple ? (
				<Input ref={inputRef} type="file" accept="image/*" name="multipartFiles" onChange={onChangeFile} multiple />
			) : (
				<Input ref={inputRef} type="file" accept="image/*" name="multipartFiles" onChange={onChangeFile} />
			)}
			<InputButton onClick={onClickInput}>
				<Add>+</Add>
			</InputButton>
		</Container>
	);
};

export default ImageUpload;
