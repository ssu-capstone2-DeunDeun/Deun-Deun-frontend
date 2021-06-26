import React, { useState } from 'react';
import { ApplicantInfoBlock, BasicBlock, ContentBlock, MenuBlock, PopupBlock, RecruitNoticeBlock, StyledTextarea } from './styles';
import { MdKeyboardArrowDown, MdClose, MdKeyboardArrowRight } from "react-icons/md";
import { ImCheckboxUnchecked, ImCheckboxChecked } from "react-icons/im";
import { BiSearchAlt2 } from "react-icons/bi";
import DropdownMenu from 'components/common/DropdownMenu/index';
import Button from 'components/common/Button/index';
import { useEffect } from 'react';
import axios from '../../../../node_modules/axios/index';
import { useHistory, withRouter } from 'react-router-dom';



const popupClear = (event) => {
	const t = document.getElementById("msgPopup");
	t.className = "delete";
};
const popupMake = (event) => {
	const t = document.getElementById("msgPopup");
	t.className = "popupBlock";
};

let sendMsgLists = []; //닉네임 리스트
let msgLists = [];  // 이메일 리스트


const ApplicantInfo = ({ applicant, clubName }) => {
	const { nickname, email } = applicant;
	const [click, setClick] = useState(false);
	const history = useHistory();

	if (!sendMsgLists.includes(applicant.nickname) && click === true) {
		sendMsgLists.push(applicant.nickname);
		msgLists.push(applicant.email);
	}
	if (sendMsgLists.includes(applicant.nickname) && click === false) {
		sendMsgLists = sendMsgLists.filter(value => value !== applicant.nickname);
		msgLists = msgLists.filter(value => value !== applicant.nickname);
	}

	return (
		<ApplicantInfoBlock>
			{
				click === false ? <ImCheckboxUnchecked onClick={() => setClick(!click)} /> :
					<ImCheckboxChecked onClick={() => setClick(!click)} />
			}
			<div>
				<div className="nickname">{nickname}</div>
				{/* <div className="phoneNumber">{phoneNumber}</div> */}
				<div className="email">{email}</div>
				<div className="firstPass">서류 전형</div>
				<button onClick={() => history.push(`/apply/${clubName}/${applicant.clubApplyId}`)}>지원서 보기</button>
			</div>
		</ApplicantInfoBlock>
	);
}


const RecruitNotice = ({ recruit, onClick, index, setNumber, number }) => {
	const [click, setClick] = useState(false);
	const { title, generation } = recruit;
	return (
		<RecruitNoticeBlock onClick={() => {
			onClick(recruit.id);
			// setClick(!click);
			setNumber(index);
		}}>
			<div className="recruitNoticeBox">
				{
					number !== index ? <ImCheckboxUnchecked /> :
						<ImCheckboxChecked />
				}
				<div className="content">[{generation}기] {title}</div>
			</div>
		</RecruitNoticeBlock>
	)
}


const ApplicantManagementForm = ({ recruits, onClick, applicants, message, onResetContent, onChangeContent, onChangeEmail, onResetEmail, sendEmail, clubName }) => {
	const contents = {
		clubName: "IT 동아리 트와이스", unit: 3, recruitStart: "2021.01.01", recruitEnd: "2021.01.08",
		title: "야! 너도 트와이스 할 수 있어!",
	}
	const [click, setClick] = useState(false);

	const [viewIndex, setViewIndex] = useState(0);
	const view = ['최신순', '오래된 순'];
	const [number, setNumber] = useState(0);

	return (
		<BasicBlock>
			<ContentBlock>
				<div className="main">
					<div className="mainInfo">
						<div className="mainInfoTitle">모집중인 공고 선택</div>
						<div className="recruitNotice">
							{
								recruits && recruits.map((recruit, index) => <RecruitNotice index={index + 1} setNumber={setNumber} number={number} onClick={onClick} recruit={recruit} ></RecruitNotice>)
							}
						</div>
					</div>
					<div className="mainContent">
						<div className="mainContentHeader">
							<div className="message" onClick={() => {
								setClick(!click);
								popupMake();
								onChangeEmail(msgLists);
							}}>
								{
									click === false ? <ImCheckboxUnchecked /> :
										<ImCheckboxChecked />
								}
								<div>메세지 보내기</div>
							</div>
							<div className="func">
								<div className="viewAll">
									{`${view[viewIndex]}`}

									<DropdownMenu
										options={view}
										selectedIndex={viewIndex}
										setSelectedIndex={setViewIndex}
									/>
								</div>
								<div className="username">
									<input type="text" placeholder="이름/닉네임" />
									<BiSearchAlt2 />
								</div>
							</div>
						</div>
						{
							applicants && applicants.map(applicant => <ApplicantInfo clubName={clubName} id={applicant} applicant={applicant} />)
						}
					</div>
				</div>
			</ContentBlock>

			{/* 팝업창 */}
			<PopupBlock >
				<div id="msgPopup" className="delete">
					<div className="popupTitle">
						<div>메세지 보내기</div>
						<MdClose onClick={() => {
							popupClear(); setClick(!click);
							onResetEmail();
							onResetContent();
							// window.location.reload();
							// 해결해야한다.
						}} />
					</div>

					<div className="kind">종류</div>
					<div className="kindItem">
						{/* <ImCheckboxUnchecked /> */}
						{/* <div>SMS</div> */}
						<ImCheckboxChecked />
						<div>E-mail</div>
					</div>
					<div className="receiver">받는 사람</div>
					<div className="receiverIist">
						{
							sendMsgLists.map(sendMsgList => <button id={sendMsgList}>{sendMsgList}</button>)
						}
					</div>
					<div className="content">
						<div>내용</div>
						<StyledTextarea className="message" value={message} onChange={onChangeContent} placeholder="내용을 입력하세요." ></StyledTextarea>
					</div>

					<div className="msgSubmitBtn">
						<Button applyManageBtn onClick={(e) => {
							sendEmail();
							popupClear();
						}}>전송하기</Button>
					</div>
				</div>

			</PopupBlock>
		</BasicBlock >
	);
};

export default withRouter(ApplicantManagementForm);


