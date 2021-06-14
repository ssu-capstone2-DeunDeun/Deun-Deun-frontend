import React, { useState } from 'react';
import { CheckBox, CheckBoxBlock, CheckListBlock } from './styles';
import { IoCheckmarkCircleOutline } from 'react-icons/io5';

const CheckListReadOnly = ({ id, lists, answer }) => {
	return (
		<CheckListBlock>
			{lists.map((list) => (
				<CheckListItem id={id} key={list.choiceNumber} text={list.choiceContent} answer={answer} />
			))}
		</CheckListBlock>
	);
};

const CheckListItem = ({ id, text, answer }) => {
	return (
		<>
			{answer === text ? (
				<CheckBoxBlock active id={id}>
					<CheckBox>
						<IoCheckmarkCircleOutline />
						<div className="text">{text}</div>
					</CheckBox>
				</CheckBoxBlock>
			) : (
				<CheckBoxBlock>
					<CheckBox>
						<div className="text">{text}</div>
					</CheckBox>
				</CheckBoxBlock>
			)}
		</>
	);
};

export default CheckListReadOnly;
