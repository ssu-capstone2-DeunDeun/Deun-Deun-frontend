import ClubModifyPage from 'pages/ClubModifyPage/index';
import { changeInput } from 'modules/clubModifyInfo';
import { useCallback, useEffect, useState } from 'react';
import axios from '../../../node_modules/axios/index';
import { ACCESS_TOKEN, API_BASE_URL } from 'constants/index';
import { useDispatch, useSelector } from 'react-redux';
const ClubModifyPageContainer = () => {
	const {
		generation,
		categoryType,
		clubName,
		clubHashtags,
		introduction,
		backgroundImageUrl,
		representImageUrl,
		clubImages
	} = useSelector(({ clubModifyInfo }) => ({
		generation: clubModifyInfo.generation,
		categoryType: clubModifyInfo.categoryType,
		clubName: clubModifyInfo.clubName,
		clubHashtags: clubModifyInfo.clubHashtags,
		introduction: clubModifyInfo.introduction,
		backgroundImageUrl: clubModifyInfo.backgroundImageUrl,
		representImageUrl: clubModifyInfo.representImageUrl,
		clubImages: clubModifyInfo.clubImages
	}));

	const [clubInfo, setClubInfo] = useState({
		generation: 0,
		categoryType: '',
		clubName: '',
		clubHashtags: [],
		introduction: '',
		backgroundImageUrl: '',
		representImageUrl: '',
		clubImageUrls: []
	});

	const dispatch = useDispatch();
	const [imageFileList, setImageFileList] = useState([]);
	const [generationError, setGenerationError] = useState(false);
	const [categoryError, setCategoryError] = useState(false);

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

	const onChangeCategory = useCallback(
		(e) => {
			e.preventDefault();
			const value = e.currentTarget.innerText;
			dispatch(changeInput({ type: 'categoryType', value: value }));
			setCategoryError(false);
		},
		[dispatch]
	);

	const onChangeClubImage = useCallback(() => {}, []);

	const onChangeImage = useCallback(() => {}, []);

	const onDeleteImage = useCallback(() => {}, []);

	const onClickImage = useCallback(() => {}, []);

	useEffect(() => {
		axios({
			method: 'get',
			url: `${API_BASE_URL}/user/clubs`,
			headers: {
				Authorization: 'Bearer ' + localStorage.getItem(ACCESS_TOKEN)
			}
		})
			.then((response) => {
				const res = response.data[0].clubResponseDto;
				console.log(res);
				// dispatch(changeInput({ type: 'generation', value: res.generation }));
				// dispatch(changeInput({ type: 'categoryType', value: res.categoryType }));
				// dispatch(changeInput({ type: 'clubName', value: res.clubName }));
				// dispatch(changeInput({ type: 'clubHashtags', value: res.clubHashtags }));
				// dispatch(changeInput({ type: 'introduction', value: res.introduction }));
				// dispatch(changeInput({ type: 'backgroundImageUrl', value: res.backgroundImageUrl }));
				// dispatch(changeInput({ type: 'representImageUrl', value: res.representImageUrl }));
				// dispatch(changeInput({ type: 'clubImageUrls', value: res.clubImageUrls }));
				setClubInfo({
					generation: res.generation,
					categoryType: res.categoryType,
					clubName: res.clubName,
					introduction: res.introduction,
					backgroundImageUrl: res.backgroundImageUrl,
					representImageUrl: res.representImageUrl,
					clubImageUrls: res.clubImageUrls
				});
				setImageFileList(clubInfo.clubImageUrls);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return (
		<ClubModifyPage
			clubInfo={clubInfo}
			generationError={generationError}
			categoryError={categoryError}
			onChangeGeneration={onChangeGeneration}
			onChangeItem={onChangeCategory}
			onChangeClubImage={onChangeClubImage}
			onChangeImage={onChangeImage}
			onDeleteImage={onDeleteImage}
			onClickImage={onClickImage}
			imageFileList={imageFileList}
			setImageFileList={setImageFileList}
		/>
	);
};

export default ClubModifyPageContainer;
