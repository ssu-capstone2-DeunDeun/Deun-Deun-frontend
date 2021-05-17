import Button from 'components/common/Button';
import React, { useEffect } from 'react';
import styled from 'styled-components';

const ApplySuccessBlock = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-top:339px;

    .title{
        font-family: NotoSansKR;
        font-size: 28px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: left;
        color:#282828;
        margin-bottom:99px;
    }
`;

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