import BasicTemplate from 'components/common/BasicTemplate';
import PostDetailForm from 'components/post/PostDetailForm';
import { getPost, getPostLike, onLikePost } from 'modules/likePost';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';

const PostDetailPage = ({ match }) => {
    const { postId } = match.params;
    // const [postData, setPostData] = useState(null);
    // const [postLike, setPostLike] = useState(null);

    const dispatch = useDispatch();
    const { postLike, postData } = useSelector(({ likePost }) => ({
        postLike: likePost.getPostLike,
        postData: likePost.getPost,
    }))

    useEffect(() => {
        dispatch(getPost(postId));
        dispatch(getPostLike(postId));
    }, [dispatch, postId]);

    // useEffect(() => {
    //     async function loadGetPost() {
    //         await getPost(postId).then(response => {
    //             setPostData(response.data);
    //         })
    //     }
    //     loadGetPost();
    // }, [postId]);

    // useEffect(() => {
    //     async function loadGetPostLike() {
    //         await getPostLike(postId).then(response => {
    //             setPostLike(response.data);
    //         })
    //     }
    //     loadGetPostLike();
    // }, [postId])
    const onClickHeart = () => {
        dispatch(onLikePost(postId));
        dispatch(getPostLike(postId));
        dispatch(getPost(postId));
    }

    return (
        <BasicTemplate postData={postData}>
            {postData && <PostDetailForm onClickHeart={onClickHeart} postData={postData} postLike={postLike} />}
        </BasicTemplate>
    );
};

export default withRouter(PostDetailPage);