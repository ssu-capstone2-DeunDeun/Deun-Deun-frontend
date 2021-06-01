import { changeInput, duplicated, clubAdd } from 'modules/clubAddInfo';
import { useDispatch, useSelector } from 'react-redux';
import ClubAddPage from 'pages/ClubAddPage/index';
import { useCallback, useEffect, useState } from 'react';
import axios from '../../../node_modules/axios/index';
import { ACCESS_TOKEN, API_BASE_URL } from 'constants/index';
import { useHistory } from 'react-router';

const ClubAddInfoContainer = () => {
	const history = useHistory();
	const dispatch = useDispatch();
	const {
		generation,
		categoryType,
		clubName,
		isDuplicate,
		introduction,
		hashtagInfoIds,
		backgroundImageUrl,
		representImageUrl,
		clubImages
	} = useSelector(({ clubAddInfo }) => ({
		generation: clubAddInfo.generation,
		categoryType: clubAddInfo.categoryType,
		clubName: clubAddInfo.clubName,
		isDuplicate: clubAddInfo.isDuplicate,
		introduction: clubAddInfo.introduction,
		hashtagInfoIds: clubAddInfo.hashtagInfoIds,
		backgroundImageUrl: clubAddInfo.backgroundImageUrl,
		representImageUrl: clubAddInfo.representImageUrl,
		clubImages: clubAddInfo.clubImages
	}));

	const [imageFileList, setImageFileList] = useState([]);
	const [generationError, setGenerationError] = useState(false);
	const [categoryError, setCategoryError] = useState(true);
	const [clubNameError, setClubNameError] = useState(true);

	const onChangeGeneration = useCallback(
		(e) => {
			if (Number(e.target.value) > 0 && Number(e.target.value <= 999)) {
				const { value, name } = e.target;
				dispatch(changeInput({ type: name, value: value }));
				setGenerationError(false);
			} else {
				const { name } = e.target;
				dispatch(changeInput({ type: name, value: '' }));
				setGenerationError(true);
			}
		},
		[dispatch]
	);

	const onChangeInput = useCallback(
		(e) => {
			const { value, name } = e.target;
			dispatch(changeInput({ type: name, value: value }));
			if (name === 'clubName') {
				if (value !== '') {
					setClubNameError(false);
				} else {
					setClubNameError(true);
				}
				dispatch(changeInput({ type: 'isDuplicate', value: null }));
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
					setImageFileList(imageFileList.concat(response.data));
				})
				.catch((error) => {
					console.log(error);
				});
		}
	};

	const onChangeCategory = useCallback(
		(e) => {
			e.preventDefault();
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

	const handleDuplicate = (e) => {
		e.preventDefault();
		if (clubName) {
			dispatch(duplicated(clubName));
		}
	};

	const onDeleteImage = useCallback(
		(e) => {
			setImageFileList(imageFileList.filter((image) => image !== e.target.id));
		},
		[imageFileList]
	);

	const onSubmit = () => {
		if (categoryError || clubNameError || generationError || isDuplicate) {
			console.log('submit error');
			return;
		} else {
			const clubRequestDto = {
				backgroundImageUrl: backgroundImageUrl,
				categoryType: categoryType,
				clubImages: clubImages,
				generation: generation,
				hashtagInfoIds: hashtagInfoIds,
				introduction: introduction,
				name: clubName,
				representImageUrl: representImageUrl
			};
			dispatch(clubAdd(clubRequestDto));
			// history.push();
		}
	};

	useEffect(() => {
		dispatch(changeInput({ type: 'clubImages', value: imageFileList }));
	}, [dispatch, imageFileList]);

	return (
		<ClubAddPage
			clubName={clubName}
			clubNameError={clubNameError}
			categoryError={categoryError}
			isDuplicate={isDuplicate}
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
			onDeleteImage={onDeleteImage}
			onSubmit={onSubmit}
		/>
	);
};

export default ClubAddInfoContainer;
