import { changeInput, duplicated } from 'modules/clubAddInfo';
import { useDispatch, useSelector } from 'react-redux';
import ClubAddPage from 'pages/ClubAddPage/index';
import { useCallback, useState } from 'react';
import axios from '../../../node_modules/axios/index';
import { ACCESS_TOKEN, API_BASE_URL } from 'constants/index';

const ClubAddInfoContainer = () => {
	const dispatch = useDispatch();
	const { generation, clubName, isDuplicate, backgroundImageUrl, representImageUrl, clubImages } = useSelector(
		({ clubAddInfo }) => ({
			generation: clubAddInfo.generation,
			clubName: clubAddInfo.clubName,
			isDuplicate: clubAddInfo.isDuplicate,
			backgroundImageUrl: clubAddInfo.backgroundImageUrl,
			representImageUrl: clubAddInfo.representImageUrl,
			clubImages: clubAddInfo.clubImages,
			hashtagInfoIds: clubAddInfo.hashtagInfoIds
		})
	);

	const [categoryError, setCategoryError] = useState(true);
	const [clubNameError, setClubNameError] = useState(true);
	const [duplicateError, setDuplicateError] = useState(false);

	const onChangeGeneration = useCallback(
		(e) => {
			if (Number(e.target.value) > 0 && Number(e.target.value <= 999)) {
				const { value, name } = e.target;
				dispatch(changeInput({ type: name, value: value }));
				setCategoryError(false);
			} else {
				const { name } = e.target;
				dispatch(changeInput({ type: name, value: '' }));
				setCategoryError(true);
			}
		},
		[dispatch]
	);

	const onChangeInput = useCallback(
		(e) => {
			const { value, name } = e.target;
			dispatch(changeInput({ type: name, value: value }));
			// if (name === 'clubName' && value !== '') {
			// 	setClubNameError(false);
			// } else if (value === '') {
			// 	setClubNameError(true);
			// }
			if (name === 'clubName') {
				if (value !== '') {
					setClubNameError(false);
				} else {
					setClubNameError(true);
					setDuplicateError(false);
				}
			}
		},
		[dispatch]
	);

	const onChangeBackgroundImage = (e) => {
		e.preventDefault();
		if (e.target.files !== null) {
			const formData = new FormData();
			formData.append('multipartFiles', e.target.files[0]);
			axios({
				method: 'post',
				url: `${API_BASE_URL}/image`,
				data: formData,
				headers: {
					'Content-Type': 'multipart/form-data',
					Authorization: 'Bearer ' + localStorage.getItem(ACCESS_TOKEN)
				}
			})
				.then((response) => {
					console.log(response.data[0]);
					dispatch(changeInput({ type: 'backgroundImageUrl', value: response.data[0] }));
				})
				.catch((error) => {
					console.log(error);
				});
		}
	};

	const onChangeRepresentImage = (e) => {
		e.preventDefault();
		if (e.target.files !== null) {
			const formData = new FormData();

			formData.append('multipartFiles', e.target.files[0]);
			axios({
				method: 'post',
				url: `${API_BASE_URL}/image`,
				data: formData,
				headers: {
					'Content-Type': 'multipart/form-data',
					Authorization: 'Bearer ' + localStorage.getItem(ACCESS_TOKEN)
				}
			})
				.then((response) => {
					console.log(response.data[0]);
					dispatch(changeInput({ type: 'representImageUrl', value: response.data[0] }));
				})
				.catch((error) => {
					console.log(error);
				});
		}
	};

	const onChangeClubImage = (e) => {
		e.preventDefault();
		if (e.target.files !== null) {
			const formData = new FormData();
			if (e.target.files.length === 1) {
				formData.append('multipartFiles', e.target.files[0]);
			} else {
				let file;
				for (let i = 0; i < e.target.files.length; i++) {
					file = e.target.files[i];
					formData.append('multipartFiles', file);
				}
			}
			axios({
				method: 'post',
				url: `${API_BASE_URL}/image`,
				data: formData,
				headers: {
					'Content-Type': 'multipart/form-data',
					Authorization: 'Bearer ' + localStorage.getItem(ACCESS_TOKEN)
				}
			})
				.then((response) => {
					console.log(response.data);
					dispatch(changeInput({ type: 'clubImages', value: response.data }));
				})
				.catch((error) => {
					console.log(error);
				});
		}
	};

	const onChangeCategory = useCallback(
		(e) => {
			// console.log(e.currentTarget.innerText);
			const value = e.currentTarget.innerText;
			dispatch(changeInput({ type: 'categoryType', value: value }));
			setCategoryError(false);
		},
		[dispatch]
	);

	const onChangeHashtag = useCallback(
		(hashtagList) => {
			let value = [];
			hashtagList.map((hashtag) => value.push(hashtag.id));
			dispatch(changeInput({ type: 'hashtagInfoIds', value: value }));
		},
		[dispatch]
	);

	const handleDuplicate = () => {
		if (clubName) {
			dispatch(duplicated(clubName));

			if (isDuplicate === true) {
				setDuplicateError(true);
			}
		}
	};

	const onSubmit = useCallback(() => {
		console.log('submit');
	}, []);

	return (
		<ClubAddPage
			clubName={clubName}
			clubNameError={clubNameError}
			categoryError={categoryError}
			duplicateError={duplicateError}
			generation={generation}
			onChangeBackgroundImage={onChangeBackgroundImage}
			onChangeRepresentImage={onChangeRepresentImage}
			onChangeClubImage={onChangeClubImage}
			onChangeGeneration={onChangeGeneration}
			onChangeInput={onChangeInput}
			onChangeItem={onChangeCategory}
			onChangeHashtag={onChangeHashtag}
			handleDuplicate={handleDuplicate}
			backgroundImageUrl={backgroundImageUrl}
			representImageUrl={representImageUrl}
			clubImages={clubImages}
			onSubmit={onSubmit}
		/>
	);
};

export default ClubAddInfoContainer;
