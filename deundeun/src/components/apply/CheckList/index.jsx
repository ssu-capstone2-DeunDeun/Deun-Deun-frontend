import React, { useState } from 'react';
import { CheckBox, CheckBoxBlock, CheckListBlock } from './styles';
import { IoCheckmarkCircleOutline } from "react-icons/io5";


const CheckList = ({ lists }) => {
	return (
		<CheckListBlock>
			{
				lists.map(list => <CheckListItem id={list} text={list} />)
			}
		</CheckListBlock >
	)
}

const CheckListItem = ({ text }) => {
	const [click, setClick] = useState(false);

	return (
		<>
			{click === true ?
				<CheckBoxBlock active onClick={(e) => { setClick(!click); }}>
					<CheckBox >
						<IoCheckmarkCircleOutline />
						<div className="text">{text}</div>
					</CheckBox>
				</CheckBoxBlock>
				:
				<CheckBoxBlock onClick={(e) => { setClick(!click); }}>
					<CheckBox >
						<div className="text">{text}</div>
					</CheckBox>
				</CheckBoxBlock>
			}
		</>
	)
}

export default CheckList;