import ApplicationAddPage from 'pages/ApplicationAddPage/index';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

const ApplicationAddInfoContainer = () => {
	const dispatch = useDispatch();

	const onChangeQuestionInput = useCallback(() => {}, []);
	return <ApplicationAddPage onChangeQuestionInput={onChangeQuestionInput} />;
};

export default ApplicationAddInfoContainer;
