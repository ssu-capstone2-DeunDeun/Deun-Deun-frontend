import ApplyForm from 'components/apply/ApplyForm';
import MyApplyForm from 'components/apply/MyApplyForm/index';
import BasicTemplate from 'components/common/BasicTemplate';
import { getApplyForms } from 'lib/api/apply';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';

const MyApplyPage = ({ match }) => {
	return (
		<BasicTemplate club="IT동아리 일리네어" sector="IT / 개발">
			<MyApplyForm match={match} />
		</BasicTemplate>
	);
};

export default withRouter(MyApplyPage);
