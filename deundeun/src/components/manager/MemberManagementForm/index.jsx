import React, { useState } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowRight, MdClose } from "react-icons/md";
import { ImCheckboxUnchecked, ImCheckboxChecked } from "react-icons/im";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { ApplicantInfoBlock, BasicBlock, ContentBlock, MenuBlock, PopupBlock, RoleSetBlock, StyledTextarea } from './styles';
import Button from 'components/common/Button/Button';

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
			{/* <MenuBlock>
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
			</MenuBlock> */}

			<ContentBlock>
				{/* <div className="header">
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
				</div> */}

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