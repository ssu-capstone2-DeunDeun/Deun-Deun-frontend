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

const StyledCheckbox = ({ id, applicationId, setApplicationId, setApplicationTitle }) => {
	// const [checked, setChecked] = useState(false);

	const onClickCheckbox = useCallback(
		(e) => {
			setApplicationId(e.target.id);
			setApplicationTitle(e.target.value);
		},
		[setApplicationId, setApplicationTitle]
	);

	return (
		//
		<ColoredCheckbox id={id} onClick={onClickCheckbox} checked={applicationId === id ? true : false} />
	);
};

export default StyledCheckbox;
