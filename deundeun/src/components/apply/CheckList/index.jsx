import React, { useState } from 'react';
import { CheckBox, CheckBoxBlock, CheckListBlock } from './styles';
import { IoCheckmarkCircleOutline } from 'react-icons/io5';

const CheckList = ({ id, lists, onChangeCheckList }) => {
	const [current, setCurrent] = useState('');
	return (
		<CheckListBlock>
			{lists.map((list) => (
				<CheckListItem
					id={id}
					key={list.choiceNumber}
					text={list.choiceContent}
					value={list.choiceContent}
					onChangeCheckList={onChangeCheckList}
					current={current}
					setCurrent={setCurrent}
				/>
			))}
		</CheckListBlock>
	);
};

const CheckListItem = ({ id, text, onChangeCheckList, current, setCurrent }) => {
	return (
		<>
			{current === text ? (
				<CheckBoxBlock
					active
					onClick={(e) => {
						setCurrent('');
						const id = parseInt(e.target.id);
						if (id) {
							onChangeCheckList(id, text);
						}
					}}
					id={id}
				>
					<CheckBox>
						<IoCheckmarkCircleOutline id={id} />
						<div className="text" id={id}>
							{text}
						</div>
					</CheckBox>
				</CheckBoxBlock>
			) : (
				<CheckBoxBlock
					onClick={(e) => {
						setCurrent(text);
						const id = parseInt(e.target.id);
						if (id) {
							onChangeCheckList(id, text);
						}
					}}
					id={id}
				>
					<CheckBox id={id}>
						<div className="text" id={id}>
							{text}
						</div>
					</CheckBox>
				</CheckBoxBlock>
			)}
		</>
	);
};

export default CheckList;
