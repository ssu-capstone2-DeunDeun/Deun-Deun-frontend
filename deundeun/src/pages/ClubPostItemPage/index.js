import React from 'react';
import { useEffect } from 'react';
import { ClubWritePostBlock } from './styles';
import Button from 'components/common/Button/index';
import { changeField, initPost, updatePost } from 'modules/write';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';

const ClubPostItemPage = ({ match, history }) => {
    const { postId } = match.params;
    const dispatch = useDispatch();
    const { initpost, title, content, thumbnailUrl, clubInfo } = useSelector(({ write, currentUserInfo }) => ({
        initpost: write.initpost,
        title: write.title,
        content: write.content,
        thumbnailUrl: write.thumbnailUrl,
        clubInfo: currentUserInfo.clubInfo,
    }));
    console.log(initpost);


    useEffect(() => {
        dispatch(initPost(postId))
    }, [postId, dispatch])

    useEffect(() => {
        if (initpost) {
            dispatch(changeField({ key: "title", value: initpost.title }));
            dispatch(changeField({ key: "content", value: initpost.content }));
        }
    }, [initpost, dispatch])


    const onChangeField = (e) => {
        const { value, name } = e.target;
        dispatch(changeField({ key: name, value }));
    }

    const onUpdate = (e) => {
        const postRequestDto = { title, content, thumbnailUrl };
        dispatch(updatePost({ postRequestDto, postId }));
        history.push('/club/manage/post');
        e.preventDefault();
    }

    const onCancel = (e) => {
        e.preventDefault();
        history.goBack();
    }

    return (
        <ClubWritePostBlock>
            <form>
                <input className="title" name="title" value={title} type="text" onChange={onChangeField} placeholder="제목을 입력하세요" />
                <textarea className="body" name="content" value={content} onChange={onChangeField} placeholder="내용을 입력해주세요." />
                <div className="btn">
                    <Button postBtn1 onClick={onUpdate}>수정하기</Button>
                    <Button postBtn2 onClick={onCancel}>취소하기</Button>
                </div>
            </form>
        </ClubWritePostBlock>
    );
};

export default withRouter(ClubPostItemPage);