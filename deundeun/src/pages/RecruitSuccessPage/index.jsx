import { ApplySuccessBlock } from 'components/apply/ApplySuccess/styles';
import React, { useEffect } from 'react';
import Button from 'components/common/Button/index';
import HeaderContainer from 'container/common/HeaderContainer';

const RecruitSuccessPage = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		//
		<ApplySuccessBlock>
			<div className="title">모집 공고 등록을 완료했어요.</div>
			<div>
				<Button applyBtn1 to="/">
					홈으로
				</Button>
				<Button applyBtn2 to="/club/manage/recruit">
					모집 공고 관리
				</Button>
			</div>
		</ApplySuccessBlock>
	);
};

export default RecruitSuccessPage;
