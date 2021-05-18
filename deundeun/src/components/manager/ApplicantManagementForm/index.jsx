import React, { useState } from 'react';
import { ApplicantInfoBlock, BasicBlock, ContentBlock, MenuBlock, PopupBlock, RecruitNoticeBlock, StyledTextarea } from './styles';
import { MdKeyboardArrowDown, MdClose, MdKeyboardArrowRight } from "react-icons/md";
import { ImCheckboxUnchecked, ImCheckboxChecked } from "react-icons/im";
import { BiSearchAlt2 } from "react-icons/bi";
import Button from 'components/common/Button/Button';


const popupClear = (event) => {
	const t = document.getElementById("popup");
	t.className = "delete";
};
const popupMake = (event) => {
	const t = document.getElementById("popup");
	t.className = "popupBlock";
};
let sendMsgLists = [];

const ApplicantInfo = ({ applicant }) => {
	const { nickname, id, phoneNumber, email } = applicant;
	const [click, setClick] = useState(false);
	if (!sendMsgLists.includes(applicant) && click === true) sendMsgLists.push(applicant);
	if (sendMsgLists.includes(applicant) && click === false) sendMsgLists.pop(applicant);
	return (
		<ApplicantInfoBlock>
			{
				click === false ? <ImCheckboxUnchecked onClick={() => setClick(!click)} /> :
					<ImCheckboxChecked onClick={() => setClick(!click)} />
			}
			<div>
				<div className="nickname">{nickname} ({id})</div>
				<div className="phoneNumber">{phoneNumber}</div>
				<div className="email">{email}</div>
				<div className="firstPass">1차 합격</div>
				<button>지원서 보기</button>
			</div>
		</ApplicantInfoBlock>
	);
}


const RecruitNotice = ({ content }) => {
	const [click, setClick] = useState(false);

	return (
		<RecruitNoticeBlock onClick={() => setClick(!click)}>
			<div className="recruitNoticeBox">
				{
					click === false ? <ImCheckboxUnchecked /> :
						<ImCheckboxChecked />
				}
				<div className="content">{content}</div>
			</div>
		</RecruitNoticeBlock>
	)
}


const ApplicantManagementForm = () => {
	const contents = {
		clubName: "IT 동아리 트와이스", unit: 3, recruitStart: "2021.01.01", recruitEnd: "2021.01.08",
		title: "야! 너도 트와이스 할 수 있어!", applicants: [
			{ nickname: "불꽃남자상록", id: "wowoowo", phoneNumber: "010-1234-5678", email: "abcd1234@gmail.com" },
			{ nickname: "안동핵주먹", id: "evergreen", phoneNumber: "010-1234-5678", email: "abcd1234@gmail.com" },
			{ nickname: "인생별거없어", id: "underood", phoneNumber: "010-1234-5678", email: "abcd1234@gmail.com" },
			{ nickname: "리액트짱재밌엉", id: "goddyshit", phoneNumber: "010-1234-5678", email: "abcd1234@gmail.com" }
		],
		recruitNotices: ["[3기] 모집공고 제목 모집공고 제목", "[4기] 모집공고 제목 모집공고 제목"],
	}
	const { applicants, recruitNotices } = contents;
	const [click, setClick] = useState(false);
	return (
		<BasicBlock>
			<ContentBlock>
				<div className="main">
					<div className="mainInfo">
						<div className="mainInfoTitle">모집중인 공고</div>
						<div className="recruitNotice">
							{
								recruitNotices.map(recruitNotice => <RecruitNotice content={recruitNotice}></RecruitNotice>)
							}
						</div>
					</div>
					<div className="mainContent">
						<div className="mainContentHeader">
							<div className="message" onClick={() => {
								setClick(!click);
								popupMake();
							}}>
								{
									click === false ? <ImCheckboxUnchecked /> :
										<ImCheckboxChecked />
								}
								<div>메세지 보내기</div>
							</div>
							<div className="func">
								<div className="viewAll">
									<div >최신순</div>
									<MdKeyboardArrowDown />
								</div>
								<div className="username">
									<input type="text" placeholder="이름/닉네임" />
									<BiSearchAlt2 />
								</div>
							</div>
						</div>
						{
							applicants.map(applicant => <ApplicantInfo id={applicant} applicant={applicant} />)
						}
					</div>
				</div>
			</ContentBlock>

			{/* 팝업창 */}
			<PopupBlock >
				<div id="popup" className="delete">
					<div className="popupTitle">
						<div>메세지 보내기</div>
						<MdClose onClick={() => {
							popupClear(); setClick(!click);
							// window.location.reload();
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

					<div className="msgSubmitBtn">
						<Button applyManageBtn>전송하기</Button>
					</div>
				</div>

			</PopupBlock>
		</BasicBlock >
	);
};

export default ApplicantManagementForm;


