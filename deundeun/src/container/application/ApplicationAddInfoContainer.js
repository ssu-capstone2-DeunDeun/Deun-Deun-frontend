import applicationAddInfo, {
	changeInput,
	initializeChoice,
	initializeQuestion,
	modifyQuestionType
} from 'modules/applicationAddInfo';
import ApplicationAddPage from 'pages/ApplicationAddPage/index';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ACCESS_TOKEN, API_BASE_URL } from 'constants/index';
import axios from '../../../node_modules/axios/index';

const ApplicationAddInfoContainer = ({ setAddNewForm, location }) => {
	const dispatch = useDispatch();
	const [appTitle, setAppTitle] = useState('');
	const [clubName, setClubName] = useState('');
	const [loading, setLoading] = useState(true);
	const [appLoading, setAppLoading] = useState(true);
	const [whenState, setWhenState] = useState(false);

	const onChangeAppTitle = useCallback(
		(e) => {
			setWhenState(true);
			setAppTitle(e.target.value);
			dispatch(changeInput(e.target.value));
		},
		[dispatch]
	);

	const onChangeQuestionType = useCallback(
		(e) => {
			setWhenState(true);
			const id = e.target.id;
			const type = e.currentTarget.innerText;
			if (type === '선다형') {
				dispatch(modifyQuestionType(id, 'MULTIPLE'));
				dispatch(initializeChoice(id));
			} else {
				dispatch(modifyQuestionType(id, 'SUBJECTIVE'));
			}
		},
		[dispatch]
	);

	useEffect(() => {
		axios({
			method: 'get',
			url: `${API_BASE_URL}/user/clubs`,
			headers: {
				Authorization: 'Bearer ' + localStorage.getItem(ACCESS_TOKEN)
			}
		}).then((response) => {
			const res = response.data[0].clubResponseDto;
			dispatch(initializeQuestion());
			setClubName(res.clubName);
			setLoading(false);
		});
	}, []);

	return (
		<ApplicationAddPage
			setAddNewForm={setAddNewForm}
			appTitle={appTitle}
			onChangeAppTitle={onChangeAppTitle}
			onChangeQuestionType={onChangeQuestionType}
			clubName={clubName}
			loading={loading}
			setLoading={setLoading}
			appLoading={appLoading}
			setAppLoading={setAppLoading}
			whenState={whenState}
			setWhenState={setWhenState}
			location={location}
		/>
	);
};

export default ApplicationAddInfoContainer;
