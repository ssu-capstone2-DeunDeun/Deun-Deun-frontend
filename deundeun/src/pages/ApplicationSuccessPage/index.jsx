import { ApplySuccessBlock } from 'components/apply/ApplySuccess/styles';
import React, { useEffect } from 'react';
import Button from 'components/common/Button/index';
import HeaderContainer from 'container/common/HeaderContainer';

const ApplicationSuccessPage = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		//
		<ApplySuccessBlock>
			<div className="title">지원서 양식 작성을 완료했어요.</div>
			<div>
				<Button applyBtn1 to="/">
					홈으로
				</Button>
				<Button applyBtn2 to="/club/manage/application">
					지원서 양식 관리
				</Button>
			</div>
		</ApplySuccessBlock>
	);
};

export default ApplicationSuccessPage;
