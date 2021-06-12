import React from 'react';
import { Content, Header, CardContainer } from './styles';
import { TitleKorean } from 'components/RecruitingClubSection/styles';
import ClubPostCard from 'components/ClubPostCard';
import { ContentKorean } from 'components/PopularClubSection/styles';
import { withRouter } from 'react-router-dom';

const ClubPostSection = ({ popularPostDtos, history }) => {
	const onMove = () => {
		history.push('/post/all');
	}
	return (
		//
		<>
			<Header>
				<TitleKorean>인기 게시글</TitleKorean>
				<ContentKorean onClick={onMove} id="posts" >
					전체보기
				</ContentKorean>
			</Header>
			<CardContainer>
				<Content>
					{
						popularPostDtos && popularPostDtos.map(post =>
							<ClubPostCard
								title={post.title}
								content={post.content}
								createdAt={post.createdAt}
								clubName={post.clubName}
								likeCount={post.likeCount}
								postId={post.postId}
								viewCount={post.viewCount}
							/>
						)
					}
				</Content>
			</CardContainer>
		</>
	);
};

export default withRouter(ClubPostSection);
