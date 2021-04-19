import Button from 'components/common/Button';
import React, { useState } from 'react';
import styled from 'styled-components';

const RegisterFormBlock = styled.div`
        width:1100px;
        margin:0 auto;
`;

const RegisterInfoBox = styled.div`
    .step{
        font-family: GmarketSans;
        font-size: 32px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.19;
        letter-spacing: normal;
        text-align: left;
        color: #282828;
        margin-bottom:14.6px;
    }
    .info{
        font-family: NotoSansKR;
        font-size: 32px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.47;
        letter-spacing: normal;
        text-align: left;
        color: #282828;
        margin-bottom:102.5px;
    }
`;

const SelectTags = styled.div`
    display:flex;
    flex-wrap:wrap;

`;

const TagItem = styled.div`
    width:120px;
    height:40px;
    border:1px solid #000000;
    border-radius:10px;
    display:flex;
    align-items:center;
    justify-content:center;
    padding:5px 30.1px 9px 22.7px;
    margin:0 15.1px 23.5px 0;
    font-size:22px;
    cursor:pointer;

    &:hover{
        font-weight:bold;
        color:#ced4da;
    }
    
`;

const TagsBlock = styled.div`
    width:1000px;
    margin:0 auto;
`;


const TagsBox = styled.div`
    .subtitle{
        font-size:25px;
        font-weight:bold;
        line-height:1.48;
        margin-bottom:37.5px;
        color:#282828;
    }
    margin-bottom:100px;
`;

const TagListBlock = styled.div`
        .subtitle{
            font-size:25px;
            font-weight:bold;
            line-height:1.48;
            margin-bottom:37.5px;
            color:#282828;
        }
        .taglist_title{
            font-size:25px;
            font-weight:bold;
            line-height:1.48;
            margin-bottom:37.5px;
            color:#282828;

            border-top:1px solid gray;
            padding-top:15px;
        }

        .taglist_subInfo{
            color:red;
            font-size:20px;
            line-height:1.48;
        }
        
`;

const ButtonBlock = styled.div`
    text-align:center;
    margin-top:85px; 
`;



const RegisterFormNext = () => {
    const tag1 = ["# 야구", "# 축구", "# 배드민턴", "# 미식축구", "# 볼링", "# 탁구", "# 풋살", "# 역도", "# 보디빌딩", "# 유도"];
    const tag2 = ["# 김상록", "# 신상현", "# 이인후", "# 정수영", "# 전연준", "# 전연준1", "# 전연준2", "# 전연준3", "# 전연준4", "# 전연준5"];
    const tag3 = ["# 데드리프트", "# 랫풀다운", "# 바벨로우", "# 덤벨로우", "# 암풀다운", "# 시티드로우", "# 벤치프레스", "# 턱걸이", "# 바벨컬", "# 덤벨컬"];

    const [tagsList, setTagsList] = useState([]);

    const onInsert = (tag) => {
        if (tagsList.includes(tag)) {
            return;
        }
        setTagsList([...tagsList, tag]);
    }

    const onRemove = (tagList) => {
        setTagsList(tagsList.filter(tag => tag !== tagList));
    }
    return (
        <RegisterFormBlock>
            <RegisterInfoBox>
                <div class="step">STEP 2.</div>
                <div class="info">
                    <div>닉네임님, 환영합니다!</div>
                    <div>관심있는 태그를 설정해주세요.</div>
                </div>
            </RegisterInfoBox>

            <TagsBlock>
                <TagsBox>
                    <div class="subtitle">관심 태그 설정하기 1</div>
                    <SelectTags>
                        {tag1.map(tag => (<TagItem onClick={
                            () => onInsert(tag)} id={tag}>{tag}</TagItem>))}
                    </SelectTags>
                </TagsBox>
                <TagsBox>
                    <div class="subtitle">관심 태그 설정하기 2</div>
                    <SelectTags>
                        {tag2.map(tag => (<TagItem onClick={
                            () => onInsert(tag)} id={tag}>{tag}</TagItem>))}
                    </SelectTags>
                </TagsBox>
                <TagsBox>
                    <div class="subtitle">관심 태그 설정하기 3</div>
                    <SelectTags>
                        {tag3.map(tag => (<TagItem onClick={
                            () => onInsert(tag)} id={tag}>{tag}</TagItem>))}
                    </SelectTags>
                </TagsBox>

                <TagListBlock>
                    <div class="taglist_title">나의 태그 목록</div>
                    <SelectTags>
                        {tagsList.map(tagList => (<TagItem onClick={(
                        ) => onRemove(tagList)} id={tagList}>{tagList}</TagItem>))}
                    </SelectTags>
                    {
                        tagsList.length !== 0 && <div class="taglist_subInfo">* 클릭 시 삭제됩니다.</div>
                    }
                </TagListBlock>
                <ButtonBlock>
                    <Button right gray to="/">건너뛰기</Button>
                    <Button to="/">가입 완료하기</Button>
                </ButtonBlock>
            </TagsBlock>
        </RegisterFormBlock >
    );
};

export default RegisterFormNext;