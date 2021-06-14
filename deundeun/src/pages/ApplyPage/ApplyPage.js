import ApplyForm from 'components/apply/ApplyForm';
import BasicTemplate from 'components/common/BasicTemplate';
import React, { useEffect } from 'react';
import { useLocation, useParams, withRouter } from 'react-router-dom';

const ApplyPage = () => {
	return (
		<BasicTemplate club="IT동아리 일리네어" sector="IT / 개발">
			<ApplyForm />
		</BasicTemplate>
	);
};

export default withRouter(ApplyPage);
