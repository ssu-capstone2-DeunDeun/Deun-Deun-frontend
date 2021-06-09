import applicationAddInfo, { changeInput, initializeChoice, modifyQuestionType } from 'modules/applicationAddInfo';
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

	const onChangeQuestionType = useCallback(
		(e) => {
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

	return (
		<ApplicationAddPage
			setAddNewForm={setAddNewForm}
			appTitle={appTitle}
			onChangeAppTitle={onChangeAppTitle}
			onChangeQuestionType={onChangeQuestionType}
		/>
	);
};

export default ApplicationAddInfoContainer;
