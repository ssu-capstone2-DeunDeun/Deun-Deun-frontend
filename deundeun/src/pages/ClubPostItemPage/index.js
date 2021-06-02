import React from 'react';
import { useEffect } from 'react';
import { ClubWritePostBlock, DeleteModal, ModalBox } from './styles';
import Button from 'components/common/Button/index';
import { changeField, deletePost, initialField, initPost, updatePost } from 'modules/write';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import HeaderContainer from 'container/common/HeaderContainer';
import { RiDeleteBinLine } from "react-icons/ri";

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

    useEffect(() => {
        return () => {
            dispatch(initialField());
        }
    }, [dispatch]);

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

    const onDelete = (e) => {
        dispatch(deletePost(postId));
        history.push('/club/manage/post');
        e.preventDefault();
    }

    const onOpen = () => {
        const modal = document.getElementById("modalId");
        modal.className = "make";
    }
    const onClose = () => {
        const modal = document.getElementById("modalId");
        modal.className = "delete";
    }


    return (
        <>
            <HeaderContainer />
            <ClubWritePostBlock>
                <form>
                    <div className="main">
                        <input className="title" name="title" value={title} type="text" onChange={onChangeField} placeholder="제목을 입력하세요" />
                        <RiDeleteBinLine onClick={onOpen} />
                    </div>
                    <textarea className="body" name="content" value={content} onChange={onChangeField} placeholder="내용을 입력해주세요." />
                    <div className="btn">
                        <Button postBtn1 onClick={onUpdate}>수정하기</Button>
                        <Button postBtn2 onClick={onCancel}>취소하기</Button>
                    </div>
                </form>
            </ClubWritePostBlock>

            <DeleteModal>
                <div id="modalId" className="delete">
                    <ModalBox>
                        <div className="deleteBtn">게시글을 삭제하시겠습니까?</div>
                        <div className="removeBtn">
                            <Button removeBtn1 onClick={onDelete}>예</Button>
                            <Button removeBtn2 onClick={onClose}>아니오</Button>
                        </div>
                    </ModalBox>
                </div>

            </DeleteModal>

        </>
    );
};

export default withRouter(ClubPostItemPage);