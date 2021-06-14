import BasicTemplate from 'components/common/BasicTemplate';
import PostDetailForm from 'components/post/PostDetailForm';
import { getPost, getPostLike, onLikePost, inputComment } from 'modules/likePost';
import React, { useCallback } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';

const PostDetailPage = ({ match }) => {
	const { postId } = match.params;
	const [like, setLike] = useState(false);
	// const [postData, setPostData] = useState(null);
	// const [postLike, setPostLike] = useState(null);

	const dispatch = useDispatch();
	const { postLike, postData, commentValue } = useSelector(({ likePost }) => ({
		postLike: likePost.getPostLike,
		postData: likePost.getPost,
		commentValue: likePost.commentValue
	}));

	// async function loadGetPost() {
	// 	await getPost(postId).then((response) => {
	// 		// setPostData(response.data);
	// 		console.log(response.data);
	// 	});
	// }

	// async function loadGetPostLike() {
	// 	await getPostLike(postId).then((response) => {
	// 		// setPostLike(response.data);
	// 		console.log(response.data);
	// 	});
	// }

	useEffect(() => {
		window.scrollTo(0, 0);
		dispatch(getPost(postId));
		dispatch(getPostLike(postId));
	}, []);

	// useEffect(() => {
	// 	loadGetPost();
	// }, []);

	// useEffect(() => {
	// 	loadGetPostLike();
	// }, []);

	const onClickHeart = useCallback(
		(e) => {
			e.preventDefault();
			dispatch(onLikePost(postId));
			dispatch(getPost(postId));
			dispatch(getPostLike(postId));
		},
		[dispatch, postId]
	);

	useEffect(() => {
		console.log(postLike);
	}, [postLike]);

	const onChangeInput = (e) => {
		dispatch(inputComment({ type: 'commentValue', value: e.target.value }));
	};

	return (
		<BasicTemplate postData={postData}>
			{postData && (
				<PostDetailForm
					commentValue={commentValue}
					onChangeInput={onChangeInput}
					onClickHeart={onClickHeart}
					postData={postData}
					postLike={postLike}
				/>
			)}
		</BasicTemplate>
	);
};

export default withRouter(PostDetailPage);
