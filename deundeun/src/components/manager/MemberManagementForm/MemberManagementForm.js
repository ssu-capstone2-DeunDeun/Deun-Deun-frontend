import React, { useState } from 'react';
import styled from 'styled-components';
import { MdKeyboardArrowDown, MdKeyboardArrowRight, MdClose } from "react-icons/md";
import { ImCheckboxUnchecked, ImCheckboxChecked } from "react-icons/im";
import { BiSearchAlt2 } from "react-icons/bi";
// import HealthClub from '../../img/club/HealthClub.jpeg';
import { BsThreeDots } from "react-icons/bs";
import { AiOutlinePlusCircle } from "react-icons/ai";
import Button from 'components/common/Button';


const BasicBlock = styled.div`
    margin-left:80px;
    margin-right:240px;
    display:flex;
    margin-top:55.5px;
`;


const MenuBlock = styled.div`
    margin-right:166px;
    .menu{
        font-size:18px;
        color:#bebebe;
        width:274px;
        .menuItem{
            .menuTitle{
                font-weight:500;
                height:56px;
                padding-left:26px;
                display:flex;
                align-items:center;
                
                &:hover{
                    background-color: #D7FFFF;
                    color:#282828;
                    font-weight:bold;
                }
            }
            .subMenu{
                div{
                    height:56px;
                    display:flex;
                    align-items:center;
                    padding-left:46px;
                
                    &:hover{
                        font-weight:bold;
                        color:#282828;
                    }
                }
            }
        }
    }
`;

const ContentBlock = styled.div`
    .header{
        display:flex;
        align-items:center;
        font-size:20px;
        font-weight:bold;

        .headerTitle{
            margin-right:14px;
            color:#282828;
            display:flex;
            align-items:center;
            div{
                margin-right:12.6px;
            }
        }

        .headerInfo{
            display:flex;
            align-items:center;
            margin-right:20px;
            div{
                margin-right :10px;
            }
        }
    }
    .main{
        margin-top:60px;
        width:1160px;

        .mainHeader{
            display:flex;
            justify-content:space-between;
            margin-bottom:16.5px;
            
            .mainTitle{
                font-size:28px;
                font-weight:bold;
                color:#282828;
            }

            .findUser{
                display:flex;
                align-items:center;
                border-bottom:1px solid #b2b2b2;
                width:180px;
                input{
                    border:none;
                    outline:none;
                    font-size:14px;
                    color:#b2b2b2;
                }
                svg{
                    width:13px;
                    height:13px;
                }
            }
        }

        .mainContent{
            .mainContentHeader{
                border-top:3px solid #282828;
                display:flex;
                align-items:center;
                
                height:59.4px;
                padding-left:15px;

                .skills{
                    display:flex;
                    align-items:center;
                    padding-right:402px; //변경
                    .message{
                        display:flex;
                        margin-right:17.5px;
                        svg{
                            width:20px;
                            height:20px;
                            opacity:0.2;
                        }
                    }
                    .skill{
                        text-decoration:underline;
                        margin-right:17.5px;
                        font-size:14px;
                        font-weight:bold;
                        color:#282828;
                    }
                    .roleSet{
                        cursor:pointer;
                    }
                    .authSet{
                        cursor:pointer;
                    }
                }

                .func{
                    display:flex;
                    align-items:center;
                    font-weight:bold;
                    font-size:15px;
                    color:#282828;
                    .allUnit{
                        display:flex;
                        align-items:center;
                        margin-right:52px;
                        div{
                            margin-right:3px;
                        }
                        
                    }
                    .allRole{
                        display:flex;
                        align-items:center;
                        margin-right:52px;
                        div{
                            margin-right:3px; 
                        }
                        
                    }
                    .allAuthorized{
                        display:flex;
                        align-items:center;
                        div{
                            margin-right:3px;
                        }
                    
                    }
                }
            }
        }
    }
`;

const ApplicantInfoBlock = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    height:70px;
    font-size:14px;
    font-weight:500;
    color:#282828;
    border-top:1px solid #d5d5d5;
    svg{
        width:20px;
        height:20px;
        opacity:0.2;
        padding-left:15px;
        padding-right:42px;
    }
    .userInfo{
        display:flex;
        align-items:center;
        .userImg{
            width:30px;
            height:30px;
            border-radius:50%;
            background:url("/img/club/HealthClub.jpeg");
            background-size:contain;
            margin-right:8px;
        }
        .nickname{
            width:230px;
        }
    }

    .phoneNumber{
        width:180px;
    }
    .email{
        width:230px;
    }
    .unit{
        width:110px;
    }
    .role{
        width:130px;
    }
    .authorized{
        width:110px;
    }
    .other{
        width:60px;
        svg{
            opacity:0.5;
        }
    }
`;
const PopupBlock = styled.div`
    .msgDelete{
        display:none;
    }
    .msgPopupBlock{
        width:700px;
        height:600px;
        position:absolute;
        box-shadow:15px 15px 30px 0 rgba(0,0,0,0.16);
        margin:auto;
        right:0;
        left:0;
        top:0;
        bottom:0;
        z-index:100;
        background-color:#ffffff;
        padding:38px 50px 38px 44px;
        color:#282828;

        .msgPopupTitle{
            font-size:25px;
            font-weight:900;
            margin-bottom:38px;
            display:flex;
            justify-content:space-between;
            align-items:center;
            svg{
                opacity :0.3;
                width:25px;
                height:25px;
                &:hover{
                    opacity:0.7;
                }
            }
        }
        .kind{
            font-size:15px;
            font-weight:900;
            margin-bottom:11px;
        }
        .kindItem{
            display:flex;
            align-items:center;
            font-weight:bold;
            margin-bottom:21px;
            
            svg{
                margin-right:10px;
                width:18px;
                height:18px;
                opacity:0.2;
            }
            div{
                margin-right:20px;
                font-size:14px;
            }
        }
        .receiver{
            font-size:15px;
            font-weight:bold;
            
        }
        .receiverIist{
            display:flex;
            flex-wrap:wrap;
            button{
                width:220px;
                height:32px;
                font-size:12px;
                margin:15px 8px 0 0;
                padding:8px 12.8px 6px 18px;
                color:#282828;
                background-color:#f7f7f7;
                border:none;
                display:flex;
                align-items:center;
                justify-content:center;
                svg{
                    margin-left:36.7px;
                    cursor:pointer;
                    width:15px;
                    height:15px;
                }
            }
        }
        .content{
            font-weight:bold;
            margin-top:19px;
        }
        .btn{
            text-align:center;
        }
    }
    
`;
const StyledTextarea = styled.textarea`
    width:688px;
    height:188px;
    margin-top:15px;
    margin-bottom:38px;
    font-size:14px;
    border:none;
    background-color:#f7f7f7;
    outline:none;
    padding-left:24px;
    padding-top:16px;
`;

const RoleSetBlock = styled.div`
    .roleDelete{
        display:none;
    }
    .rolePopupBlock{
        width:782px;
        height:580px;
        position:absolute;
        box-shadow:15px 15px 30px 0 rgba(0,0,0,0.16);
        margin:auto;
        right:0;
        left:0;
        top:0;
        bottom:0;
        z-index:100;
        background-color:#ffffff;
        padding:38px 40.5px 49px 44px;
        color:#282828;

        .rolePopupTitle{
            font-size:25px;
            font-weight:900;
            color:#282828;
            margin-bottom:36px;
            display:flex;
            justify-content:space-between;
            align-items:center;
            svg{
                opacity :0.3;
                width:25px;
                height:25px;
                &:hover{
                    opacity:0.7;
                }
            }
        }
        .addAuth{
            display:flex;
            align-items:center;
            justify-content:flex-end;
            font-size:14px;
            color:#b5b5b5;
            margin-bottom:11.5px;
            svg{
                margin-right:6px;
            }
        }
        .btn{
            text-align:center;
        }
    }
    
`;

const msgPopupClear = (event) => {
    const t = document.getElementById("msgPopup");
    t.className = "msgDelete";
};
const msgPopupMake = (event) => {
    const t = document.getElementById("msgPopup");
    t.className = "msgPopupBlock";
};
let sendMsgLists = [];

const rolePopupClear = (event) => {
    const t = document.getElementById("rolePopup");
    t.className = "roleDelete";
};
const rolePopupMake = (event) => {
    const t = document.getElementById("rolePopup");
    t.className = "rolePopupBlock";
};


const MemberInfo = ({ member }) => {
    const { nickname, id, phoneNumber, email, unit, role, authorized } = member;
    const [click, setClick] = useState(false);
    if (!sendMsgLists.includes(member) && click === true) sendMsgLists.push(member);
    if (sendMsgLists.includes(member) && click === false) sendMsgLists.pop(member);
    return (
        <ApplicantInfoBlock>
            {
                click === false ? <ImCheckboxUnchecked onClick={() => setClick(!click)} /> :
                    <ImCheckboxChecked onClick={() => setClick(!click)} />
            }
            <div className="userInfo">
                <div className="userImg"></div>
                <div className="nickname">{nickname} ({id})</div>
            </div>
            <div className="phoneNumber">{phoneNumber}</div>
            <div className="email">{email}</div>
            <div className="unit">{unit}기</div>
            <div className="role">{role}</div>
            <div className="authorized">{authorized}</div>
            <div className="other"><BsThreeDots /></div>
        </ApplicantInfoBlock>
    );
}

const MemberManagementForm = () => {
    const contents = {
        clubName: "IT 동아리 트와이스",
        members: [
            { nickname: "불꽃남자김상록", id: "wowowo", phoneNumber: "010-1234-5678", email: "abcd1234@gmail.com", unit: "1", role: "서버", authorized: "멤버" },
            { nickname: "안동핵주먹", id: "evergreen", phoneNumber: "010-1234-5678", email: "abcd1234@gmail.com", unit: "2", role: "디자니어", authorized: "운영진" },
            { nickname: "인생별거없어", id: "understood", phoneNumber: "010-1234-5678", email: "abcd1234@gmail.com", unit: "1", role: "서버", authorized: "멤버" },
            { nickname: "리액트짱재밌엉", id: "goddammot", phoneNumber: "010-1234-5678", email: "abcd1234@gmail.com", unit: "3", role: "프론트", authorized: "멤버" }
        ]
    }
    const { clubName, members } = contents;
    const [click, setClick] = useState(false);
    return (
        <BasicBlock>
            <MenuBlock>
                <div className="menu">
                    <div className="menuItem" >
                        <div className="menuTitle">Home</div>
                    </div>
                </div>
                <div className="menu">
                    <div className="menuItem" >
                        <div className="menuTitle">Category</div>
                    </div>
                </div>
                <div className="menu">
                    <div className="menuItem" >
                        <div className="menuTitle">MY PAGE</div>
                        <div className="subMenu add">
                            <div>내 정보 수정</div>
                            <div>나의 동아리 목록</div>
                            <div>나의 지원 목록</div>
                            <div>나의 좋아요 목록</div>
                            <div>나의 알림 신청</div>
                            <div>새 동아리 등록하기</div>
                        </div>
                    </div>
                </div>
            </MenuBlock>

            <ContentBlock>
                <div className="header">
                    <div className="headerTitle">
                        <div>동아리 관리</div>
                        <MdKeyboardArrowRight />
                    </div>
                    <div className="headerInfo">
                        <div>{clubName}</div>
                        <MdKeyboardArrowDown />
                    </div>
                    <div className="headerInfo">
                        <div>지원자 관리</div>
                        <MdKeyboardArrowDown />
                    </div>
                </div>

                <div className="main">
                    <div className="mainHeader">
                        <div className="mainTitle">{clubName}</div>
                        <div className="findUser">
                            <input type="text" placeholder="이름/닉네임" />
                            <BiSearchAlt2 />
                        </div>
                    </div>

                    <div className="mainContent">
                        <div className="mainContentHeader">
                            <div className="skills">
                                <div className="message" onClick={() => {
                                    setClick(!click);
                                    msgPopupMake();
                                }}>
                                    {
                                        click === false ? <ImCheckboxUnchecked /> :
                                            <ImCheckboxChecked />
                                    }
                                </div>
                                <div className="skill">메시지 보내기</div>
                                <div className="skill roleSet" onClick={() => rolePopupMake()}>역할 설정하기</div>
                                <div className="skill authSet" onClick={() => rolePopupMake()}>권한 설정하기</div>
                            </div>

                            <div className="func">
                                <div className="allUnit">
                                    <div >모든 기수</div>
                                    <MdKeyboardArrowDown />
                                </div>
                                <div className="allRole">
                                    <div>모든 역할</div>
                                    <MdKeyboardArrowDown />
                                </div>
                                <div className="allAuthorized">
                                    <div>모든 권한</div>
                                    <MdKeyboardArrowDown />
                                </div>
                            </div>
                        </div>
                        {
                            members.map(member => <MemberInfo id={member} member={member} />)
                        }
                    </div>
                </div>
            </ContentBlock>
            {/* 메시지 팝업창 */}
            <PopupBlock >
                <div id="msgPopup" className="msgDelete">
                    <div className="msgPopupTitle">
                        <div>메세지 보내기</div>
                        <MdClose onClick={() => {
                            msgPopupClear(); setClick(!click);
                            window.location.reload();
                            // 해결해야한다.
                        }} />
                    </div>

                    <div className="kind">종류</div>
                    <div className="kindItem">
                        <ImCheckboxUnchecked />
                        <div>SMS</div>
                        <ImCheckboxUnchecked />
                        <div>E-mail</div>
                    </div>
                    <div className="receiver">받는 사람</div>
                    <div className="receiverIist">
                        {
                            sendMsgLists.map(sendMsgList => <button id={sendMsgList}>{sendMsgList.nickname}({sendMsgList.id} )<MdClose /></button>)
                        }
                    </div>
                    <div className="content">
                        <div>내용</div>
                        <StyledTextarea placeholder="내용을 입력하세요." ></StyledTextarea>
                    </div>

                    <div className="btn">
                        <Button applyManageBtn>전송하기</Button>
                    </div>
                </div>
            </PopupBlock>

            {/* 역할 권한 설정 팝업 */}
            <RoleSetBlock >
                <div id="rolePopup" className="roleDelete">
                    <div className="rolePopupTitle">
                        <div>역할 / 권한 설정</div>
                        <MdClose onClick={() => {
                            rolePopupClear();
                            window.location.reload();
                            // 해결해야한다.
                        }} />
                    </div>
                    <div className="addAuth">
                        <AiOutlinePlusCircle />
                        <div> 새 권한 추가하기</div>
                    </div>
                    <div className="btn">
                        <Button applyManageBtn>저장하기</Button>
                    </div>
                </div>
            </RoleSetBlock>
        </BasicBlock >
    );
};

export default MemberManagementForm;