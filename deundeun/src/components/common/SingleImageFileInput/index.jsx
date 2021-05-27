import { ClubImageUploadButton } from './styles';
import React, { useCallback, useRef } from 'react';
import { Container, Input } from './styles';

const SingleImageFileInput = ({ imageUploader, onChangeFile, setImageLoading }) => {
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
				imageURL: uploaded.url
			});
		},
		[imageUploader, onChangeFile, setImageLoading]
	);

	return (
		//
		<Container>
			<Input ref={inputRef} type="file" accept="image/*" name="file" onChange={onChangeInput} />
			<ClubImageUploadButton onClick={onClickInputButton}>+</ClubImageUploadButton>
		</Container>
	);
};

export default SingleImageFileInput;
