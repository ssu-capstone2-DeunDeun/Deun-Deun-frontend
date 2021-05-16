import React, { useCallback, useRef } from 'react';
import { Container, Input, InputButton, Add } from './styles';

const ImageFileInput = ({ imageUploader, onChangeFile, setImageLoading }) => {
	const inputRef = useRef();
	const onClickInputButton = useCallback(() => {
		inputRef.current.click();
	}, []);

	const onChangeInput = useCallback(
		async (e) => {
			e.preventDefault();
			setImageLoading(true);
			const uploaded = await imageUploader.upload(e.target.files[0]);
			setImageLoading(false);
			onChangeFile({
				url: uploaded.url
			});
		},
		[imageUploader, onChangeFile, setImageLoading]
	);

	return (
		//
		<Container>
			<Input ref={inputRef} type="file" accept="image/*" name="file" onChange={onChangeInput} />
			<InputButton onClick={onClickInputButton}>
				<Add>+</Add>
			</InputButton>
		</Container>
	);
};

export default ImageFileInput;
