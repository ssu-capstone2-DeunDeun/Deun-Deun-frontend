import BasicTemplate from 'components/common/BasicTemplate';
import PostDetailForm from 'components/post/PostDetailForm';
import { getPost } from 'lib/api/post';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

const PostDetailPage = ({ match }) => {
    const { postId } = match.params;
    const [postData, setPostData] = useState(null);

    useEffect(() => {
        async function loadGetPost() {
            await getPost(postId).then(response => {
                setPostData(response.data);
            })
        }
        loadGetPost();
    }, [postId]);


    return (
        <BasicTemplate postData={postData}>
            {postData && <PostDetailForm postData={postData} />}
        </BasicTemplate>
    );
};

export default withRouter(PostDetailPage);