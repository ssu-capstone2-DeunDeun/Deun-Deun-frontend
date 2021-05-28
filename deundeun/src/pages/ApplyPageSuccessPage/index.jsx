import ApplySuccess from 'components/apply/ApplySuccess';
import BasicTemplate2 from 'components/common/BasicTemplate2';
import React from 'react';

const ApplyPage = ({ children }) => {
	return (
		<BasicTemplate2>
			<ApplySuccess />
		</BasicTemplate2>
	);
};

export default ApplyPage;
