import { withStyles } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import React, { useCallback, useState } from 'react';

const ColoredCheckbox = withStyles({
	root: {
		color: '#9ddfd3',
		'&$checked': {
			color: '#9ddfd3'
		}
	},
	checked: {}
})((props) => <Checkbox color="default" {...props} />);

const StyledCheckbox = ({ id, title, applicationId, setApplicationId, setApplicationTitle }) => {
	const onClickCheckbox = useCallback(
		(e) => {
			setApplicationId(e.target.id);
			setApplicationTitle(e.currentTarget.title);
			console.log(e.target.id);
			console.log(e.currentTarget.title);
		},
		[setApplicationId, setApplicationTitle]
	);

	return (
		//
		<ColoredCheckbox id={id} title={title} onClick={onClickCheckbox} checked={applicationId === id ? true : false} />
	);
};

export default StyledCheckbox;
