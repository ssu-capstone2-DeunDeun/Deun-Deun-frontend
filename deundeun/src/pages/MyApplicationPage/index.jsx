import { Content, HeaderContainer, TitleKorean } from 'pages/MyClubListPage/styles';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import React, { useEffect, useState } from 'react';
import MyApplicationCard from 'components/MyApplicationCard';
import { CardContainer, ContentKorean, SpinnerContainer } from './styles';
import { ContainerColumn, ContainerPage, ContainerRow } from 'styles';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { CategoryKorean } from 'pages/MyLikeListPage/styles';
import axios from '../../../node_modules/axios/index';
import { ACCESS_TOKEN, API_BASE_URL } from 'constants/index';
import LoadingSpinner from 'components/common/LoadingSpinner/index';
const MyApplicationPage = () => {
	const [applyList, setApplyList] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		axios({
			method: 'get',
			url: `${API_BASE_URL}/club/recruit/applies`,
			headers: {
				Authorization: 'Bearer ' + localStorage.getItem(ACCESS_TOKEN)
			}
		}).then((res) => {
			console.log(res.data);
			setApplyList(res.data);
			setLoading(false);
		});
	}, []);

	return (
		//
		<>
			<ContainerPage>
				<HeaderContainer style={{ marginBottom: '12px' }}>
					<CategoryKorean>마이페이지</CategoryKorean>
					<ChevronRightIcon />
					<CategoryKorean>지원 목록</CategoryKorean>
				</HeaderContainer>
				<ContainerColumn style={{ marginTop: '1.25em', width: '100%', marginRight: '4em' }}>
					<TitleKorean>나의 지원 목록</TitleKorean>
					<ContainerRow>
						<ContentKorean>{`현재 ${
							!loading && applyList ? applyList.length : 0
						}개의 동아리에 지원했습니다.`}</ContentKorean>
						{/* <Content style={{ marginLeft: 'auto', marginRight: '1.1em' }}>
							<CheckCircleOutlineIcon style={{ marginRight: '0.3em' }} />
							<ContentKorean>이전 내역 모두 보기</ContentKorean>
						</Content> */}
					</ContainerRow>
				</ContainerColumn>
				<CardContainer>
					{!loading ? (
						applyList.map((apply) => (
							<div key={apply.clubApplyId}>
								<MyApplicationCard id={apply.clubApplyId} title={apply.title} clubName={apply.clubName} />
							</div>
						))
					) : (
						<SpinnerContainer>
							<LoadingSpinner size="large" />
						</SpinnerContainer>
					)}
				</CardContainer>
			</ContainerPage>
		</>
	);
};

export default MyApplicationPage;
