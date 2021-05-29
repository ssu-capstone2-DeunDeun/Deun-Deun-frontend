import React from 'react';

import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
const ErrorMessage = ({ open, onCloseSnackbar, message }) => {
	return (
		//
		<Snackbar open={open} autoHideDuration={1000} onClose={onCloseSnackbar}>
			<Alert onClose={onCloseSnackbar} severity="error">
				{message}
			</Alert>
		</Snackbar>
	);
};

export default ErrorMessage;
