import ClubPostCard from 'components/ClubPostCard/index';
import { getAllPost } from 'modules/initHomePage';
import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Header, PostSection, Container } from './styles';
import { TitleKorean } from './styles';

const PostAllPage = () => {
    const dispatch = useDispatch();
    const { posts } = useSelector(({ initHomePage }) => ({
        posts: initHomePage.getAllPosts,
    }))
    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(getAllPost());
    }, [dispatch])
    return (
        <Container>
            <Header>
                <TitleKorean>인기 게시글</TitleKorean>
            </Header>
            <PostSection>
                {
                    posts && posts.content.map(post => (
                        <ClubPostCard
                            title={post.title}
                            content={post.content}
                            createdAt={post.createdAt}
                            clubName={post.club.clubName}
                            likeCount={post.likeCount}
                            postId={post.postId}
                            viewCount={post.viewCount}
                        />
                    ))
                }
            </PostSection>
        </Container>
    );
};

export default PostAllPage;