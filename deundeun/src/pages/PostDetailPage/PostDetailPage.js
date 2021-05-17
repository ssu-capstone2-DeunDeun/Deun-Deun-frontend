import BasicTemplate from 'components/common/BasicTemplate';
import PostDetailForm from 'components/post/PostDetailForm';
import React from 'react';

const PostDetailPage = () => {
    return (
        <BasicTemplate club="IT동아리 일리네어" sector="IT / 개발">
            <PostDetailForm />
        </BasicTemplate>
    );
};

export default PostDetailPage;