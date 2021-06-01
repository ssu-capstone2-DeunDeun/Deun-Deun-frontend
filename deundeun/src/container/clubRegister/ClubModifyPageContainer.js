import ClubModifyPage from 'pages/ClubModifyPage/index';
import { useEffect, useState } from 'react';
import axios from '../../../node_modules/axios/index';
import { ACCESS_TOKEN, API_BASE_URL } from 'constants/index';
const ClubModifyPageContainer = () => {
	const [clubInfo, setClubInfo] = useState({});

	useEffect(() => {
		axios({
			method: 'get',
			url: `${API_BASE_URL}/user/clubs`,
			headers: {
				Authorization: 'Bearer ' + localStorage.getItem(ACCESS_TOKEN)
			}
		})
			.then((response) => {
				setClubInfo(response.data[0]);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	useEffect(() => {
		console.log(clubInfo);
	}, [clubInfo]);

	return <ClubModifyPage />;
};

export default ClubModifyPageContainer;
