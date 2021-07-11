import React, { useState } from 'react';
import { MdKeyboardArrowDown, MdClose } from "react-icons/md";
import { ImCheckboxUnchecked, ImCheckboxChecked } from "react-icons/im";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AddRoleBlock, AddRoleModal, ApplicantInfoBlock, AuthSetBlock, BasicBlock, ContentBlock, DeleteModal, ModalBox, PopupBlock, RoleSetBlock, StyledTextarea } from './styles';

import DropdownMenu from 'components/common/DropdownMenu/index';
import DropdownMenuDot from 'components/common/DropdownMenuDot/index';
import Button from 'components/common/Button/index';
import { ErrorMessage, StyledInput } from 'components/register/RegisterInfoForm/styles';
import { withRouter } from 'react-router-dom';
import { RiDeleteBinLine } from "react-icons/ri";

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

const authPopupClear = (event) => {
	const t = document.getElementById("authPopup");
	t.className = "authDelete";
};
const authPopupMake = (event) => {
	const t = document.getElementById("authPopup");
	t.className = "authPopupBlock";
};


const addRolePopupClear = (event) => {
	const t = document.getElementById("addRolePopup");
	t.className = "addRoleDelete";
};
const addRolePopupMake = (event) => {
	const t = document.getElementById("addRolePopup");
	t.className = "addRolePopupBlock";
};

const deleteRolePopupClear = (event) => {
	const t = document.getElementById("modalId");
	t.className = "delete";
};
const deleteRolePopupMake = (event) => {
	const t = document.getElementById("modalId");
	t.className = "make";
};





let sendMsgLists = [];  //닉네임 리스트
let sendMsgIdLists = []; // 닉네임 id 리스트
let msgLists = [];     //이메일 리스트

const MemberInfo = ({ info }) => {
	const { nickname, userId, email, positionName, generation, admin, id, name } = info;
	const [click, setClick] = useState(false);

	const [menuIndex, setMenuIndex] = useState(0);
	const menu = ['멤버 정보 수정', '강제 퇴장'];

	if (!sendMsgLists.includes(nickname) && click === true) {
		sendMsgLists.push(nickname);
		sendMsgIdLists.push(id);
		msgLists.push(email);
	}
	if (sendMsgLists.includes(nickname) && click === false) {
		sendMsgLists = sendMsgLists.filter(value => value !== nickname);
		msgLists = msgLists.filter(value => value !== email);
		sendMsgIdLists = sendMsgIdLists.filter(value => value !== id);
	}

	return (
		<ApplicantInfoBlock>
			{
				click === false ? <ImCheckboxUnchecked onClick={() => setClick(!click)} /> :
					<ImCheckboxChecked onClick={() => setClick(!click)} />
			}
			<div className="userInfo">
				{/* <div className="userImg"></div> */}
				<div className="nickname">{name} ({nickname})</div>
			</div>
			{/* <div className="phoneNumber">{name}</div> */}
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

const MemberManagementForm = ({
	memberInfo,
	clubName,
	sendEmail,
	sendMsgForm,
	onResetContent,
	onResetEmail,
	onChangeEmail,
	onChangeContent,
	message,
	onChangeType,
	onResetType,
	history,
	clubPositions,
	addClubPos,
	deleteClubPos,
	updateClubPos,
	assignParticipateClubPos,
	assginAdmin,
	quitAdmin,
}) => {

	const [unitIndex, setUnitIndex] = useState(0);
	const unit = ['기수', '1기', '2기', '3기'];

	const [roleIndex, setRoleIndex] = useState(0);
	const role = clubPositions ?
		["역할"].concat(clubPositions.map(value => value.positionName))
		:
		["역할"];


	const [authIndex, setAuthIndex] = useState(0);
	const auth = ['운영진', '멤버'];

	const [msgClick, setMsgClick] = useState(false);
	const [roleClick, setRoleClick] = useState(false);
	const [authClick, setAuthClick] = useState(false);

	const [type, setType] = useState(null);      //message type 관리
	const [error, setError] = useState(false);   //에러 메세지 상태 관리

	const [addValue, setAddValue] = useState("");

	const [deletePosId, setDeletePosId] = useState(null); //삭제한 positionId 저장
	const [deletePosName, setDeletePosName] = useState(null); //삭제한 positionName 저장
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
									setMsgClick(!msgClick);
									msgPopupMake();
									onChangeEmail(msgLists);
								}}>
									{
										msgClick === false ? <ImCheckboxUnchecked /> :
											<ImCheckboxChecked />
									}
								</div>
								<div className="skill">메시지 보내기</div>

								<div className="message" onClick={() => {
									setRoleClick(!roleClick);
									rolePopupMake();
									// onChangeEmail(msgLists);
								}}>
									{
										roleClick === false ? <ImCheckboxUnchecked /> :
											<ImCheckboxChecked />
									}
								</div>
								<div className="skill">역할 변경하기</div>

								<div className="message" onClick={() => {
									setAuthClick(!authClick);
									authPopupMake();
									// onChangeEmail(msgLists);
								}}>
									{
										authClick === false ? <ImCheckboxUnchecked /> :
											<ImCheckboxChecked />
									}
								</div>
								<div className="skill">권한 변경하기</div>
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
							msgPopupClear();
							setMsgClick(false);
							onResetEmail();
							onResetContent();
							onResetType();
							setType(null);
							setError(false);
						}} />
					</div>

					<div className="kind">종류</div>
					<div className="kindItem">
						{/* <ImCheckboxUnchecked />
						<div>SMS</div> */}
						<ImCheckboxChecked />
						<div>E-mail</div>
					</div>
					<div className="kind">메세지 형식</div>
					<div className="kindItem">
						{
							type === 1 ? <ImCheckboxChecked onClick={() => { setType(null); onChangeType(""); }} /> :
								<ImCheckboxUnchecked onClick={() => { setType(1); onChangeType("INTERVIEW"); }} />
						}
						<div className="kindItemTit">1차 합격</div>
						{
							type === 2 ? <ImCheckboxChecked onClick={() => { setType(null); onChangeType(""); }} /> :
								<ImCheckboxUnchecked onClick={() => { setType(2); onChangeType("FAIL"); }} />
						}
						<div className="kindItemTit">1차 탈락</div>
						{
							type === 3 ? <ImCheckboxChecked onClick={() => { setType(null); onChangeType(""); }} /> :
								<ImCheckboxUnchecked onClick={() => { setType(3); onChangeType("PASS"); }} />
						}
						<div className="kindItemTit">최종 합격</div>
						{
							type === 4 ? <ImCheckboxChecked onClick={() => { setType(null); onChangeType(""); }} /> :
								<ImCheckboxUnchecked onClick={() => { setType(4); onChangeType("FAIL"); }} />
						}
						<div className="kindItemTit">최종 탈락</div>
					</div>
					<div className="receiver">받는 사람</div>
					<div className="receiverIist">
						{
							sendMsgLists.map(sendMsgList => <button id={sendMsgList}>{sendMsgList}</button>)
						}
					</div>
					<div className="content">
						<div>내용</div>
						<StyledTextarea placeholder="내용을 입력하세요." onChange={onChangeContent}></StyledTextarea>
						{error && <ErrorMessage>*모든 값을 입력하세요.</ErrorMessage>}
					</div>

					<div className="msgSubmitBtn">
						<Button applyManageBtn
							onClick={(e) => {
								if (sendMsgLists.length !== 0 && sendMsgForm.contentType !== "" && sendMsgForm.message !== "") {
									sendEmail();
									msgPopupClear();
									history.push("/member/message/success");
								}
								else {
									setError(true);
								}
							}}
						>전송하기</Button>
					</div>
				</div>
			</PopupBlock>

			{/* 역할 설정 팝업 */}
			<RoleSetBlock >
				<div id="rolePopup" className="roleDelete">
					<div className="rolePopupTitle">
						<div>역할 설정</div>
						<MdClose onClick={() => {
							rolePopupClear();
							setRoleClick(false);
						}} />
					</div>
					<div className="addRole" onClick={addRolePopupMake}>
						<AiOutlinePlusCircle />
						<div> 새 역할 추가하기</div>
					</div>

					<div className="roleList">역할 리스트</div>
					<div className="roleListItem">
						{
							clubPositions && (clubPositions.length !== 0 ? (
								clubPositions.map((value, index) =>
									<>
										<ImCheckboxUnchecked />
										<div className="posInfo">{value.positionName}</div>
										<div className="delIcon"><RiDeleteBinLine onClick={() => {
											deleteRolePopupMake();
											setDeletePosId(value.positionId);
											setDeletePosName(value.positionName);
										}} /></div>
									</>
								)
							) :
								(
									<div>*현재 등록된 역할이 없습니다.</div>
								))
						}
					</div>
					<div className="roleList">역할 변경</div>
					<div className="roleChangeItemBox">
						{
							sendMsgLists.map((member, index) =>
								<div className="roleChangeItem">
									<div className="selectedMember">{member}</div>
									<select id={sendMsgIdLists[index]} name="roleMenu" className="roleSelectList">
										<option value="">역할선택</option>
										{
											clubPositions.map(value =>
												<option value={value.positionId}>{value.positionName}</option>
											)
										}
									</select>
								</div>
							)

						}
						<div className="roleSetBtn">
							<Button addRoleBtn1 onClick={() => {
								const roleSelectedLists = Array.from(document.querySelectorAll('.roleSelectList'));
								roleSelectedLists.map(value =>
									// console.log("fe", value.options[value.selectedIndex].value)
									// console.log(value.id)
									assignParticipateClubPos(Number(value.id), Number(value.options[value.selectedIndex].value))
								)
								setRoleClick(false);
								rolePopupClear();
							}}>저장하기</Button>
							<Button addRoleBtn2 onClick={() => {
								rolePopupClear();
								setRoleClick(false);
							}}>취소하기</Button>
						</div>
					</div>
				</div>
			</RoleSetBlock >

			{/* 권한 설정 팝업 */}
			<AuthSetBlock >
				<div id="authPopup" className="authDelete">
					<div className="authPopupTitle">
						<div>권한 설정</div>
						<MdClose onClick={() => {
							authPopupClear();
							setAuthClick(false);
						}} />
					</div>
					<div className="addAuth">
						<AiOutlinePlusCircle />
						<div> 새 권한 추가하기</div>
					</div>
					<div className="authSetBtn">
						<Button applyManageBtn>저장하기</Button>
					</div>
				</div>
			</AuthSetBlock>

			{/* 역할 추가 설정 팝업 */}
			< AddRoleBlock>
				<div id="addRolePopup" className="addRoleDelete">
					<div className="addRolePopupTitle">
						<div>새 역할 추가하기</div>
						<MdClose onClick={() => {
							setAddValue("");
							setError(false);
							addRolePopupClear();
						}} />
					</div>
					<div className="addRole">
						<div class="addRoleInfo">
							<div className="addRoleTit">역할 이름</div>
							<input value={addValue} onChange={(e) => setAddValue(e.target.value)} className="addRoleInput" />
						</div>
						{error && <ErrorMessage>*모든 값을 입력하세요.</ErrorMessage>}
					</div>
					<div className="addRoleSetBtn">
						<Button addRoleBtn1 onClick={(e) => {
							if (addValue.length === 0) {
								setError(true);
							}
							else {
								addRolePopupClear();
								setError(false);
								addClubPos(addValue);
								setAddValue("");
							}
						}}>적용하기</Button>
						<Button addRoleBtn2 onClick={() => {
							addRolePopupClear();
							setError(false);
							setAddValue("");
						}
						}>취소하기</Button>
					</div>
				</div>
			</ AddRoleBlock>



			{/*역할을 삭제할때 뜨는 팝업창 */}
			<DeleteModal>
				<div id="modalId" className="delete">
					<ModalBox>
						<div className="deleteBtn">정말 "{deletePosName}" 역할을 삭제하시겠습니까?</div>
						<div className="removeBtn">
							<Button removeBtn1 onClick={() => {
								deleteClubPos(deletePosId);
								deleteRolePopupClear();
							}}>예</Button>
							<Button removeBtn2 onClick={deleteRolePopupClear}>아니오</Button>
						</div>
					</ModalBox>
				</div>
			</DeleteModal>

		</BasicBlock >
	);
};

export default withRouter(MemberManagementForm);



// const hello = document.querySelectorAll('.roleSelectList');
// const hello_a = Array.from(hello);
// hello_a.map(value => console.log("fe", value.options[value.selectedIndex].value));