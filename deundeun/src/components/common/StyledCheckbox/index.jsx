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

const StyledCheckbox = () => {
	const [checked, setChecked] = useState(false);

	const onClickCheckbox = useCallback(() => {
		setChecked((prev) => !prev);
	}, []);

	return (
		//
		<ColoredCheckbox onClick={onClickCheckbox} checked={checked} />
	);
};

export default StyledCheckbox;
