import React, { useCallback, useRef } from 'react';
import { Container, Input, InputButton, Add } from './styles';

const ImageFileInput = ({ imageUploader, imageIndex, setImageIndex, onChangeFile, setImageLoading }) => {
	const inputRef = useRef();
	const onClickInputButton = useCallback(() => {
		inputRef.current.click();
	}, []);

	const onChangeInput = useCallback(
		async (e) => {
			e.preventDefault();
			setImageLoading(true);
			const uploaded = await imageUploader.upload(e.target.files[0]);
			console.log(uploaded);
			setImageLoading(false);
			onChangeFile({
				id: imageIndex,
				imageURL: uploaded.url
			});
			setImageIndex(imageIndex + 1);
		},
		[imageUploader, onChangeFile, setImageLoading, imageIndex, setImageIndex]
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
