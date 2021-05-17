import React, { useState } from 'react';
import styled from 'styled-components';
// import HealthClub from "../../img/club/HealthClub.jpeg";
import { FiShare2 } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";

const PostDetailFormBlock = styled.div`
    width:1080px;
    margin:0 auto;

    .header{
        border-bottom:3px solid #282828;
        padding-bottom:18.4px;
        .headerContent{
            .post{
                font-size:16px;
                font-weight:500;
                color:#555555;
                margin-bottom:4px;
            }
            .title{
                font-size:28px;
                font-weight:bold;
                color:#282828;
                margin-bottom:15px;
            }
            .info{
                display:flex;
                justify-content:space-between;

                .postInfo{
                    display:flex;
                    font-size:15px;
                    font-weight:normal;

                    .nickname{
                        margin-right:10px;
                        font-weight:bold;
                    }  
                    .date{
                        color:#a7a7a7;
                        margin-right:13px;
                    }
                    .viewBlock{
                        margin-right:5px;
                    }
                    .viewNum{
                        color:#a7a7a7;
                    }
                }
                .btn{
                    display:flex;
                    align-items:center;
                    cursor:pointer;

                    .heart{
                        margin-right:9.7px;
                        width:17.4px;
                        height:17.4px;
                        
                    }
                    .share{
                        margin-left:19.4px;
                        margin-right:10.4px;
                        width:17.4px;
                        height:17.4px;
                    }
                    .shareText{
                        color:#a7a7a7;
                        text-decoration:underline;
                    }
                    .dot{
                        margin-left:14.7px;
                        width:17.4px;
                        height:17.4px;
                    }
                }
            }
        }
    }

    .main{
        margin-top:47.1px;
        .mainContent{
            font-size:16px;
            color:#282828;
            margin-bottom:108px;
        }

        .postlist{
            div{
                display:flex;
                font-size:16px;
                font-weight:500; 
                margin-bottom:1px;
                .listInfo{
                    color:#818181;
                    margin-right : 25.8px;
                }
                .listTitle{
                    color:#282828;
                }
            }
            padding-bottom:11.2px;
            border-bottom:1px solid #cccccc; 
        }
    }

    .footer{
        margin-bottom:160.5px;
        .addComment{
            .btn{
                text-align:right;
                button{
                border:1px solid #707070;
                width:120px;
                height:44px;
                background-color:#ffffff;
                font-size:13px;
                font-weight:bold;
                color:#383838;
                cursor:pointer;
                }
            }
            margin-bottom:13.2px;
        }
        .commentList{
            .commentCount{
                font-size:20px;
                font-weight:500;
                color :#282828;
                margin-bottom:32.8px;
            }
        }
    }
`;

const StyledTextarea = styled.textarea`
    width:1055px;
    height:106px;
    border:none;
    background-color:#f7f7f7;
    outline:none;
    margin-top:40.3px;
    margin-bottom:22.5px;
    padding-left:22.6px;
    padding-top:23.1px;
    font-size:15px;
    color:#b7b7b7;
`;


const CommentListItemBlock = styled.div`
    width: 1080px;
    padding-top:19.5px;
    padding-bottom:19.5px;
    border-bottom:1px solid #d9d9d9;
    display:flex;
    align-items:center;
    justify-content:space-between;

    /* border:1px solid gray; */
    .item{
        display:flex;
    
        .itemInfo{
            display:flex;
            align-items:center;
            
            .writeImg{
                width:44px;
                height:44px;
                border-radius:50%;
                border:1px solid gray;
                background: url("/img/club/HealthClub.jpeg");
                background-size:contain;
            }
            .writer{
                color:#282828;
                font-size:16px;
                font-weight:bold;
                margin-left: 14px;
                margin-right:12.6px;
            }
            .date{
                font-size:14px;
                color:#a7a7a7;
            }
        }
        .itemContent{
            font-size:14px;
            color :#282828;
            margin-top:10px;
            padding-left:60px;
            width: 900px;  
            /* 내가 임의로 설정한 값 */
        }
    }
    .btn{
        display:flex;
        align-items:center;
        button{
            font-size:12px;
            color:#282828;
            padding-top:10px;
            padding-bottom:10px;
            background-color:#ffffff;
            border:solid 1px #707070;
            cursor:pointer;
            width: 55px;
        }
    }
`;

const CommentList = ({ comments }) => {
    return (
        <div>
            {
                comments.map(comment => <CommentListItem id={comment} comment={comment} />)
            }
        </div>
    );
}

const CommentListItem = ({ comment }) => {
    const { writer, publishedDate, content } = comment;
    const [click, setClick] = useState(false);

    return (
        <CommentListItemBlock>
            <div className="item">
                <div>
                    <div className="itemInfo">
                        <div className="writeImg"></div>
                        <div className="writer">{writer}</div>
                        <div className="date">{publishedDate}</div>
                    </div>
                    <div className="itemContent">
                        {
                            click === true ? content :
                                content.length > 70 ? `${content.slice(0, 70)}...` : content
                        }
                    </div>
                </div>
            </div>
            <div className="btn">
                <button onClick={() => setClick(!click)} >{click === false ? `${"더보기"}` : `${"접기"}`}</button>
            </div>
        </CommentListItemBlock>
    );
}

const PostDetailForm = () => {
    const contents = {
        sector: "IT/개발", clubName: "IT 동아리 트와이스", postListTitles: ["다람쥐 헌 쳇바퀴에 타고파. 다람쥐 헌 쳇바퀴에 타고파",
            "다람쥐 헌 쳇바퀴에 타고파. 다람쥐 헌 쳇바퀴에 타고파", "다람쥐 헌 쳇바퀴에 타고파. 다람쥐 헌 쳇바퀴에 타고파"],
        postDetailTitle: "센터는 지효인가? 나연인가", nickname: "안동핵주먹", publishedDate: "2021.01.01 12:12", likesNum: 1234, views: 4000, content: "안녕하세요 헬스동아리 대표 회장 김상록입니다. 요즘에 헬스장을 가보면, 프리웨이트 기구보다는 머신운동이 많이 배치되어있습니다. 이제는 유행이 흘러간 것입니다. 다소 부상의 위험가 초보자가 따라가기 힘든 프리웨이트보다 인체의 구조에 맞게 만들어진 머신기구들이 각광받고 있는 셈입니다. 그래서 저는 오늘도 운동하러 갑니다. 여러분들도 득근하세요!!안녕하세요 헬스동아리 대표 회장 김상록입니다. 요즘에 헬스장을 가보면, 프리웨이트 기구보다는 머신운동이 많이 배치되어있습니다. 이제는 유행이 흘러간 것입니다. 다소 부상의 위험가 초보자가 따라가기 힘든 프리웨이트보다 인체의 구조에 맞게 만들어진 머신기구들이 각광받고 있는 셈입니다. 그래서 저는 오늘도 운동하러 갑니다. 여러분들도 득근하세요!!안녕하세요 헬스동아리 대표 회장 김상록입니다. 요즘에 헬스장을 가보면, 프리웨이트 기구보다는 머신운동이 많이 배치되어있습니다. 이제는 유행이 흘러간 것입니다. 다소 부상의 위험가 초보자가 따라가기 힘든 프리웨이트보다 인체의 구조에 맞게 만들어진 머신기구들이 각광받고 있는 셈입니다. 그래서 저는 오늘도 운동하러 갑니다. 여러분들도 득근하세요!!",
        nextPostTitle: "제목,제목,제목,제목,제목,제목", beforePostTitle: "제목,제목,제목,제목,제목,제목", comments: [
            { writer: "헬스왕김상록", publishedDate: "2021.01.01 12:12", content: "프리웨이트 짱짱맨!! 아주 좋아용프리웨이트 짱짱맨!! 먼저 가벼운 스트레칭과 맨손체조 등으로 준비 운동을 하는 것이 좋습니다. 뻣뻣해진 관절을 늘려주는 준비 운동을 통해 근육의 온도 및 체온을 높이고 관절의 부상과 근육 결림을 예방할 수 있습니다.아주 좋아용프리웨이트 짱짱맨!! 아주 좋아용프리웨이트 짱짱맨!! 아주 좋아용프리웨이트 짱짱맨!! 아주 좋아용프리웨이트 짱짱맨!! 아주 좋아용 " }, { writer: "3대 500", publishedDate: "2021.01.01 12:12", content: "프리웨이트 짱짱맨!! 아주 좋아용먼저 가벼운 스트레칭과 맨손체조 등으로 준비 운동을 하는 것이 좋습니다. 뻣뻣해진 관절을 늘려주는 준비 운동을 통해 근육의 온도 및 체온을 높이고 관절의 부상과 근육 결림을 예방할 수 있습니다. " },
            { writer: "헬스천재김상록", publishedDate: "2021.01.01 12:12", content: "프먼저 가벼운 스트레칭과 맨손체조 등으로 준비 운동을 하는 것이 좋습니다. 뻣뻣해진 관절을 늘려주는 준비 운동을 통해 근육의 온도먼저 가벼운 스트레칭과 맨손체조 등으로 준비 운동을 하는 것이 좋습니다. 뻣뻣해진 관절을 늘려주는 준비 운동을 통해 근육의 온도 및 체온을 높이고 관절의 부상과 근육 결림을 예방할 수 있습니다. 및 체온을 높이고 관절의 부상과 근육 결림을 예방할 수 있습니다.리웨이트 짱짱맨!! 아주 좋아용" }, { writer: "방구석헬창", publishedDate: "2021.01.01 12:12", content: "프리웨이트먼저 가벼운 스트레칭과 맨손체조 등으로 준비 운동을 하는 것이 좋습니다. 뻣뻣해진 관절을 늘려주는 준비 운동을 통해 근육의 온도 및 체온을 높이고 관절의 부상과 근육 결림을 예방할 수 있습니다. 짱짱맨!! 아주 좋아용 " }, { writer: "헬스isNo.1", publishedDate: "2021.01.01 12:12", content: "프리웨이트 짱짱맨먼저 가벼운 스트레칭과 맨손체조 등으로 준비 운동을 하는 것이 좋습니다. 뻣뻣해진 관절을 늘려주는 준비 운동을 통해 근육의 온도 및 체온을 높이고 관절의 부상과 근육 결림을 예방할 수 있습니다.!! 아주 좋아용 " }
        ],
    };
    const { postDetailTitle, nickname, publishedDate, likesNum, views, content, nextPostTitle, beforePostTitle, comments } = contents;

    return (
        <PostDetailFormBlock>
            <div className="header">
                <div className="headerContent">
                    <div className="post">게시글</div>
                    <div className="title">{postDetailTitle}</div>

                    <div className="info">
                        <div className="postInfo">
                            <div className="nickname">{nickname}</div>
                            <div className="date">{publishedDate}</div>
                            <div className="viewBlock">조회수</div>
                            <div className="viewNum">{views}</div>
                        </div>
                        <div className="btn">
                            <div className="heart"><AiOutlineHeart /></div>
                            <div>{likesNum}</div>
                            <div className="share"><FiShare2 /></div>
                            <div className="shareText">공유하기</div>
                            <div className="dot"><BsThreeDots /></div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="main">
                <div className="mainContent">{content}</div>
                <div className="postlist">
                    <div>
                        <div className="listInfo">다음 글</div>
                        <div className="listTitle">{nextPostTitle}</div>
                    </div>
                    <div>
                        <div className="listInfo">이전 글</div>
                        <div className="listTitle">{beforePostTitle}</div>
                    </div>
                </div>
            </div>

            <div className="footer">
                <div className="addComment">
                    <StyledTextarea placeholder="댓글을 입력하세요." ></StyledTextarea>
                    <div className="btn">
                        <button>등록하기</button>
                    </div>
                </div>
                <div className="commentList">
                    <div className="commentCount">댓글 ({Object.keys(comments).length}개)</div>
                    <div>
                        <CommentList comments={comments} />
                    </div>
                </div>
            </div>

        </PostDetailFormBlock>
    );
};
export default PostDetailForm;