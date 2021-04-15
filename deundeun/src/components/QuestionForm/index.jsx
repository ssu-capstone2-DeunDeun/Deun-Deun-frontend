import { makeStyles, MenuItem, TextField } from '@material-ui/core';
import React, { useCallback, useRef, useState } from 'react';
import { Form } from './styles';

const QuestionForm = () => {
	const nameRef = useRef('');

	const genders = [
		{
			value: 'male',
			label: '남성'
		},
		{
			value: 'female',
			label: '여성'
		}
	];
	const [gender, setGender] = useState('');

	const onChangeGender = useCallback((e) => {
		setGender(e.target.value);
		console.log(e.target.value);
	}, []);

	return (
		//
		<Form action="" noValidate autoComplete="off">
			<TextField ref={nameRef} required id="outlined-required" label="이름" variant="outlined" />
			<TextField
				required
				id="outlined-select-currency"
				select
				label="성별"
				value={gender}
				onChange={onChangeGender}
				variant="outlined"
				style={{ width: '80px' }}
			>
				{genders.map((v) => (
					<MenuItem key={v.value} value={v.value}>
						{v.label}
					</MenuItem>
				))}
			</TextField>
		</Form>
	);
};

export default QuestionForm;
