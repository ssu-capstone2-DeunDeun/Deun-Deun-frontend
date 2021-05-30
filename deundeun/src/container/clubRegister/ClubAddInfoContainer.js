import { changeInput } from 'modules/clubAddInfo';
import { useDispatch, useSelector } from 'react-redux';
import ClubAddPage from 'pages/ClubAddPage/index';
const ClubAddInfoContainer = ({ FileInput, SingleFileInput }) => {
	const dispatch = useDispatch();
	// const { generation, clubName, isDuplicate } = useSelector(({ clubAddInfo }) => ({
	// 	generation: clubAddInfo.generation,
	// 	clubName: clubAddInfo.clubName,
	// 	isDuplicate: clubAddInfo.isDuplicate
	// }));

	const onChangeInput = (e) => {
		const { value, name } = e.target;
		dispatch(changeInput({ type: name, value: value }));
	};

	return <ClubAddPage onChangeInput={onChangeInput} FileInput={FileInput} SingleFileInput={SingleFileInput} />;
};

export default ClubAddInfoContainer;
