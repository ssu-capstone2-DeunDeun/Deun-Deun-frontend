import { Like } from './styles';
import React from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
const NumberOfLikes = () => {
	return (
		//
		<>
			<Like>
				<FavoriteIcon style={{ marginRight: '0.3em', cursor: 'pointer' }} />
				123
			</Like>
		</>
	);
};

export default NumberOfLikes;
