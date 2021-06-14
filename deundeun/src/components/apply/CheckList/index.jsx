import React, { useState } from 'react';
import { CheckBox, CheckBoxBlock, CheckListBlock } from './styles';
import { IoCheckmarkCircleOutline } from 'react-icons/io5';

const CheckList = ({ id, lists, onChangeCheckList }) => {
	return (
		<CheckListBlock>
			{lists.map((list) => (
				<CheckListItem
					id={id}
					key={list.choiceNumber}
					text={list.choiceContent}
					onChangeCheckList={onChangeCheckList}
				/>
			))}
		</CheckListBlock>
	);
};

const CheckListItem = ({ id, text, onChangeCheckList }) => {
	const [click, setClick] = useState(false);

	return (
		<>
			{click === true ? (
				<CheckBoxBlock
					active
					onClick={(e) => {
						setClick(!click);
						console.log(e.target.id);
						const id = parseInt(e.target.id);
						if (id) {
							onChangeCheckList(id, text);
						}
					}}
					id={id}
				>
					<CheckBox>
						<IoCheckmarkCircleOutline />
						<div className="text">{text}</div>
					</CheckBox>
				</CheckBoxBlock>
			) : (
				<CheckBoxBlock
					onClick={(e) => {
						setClick(!click);
						console.log(e.target.id);
						const id = parseInt(e.target.id);
						if (id) {
							onChangeCheckList(id, text);
						}
					}}
					id={id}
				>
					<CheckBox>
						<div className="text">{text}</div>
					</CheckBox>
				</CheckBoxBlock>
			)}
		</>
	);
};

export default CheckList;
