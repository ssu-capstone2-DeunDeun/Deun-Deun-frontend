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

const rolePopupClear = (event) => {
	const t = document.getElementById("rolePopup");
	t.className = "roleDelete";
};
const rolePopupMake = (event) => {
	const t = document.getElementById("rolePopup");
	t.className = "rolePopupBlock";
};


let sendMsgLists = [];
let msgLists = [];

const MemberInfo = ({ info }) => {
	const { nickname, userId, email, positionName, generation, admin } = info;
	const [click, setClick] = useState(false);

	const [menuIndex, setMenuIndex] = useState(0);
	const menu = ['멤버 정보 수정', '강제 퇴장'];


	if (!sendMsgLists.includes(nickname) && click === true) {
		sendMsgLists.push(nickname);
		msgLists.push(email);
	}
	if (sendMsgLists.includes(nickname) && click === false) {
		sendMsgLists.pop(nickname);
		msgLists.pop(email);
	}
	return (
		<ApplicantInfoBlock>
			{
				click === false ? <ImCheckboxUnchecked onClick={() => setClick(!click)} /> :
					<ImCheckboxChecked onClick={() => setClick(!click)} />
			}
			<div className="userInfo">
				<div className="userImg"></div>
				<div className="nickname">{nickname} ({userId}기)</div>
			</div>
			{/* <div className="phoneNumber">{userId}기 </div> */}
			<div className="email">{email}</div>
			<div className="unit">{generation}기</div>
			<div className="role">{positionName}</div>
			<div className="authorized">{admin ? "운영진" : "일반 회원"}</div>
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


const MemberManagementForm = ({ memberInfo, clubName }) => {
	const [unitIndex, setUnitIndex] = useState(0);
	const unit = ['1기', '2기', '3기'];

	const [roleIndex, setRoleIndex] = useState(0);
	const role = ['서버', '디자이너', '개발자'];

	const [authIndex, setAuthIndex] = useState(0);
	const auth = ['운영진', '멤버'];

	const [click, setClick] = useState(false);

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
							memberInfo && memberInfo.map(member => <MemberInfo info={member} />)
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