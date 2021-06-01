import Button from 'components/common/Button/index';
import { changeField, initialField } from 'modules/writePost';
import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { ClubWritePostBlock } from './styles';

const ClubWritePost = ({ history }) => {
    const dispatch = useDispatch();
    const { title, body, thumbnailUrl } = useSelector(({ writePost }) => ({
        title: writePost.title,
        body: writePost.content,
        thumbnailUrl: writePost.thumbnailUrl,
    }))

    useEffect(() => {
        return () => {
            dispatch(initialField());
        }
    }, [dispatch]);

    const onChangeField = (e) => {
        const { value, name } = e.target;
        dispatch(changeField({ key: name, value }));
    }

    return (
        <ClubWritePostBlock>
            <form>
                <input className="title" value={title} name="title" type="text" onChange={onChangeField} placeholder="제목을 입력하세요" />
                <textarea className="body" value={body} name="content" onChange={onChangeField} placeholder="내용을 입력해주세요." />
                <div className="btn">
                    <Button postBtn1>등록하기</Button>
                    <Button postBtn2>취소하기</Button>
                </div>
            </form>
        </ClubWritePostBlock>
    );
};

export default withRouter(ClubWritePost);