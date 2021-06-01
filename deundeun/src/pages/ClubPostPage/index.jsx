import ClubWritePost from 'components/ClubWritePost/index';
import Header from 'components/common/Header/index';
import HeaderContainer from 'container/common/HeaderContainer';
import React from 'react';

const ClubPostPage = () => {
    return (
        <>
            <HeaderContainer />
            <ClubWritePost />
        </>
    );
};

export default ClubPostPage;