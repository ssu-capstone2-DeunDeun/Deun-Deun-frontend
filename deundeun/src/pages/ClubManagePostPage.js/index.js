import ClubPostCard from 'components/ClubPostCard/index';
import { getClubPosts } from 'lib/api/post';
import { getClubsPosts } from 'modules/currentClubPostList';
import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
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

    if (posts) {
        console.log(posts);
    }
    // if (clubInfo) {
    //     const { clubName, likeCount } = clubInfo[0].clubResponseDto;
    // }
    return (
        <ClubManagePostPageContainer>
            <div className="title">게시글 리스트</div>
            <div className="postLists">
                {
                    posts &&
                    posts.content.map(post => (
                        <ClubPostCard
                            title={post.title}
                            content={post.content}
                            createdAt={post.createdAt}
                            clubName={clubInfo[0].clubResponseDto.clubName}
                            likeCount={clubInfo[0].clubResponseDto.likeCount} />
                    ))
                }
            </div>
        </ClubManagePostPageContainer>

    );
};

export default ClubManagePostPage;