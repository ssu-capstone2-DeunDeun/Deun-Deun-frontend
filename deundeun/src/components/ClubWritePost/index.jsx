import Button from 'components/common/Button/index';
import { changeField, initialField, writePost } from 'modules/write';
import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { ClubWritePostBlock } from './styles';

const ClubWritePost = ({ history }) => {
    const dispatch = useDispatch();
    const { title, body, thumbnailUrl, post, postError } = useSelector(({ write }) => ({
        title: write.title,
        body: write.content,
        thumbnailUrl: write.thumbnailUrl,
        post: write.post,
        postError: write.postError,
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

    const onPublish = (e) => {
        // 임의의 값
        dispatch(writePost(20, { title, body }));
        e.preventDefault();
    }
    const onCancel = (e) => {
        e.preventDefault();
        history.goBack();
    }
    return (
        <ClubWritePostBlock>
            <form>
                <input className="title" value={title} name="title" type="text" onChange={onChangeField} placeholder="제목을 입력하세요" />
                <textarea className="body" value={body} name="content" onChange={onChangeField} placeholder="내용을 입력해주세요." />
                <div className="btn">
                    <Button postBtn1 onClick={onPublish}>등록하기</Button>
                    <Button postBtn2 onClick={onCancel}>취소하기</Button>
                </div>
            </form>
        </ClubWritePostBlock>
    );
};

export default withRouter(ClubWritePost);