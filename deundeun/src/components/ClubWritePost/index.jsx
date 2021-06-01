import Button from 'components/common/Button/index';
import React from 'react';
import { ClubWritePostBlock } from './styles';

const ClubWritePost = () => {
    return (
        <ClubWritePostBlock>
            <form>
                <input className="title" type="text" placeholder="제목을 입력하세요" />
                <textarea className="body" placeholder="내용을 입력해주세요." />
                <div className="btn">
                    <Button postBtn1>등록하기</Button>
                    <Button postBtn2>취소하기</Button>
                </div>
            </form>
        </ClubWritePostBlock>
    );
};

export default ClubWritePost;