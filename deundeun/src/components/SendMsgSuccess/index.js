import Button from 'components/common/Button/index';
import React, { useEffect } from 'react';
import { ApplySuccessBlock } from './styles';

const SendMsgSuccess = (props) => {
	useEffect(() => {
		window.scrollTo(0, 0); // 화면 전환시 스크롤 맨 위로 설정하기
	}, []);

	return (
		<ApplySuccessBlock>
			<div className="title">메세지 전송을 완료했어요.</div>
			<div>
				<Button applyBtn1 to="/">
					홈으로
				</Button>
				{props.applicant ? (
					<Button applyBtn2 to="/club/manage/applicant">
						지원자 관리 페이지
					</Button>
				) : (
					<Button applyBtn2 to="/club/manage/member">
						멤버 관리 페이지
					</Button>
				)}
			</div>
		</ApplySuccessBlock>
	);
};

export default SendMsgSuccess;
