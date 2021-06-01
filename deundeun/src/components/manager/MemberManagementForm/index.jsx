import React, { useState } from 'react';
import { MdKeyboardArrowDown, MdClose } from "react-icons/md";
import { ImCheckboxUnchecked, ImCheckboxChecked } from "react-icons/im";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { ApplicantInfoBlock, BasicBlock, ContentBlock, PopupBlock, RoleSetBlock, StyledTextarea } from './styles';

import DropdownMenu from 'components/common/DropdownMenu/index';
import DropdownMenuDot from 'components/common/DropdownMenuDot/index';
import Button from 'components/common/Button/index';


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

	const [menuIndex, setMenuIndex] = useState(0);
	const menu = ['멤버 정보 수정', '강제 퇴장'];


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
			<div className="other">
				<DropdownMenuDot
					options={menu}
					selectedIndex={menuIndex}
					setSelectedIndex={setMenuIndex}
				/>
			</div>
		</ApplicantInfoBlock >
	);
}


const MemberManagementForm = () => {
	const contents = {
		clubName: "IT 동아리 트와이스",
		members: [
			{ nickname: "불꽃남자상록", id: "wowowo", phoneNumber: "010-1234-5678", email: "abcd1234@gmail.com", unit: "1", role: "서버", authorized: "멤버" },
			{ nickname: "안동핵주먹", id: "evergreen", phoneNumber: "010-1234-5678", email: "abcd1234@gmail.com", unit: "2", role: "디자니어", authorized: "운영진" },
			{ nickname: "인생별거없어", id: "understood", phoneNumber: "010-1234-5678", email: "abcd1234@gmail.com", unit: "1", role: "서버", authorized: "멤버" },
			{ nickname: "리액트짱재밌엉", id: "goddammot", phoneNumber: "010-1234-5678", email: "abcd1234@gmail.com", unit: "3", role: "프론트", authorized: "멤버" }
		]
	}
	const [unitIndex, setUnitIndex] = useState(0);
	const unit = ['1기', '2기', '3기'];

	const [roleIndex, setRoleIndex] = useState(0);
	const role = ['서버', '디자이너', '개발자'];

	const [authIndex, setAuthIndex] = useState(0);
	const auth = ['운영진', '멤버'];

	const [click, setClick] = useState(false);
	const { clubName, members } = contents;
	return (
		<BasicBlock>
			<ContentBlock>
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
									{`${unit[unitIndex]}`}
									<DropdownMenu
										options={unit}
										selectedIndex={unitIndex}
										setSelectedIndex={setUnitIndex}
									/>
								</div>
								<div className="allRole">
									{`${role[roleIndex]}`}
									<DropdownMenu
										options={role}
										selectedIndex={roleIndex}
										setSelectedIndex={setRoleIndex}
									/>
								</div>
								<div className="allAuthorized">
									{`${auth[authIndex]}`}
									<DropdownMenu
										options={auth}
										selectedIndex={authIndex}
										setSelectedIndex={setAuthIndex}
									/>
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
							// window.location.reload();
							// // 해결해야한다.
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

					<div className="msgSubmitBtn">
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
							// window.location.reload();
							// 해결해야한다.
						}} />
					</div>
					<div className="addAuth">
						<AiOutlinePlusCircle />
						<div> 새 권한 추가하기</div>
					</div>
					<div className="roleSetBtn">
						<Button applyManageBtn>저장하기</Button>
					</div>
				</div>
			</RoleSetBlock>
		</BasicBlock >
	);
};

export default MemberManagementForm;