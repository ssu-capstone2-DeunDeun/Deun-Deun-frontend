import React, { useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { ImCheckboxUnchecked, ImCheckboxChecked } from 'react-icons/im';
import { ApplicantInfoBlock, BasicBlock, ContentBlock, MenuBlock } from './styles';

const MemberInfo = ({ member }) => {
	const { nickname, id, phoneNumber, email, unit, role, authorized } = member;
	const [click, setClick] = useState(false);
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
			<div className="unit">{unit}기</div>
			<div className="role">{role}</div>
			<div className="authorized">{authorized}</div>
			<button>더보기</button>
		</ApplicantInfoBlock>
	);
};

const MemberManagementForm = () => {
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
		members: [
			{
				nickname: '불꽃남자김상록',
				id: 'wowowowowo',
				phoneNumber: '010-1234-5678',
				email: 'abcd1234@gmail.com',
				unit: '1',
				role: '서버',
				authorized: '멤버'
			},
			{
				nickname: '안동핵주먹',
				id: 'ever_____green',
				phoneNumber: '010-1234-5678',
				email: 'abcd1234@gmail.com',
				unit: '2',
				role: '디자니어',
				authorized: '운영진'
			},
			{
				nickname: '인생별거없어',
				id: 'understood',
				phoneNumber: '010-1234-5678',
				email: 'abcd1234@gmail.com',
				unit: '1',
				role: '서버',
				authorized: '멤버'
			},
			{
				nickname: '리액트짱재밌엉',
				id: 'goddammohmyshit',
				phoneNumber: '010-1234-5678',
				email: 'abcd1234@gmail.com',
				unit: '3',
				role: '프론트',
				authorized: '멤버'
			}
		]
	};
	const { clubName, members } = contents;
	const [click, setClick] = useState(false);
	return (
		<BasicBlock>
			<ContentBlock>
				{/* <div className="header">
					<div className="headerTitle">동아리 관리</div>
					<div className="headerInfo">
						<div>{clubName}</div>
						<MdKeyboardArrowDown />
					</div>
					<div className="headerInfo">
						<div>멤버 관리</div>
						<MdKeyboardArrowDown />
					</div>
				</div> */}
				<div className="main">
					<div className="mainTitle">{clubName}</div>
					<div className="mainContent">
						<div className="mainContentHeader">
							<div
								className="message"
								onClick={() => {
									setClick(!click);
								}}
							>
								{click === false ? <ImCheckboxUnchecked /> : <ImCheckboxChecked />}
							</div>
							<div className="func">
								<div className="allUnit">
									<div>모든 기수</div>
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
						{members.map((member) => (
							<MemberInfo id={member} member={member} />
						))}
					</div>
				</div>
			</ContentBlock>
		</BasicBlock>
	);
};

export default MemberManagementForm;
