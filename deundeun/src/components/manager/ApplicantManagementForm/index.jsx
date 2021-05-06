import React, { useState } from 'react';
import { MdKeyboardArrowDown, MdClose } from 'react-icons/md';
import { ImCheckboxUnchecked, ImCheckboxChecked } from 'react-icons/im';
import { BiSearchAlt2 } from 'react-icons/bi';
import Button from 'components/common/Button';
import { BasicBlock, ContentBlock, ApplicantInfoBlock, PopupBlock, StyledTextarea } from './styles';

const popupClear = (event) => {
	const t = document.getElementById('popup');
	t.className = 'delete';
};
const popupMake = (event) => {
	const t = document.getElementById('popup');
	t.className = 'popupBlock';
};
let sendMsgLists = [];

const ApplicantInfo = ({ applicant }) => {
	const { nickname, id, phoneNumber, email } = applicant;
	const [click, setClick] = useState(false);
	if (!sendMsgLists.includes(applicant) && click === true) sendMsgLists.push(applicant);
	if (sendMsgLists.includes(applicant) && click === false) sendMsgLists.pop(applicant);
	return (
		<ApplicantInfoBlock>
			{click === false ? (
				<ImCheckboxUnchecked onClick={() => setClick(!click)} />
			) : (
				<ImCheckboxChecked onClick={() => setClick(!click)} />
			)}
			<div className="nickname">
				{nickname} ({id})
			</div>
			<div className="phoneNumber">{phoneNumber}</div>
			<div className="email">{email}</div>
			<div className="firstPass">1차 합격</div>
			<button>지원서 보기</button>
		</ApplicantInfoBlock>
	);
};

const ApplicantManagementForm = () => {
	// const mouseOver = (event) => {
	//     event.target.className += " add";
	//     console.log(event.target.className);
	// }
	// const mouseOut = (event) => {
	//     event.target.className = "menuItem"
	//     console.log(event.target.className);
	// }
	const contents = {
		clubName: 'IT 동아리 트와이스',
		unit: 3,
		recruitStart: '2021.01.01',
		recruitEnd: '2021.01.08',
		title: '야! 너도 트와이스 할 수 있어!',
		applicants: [
			{ nickname: '불꽃남자김상록', id: 'wowowowowo', phoneNumber: '010-1234-5678', email: 'abcd1234@gmail.com' },
			{ nickname: '안동핵주먹', id: 'ever_____green', phoneNumber: '010-1234-5678', email: 'abcd1234@gmail.com' },
			{ nickname: '인생별거없어', id: 'understood', phoneNumber: '010-1234-5678', email: 'abcd1234@gmail.com' },
			{ nickname: '리액트짱재밌엉', id: 'goddammohmyshit', phoneNumber: '010-1234-5678', email: 'abcd1234@gmail.com' }
		]
	};
	const { clubName, recruitStart, recruitEnd, unit, title, applicants } = contents;
	const [click, setClick] = useState(false);
	return (
		<BasicBlock>
			<ContentBlock>
				<div className="main">
					<div className="mainInfo">
						<div className="mainInfoItem">모집중</div>
						<div className="mainInfoItem">{unit}기</div>
						<div>
							{recruitStart}~{recruitEnd}
						</div>
					</div>
					<div className="mainTitle">{title}</div>
					<div className="mainContent">
						<div className="mainContentHeader">
							<div
								className="message"
								onClick={() => {
									setClick(!click);
									popupMake();
								}}
							>
								{click === false ? <ImCheckboxUnchecked /> : <ImCheckboxChecked />}
								<div>메세지 보내기</div>
							</div>
							<div className="func">
								<div className="viewAll">
									<div>전체보기</div>
									<MdKeyboardArrowDown />
								</div>
								<div className="username">
									<div>이름/닉네임</div>
									<BiSearchAlt2 />
								</div>
							</div>
						</div>
						{applicants.map((applicant) => (
							<ApplicantInfo id={applicant} applicant={applicant} />
						))}
					</div>
				</div>
			</ContentBlock>
			{/* 팝업창 */}
			<PopupBlock>
				<div id="popup" className="delete">
					<div className="popupTitle">
						<div>메세지 보내기</div>
						<MdClose
							onClick={() => {
								popupClear();
								setClick(!click);
								window.location.reload();
							}}
						/>
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
						{sendMsgLists.map((sendMsgList) => (
							<button id={sendMsgList}>
								{sendMsgList.nickname}({sendMsgList.id} )<MdClose />
							</button>
						))}
					</div>
					<div className="content">
						<div>내용</div>
						<StyledTextarea placeholder="내용을 입력하세요."></StyledTextarea>
					</div>

					<div className="btn">
						<Button blackgray>전송하기</Button>
					</div>
				</div>
			</PopupBlock>
		</BasicBlock>
	);
};

export default ApplicantManagementForm;
