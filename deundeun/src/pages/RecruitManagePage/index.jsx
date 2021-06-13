import AddRecruitAnnounceCard from 'components/AddRecruitAnnounceCard';
import RecruitAnnounceCard from 'components/RecruitAnnounceCard';
import React, { useEffect, useState } from 'react';
import { ContainerColumn } from 'styles';
import axios from '../../../node_modules/axios/index';
import LoadingSpinner from 'components/common/LoadingSpinner/index';
import { ACCESS_TOKEN, API_BASE_URL } from 'constants/index';
import { SpinnerContainer } from 'pages/ApplicationManagePage/styles';

const RecruitManagePage = ({ setAddNewForm }) => {
	const [clubName, setClubName] = useState('');
	const [loading, setLoading] = useState(true);
	const [recruitList, setRecruitList] = useState([]);

	useEffect(() => {
		axios({
			method: 'get',
			url: `${API_BASE_URL}/user/clubs`,
			headers: {
				Authorization: 'Bearer ' + localStorage.getItem(ACCESS_TOKEN)
			}
		}).then((response) => {
			const res = response.data[0].clubResponseDto;
			setClubName(res.clubName);
			console.log(clubName);
		});
	}, []);

	useEffect(() => {
		if (clubName) {
			axios({
				method: 'get',
				url: `${API_BASE_URL}/clubs/${clubName}/recruits`,
				headers: {
					Authorization: 'Bearer ' + localStorage.getItem(ACCESS_TOKEN)
				}
			}).then((response) => {
				const res = response.data;
				setRecruitList(res);
				setLoading(false);
			});
		}
	}, [clubName]);

	return (
		//
		<ContainerColumn>
			<AddRecruitAnnounceCard setAddNewForm={setAddNewForm} />
			{/* <RecruitAnnounceCard /> */}
			{!loading ? (
				recruitList.map((recruit) => <RecruitAnnounceCard key={recruit.id} />)
			) : (
				<>
					<SpinnerContainer>
						<LoadingSpinner size="large" style={{ margin: '0 auto' }} />
					</SpinnerContainer>
				</>
			)}
		</ContainerColumn>
	);
};

export default RecruitManagePage;
