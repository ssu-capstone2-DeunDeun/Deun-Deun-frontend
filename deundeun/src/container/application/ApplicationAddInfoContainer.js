import applicationAddInfo, { changeInput } from 'modules/applicationAddInfo';
import ApplicationAddPage from 'pages/ApplicationAddPage/index';
import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const ApplicationAddInfoContainer = ({ setAddNewForm }) => {
	const dispatch = useDispatch();
	const [appTitle, setAppTitle] = useState('');

	const onChangeAppTitle = useCallback(
		(e) => {
			setAppTitle(e.target.value);
			dispatch(changeInput(e.target.value));
		},
		[dispatch]
	);

	return <ApplicationAddPage setAddNewForm={setAddNewForm} appTitle={appTitle} onChangeAppTitle={onChangeAppTitle} />;
};

export default ApplicationAddInfoContainer;
