import React, { useEffect } from 'react';

const ApplicationAddPage = ({ setAddNewForm }) => {
	useEffect(() => {
		return () => setAddNewForm(false);
	}, []);

	return (
		//
		<h1>ApplicationAddPage</h1>
	);
};

export default ApplicationAddPage;
