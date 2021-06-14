import { ApplySuccessBlock } from 'components/apply/ApplySuccess/styles';
import React, { useEffect } from 'react';
import Button from 'components/common/Button/index';
import HeaderContainer from 'container/common/HeaderContainer';

const ApplySuccessPage = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		//
		<ApplySuccessBlock>
			<div className="title">지원서 작성을 완료했어요.</div>
			<div>
				<Button applyBtn1 to="/">
					홈으로
				</Button>
				<Button applyBtn2>나의 지원서 관리</Button>
			</div>
		</ApplySuccessBlock>
	);
};

export default ApplySuccessPage;
