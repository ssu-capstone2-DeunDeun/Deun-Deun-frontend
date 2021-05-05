import React, { useEffect } from 'react';

const RecruitAddPage = ({ setAddNewForm }) => {
	useEffect(() => {
		return () => setAddNewForm(false);
	}, []);

	return (
		//
		<h1>RecruitAddPage</h1>
	);
};

export default RecruitAddPage;
