import Button from 'components/common/Button/Button';
import React, { useEffect } from 'react';
import { ApplySuccessBlock } from './styles';

const ApplySuccess = () => {
	useEffect(() => {
		window.scrollTo(0, 0);  // 화면 전환시 스크롤 맨 위로 설정하기
	}, []);

	return (
		<ApplySuccessBlock>
			<div className="title">지원을 완료했어요.</div>
			<div>
				<Button applyBtn1 to="/">홈으로</Button>
				<Button applyBtn2 to="/">지원목록 보러가기</Button>
			</div>
		</ApplySuccessBlock >
	);
};

export default ApplySuccess;