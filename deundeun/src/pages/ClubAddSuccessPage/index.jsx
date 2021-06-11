import { ApplySuccessBlock } from 'components/apply/ApplySuccess/styles';
import React, { useEffect } from 'react';
import Button from 'components/common/Button/index';
import HeaderContainer from 'container/common/HeaderContainer';

const ClubAddSuccessPage = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		//
		<ApplySuccessBlock>
			<div className="title">동아리 등록을 완료했어요.</div>
			<div>
				<Button applyBtn1 to="/">
					홈으로
				</Button>
				<Button applyBtn2 to="/club/manage/modify">
					동아리 관리 메뉴로 이동
				</Button>
			</div>
		</ApplySuccessBlock>
	);
};

export default ClubAddSuccessPage;
