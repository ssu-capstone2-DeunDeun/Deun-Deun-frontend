import ClubPostCard from 'components/ClubPostCard/index';
import { getClubsPosts } from 'modules/currentClubPostList';
import ClubManagePage from 'pages/ClubAddPage/index';
import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { ClubManagePostPageContainer } from './styles';


const ClubManagePostPage = () => {
    const dispatch = useDispatch();
    const { clubInfo, posts } = useSelector(({ currentUserInfo, currentClubPostList }) => ({
        clubInfo: currentUserInfo.clubInfo,
        posts: currentClubPostList.getClubsPosts
    }));

    useEffect(() => {
        if (clubInfo) {
            dispatch(getClubsPosts(clubInfo[0].clubResponseDto.clubId));
        }
    }, [clubInfo, dispatch]);

    // if (clubInfo) {
    //     const { clubName, likeCount } = clubInfo[0].clubResponseDto;
    // }
    return (
        < ClubManagePostPageContainer >
            <div className="title">게시글 리스트</div>
            <div className="writeBtnBox">
                <div className="writeBtn">
                    <Link to="/club/post">새 글 작성하기</Link>
                </div>
            </div>
            <div className="postLists">
                {
                    posts &&
                    posts.content.map(post => (
                        <ClubPostCard
                            key={post.createdAt}
                            title={post.title}
                            content={post.content}
                            createdAt={post.createdAt}
                            clubName={clubInfo[0].clubResponseDto.clubName}
                            likeCount={clubInfo[0].clubResponseDto.likeCount} />
                    ))
                }
            </div>
        </ ClubManagePostPageContainer>
    )
};

export default ClubManagePostPage;