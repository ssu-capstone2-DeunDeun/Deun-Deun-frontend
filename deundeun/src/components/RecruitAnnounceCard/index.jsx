import { Button } from 'components/MyApplicationCard/styles';
import React, { useState } from 'react';
import { ContainerRow } from 'styles';
import { Container, HeaderContainer, RecruitingInfo, RecruitDeadline, RecruitTitle, ButtonContainer } from './styles';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useCallback } from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteRecruitModal from 'components/modal/DeleteRecruitModal/index';
import { useHistory } from 'react-router-dom';
const RecruitAnnounceCard = ({ generation, title, id, recruitList, setRecruitList }) => {
	const ITEM_HEIGHT = 48;
	const history = useHistory();
	const [anchorEl, setAnchorEl] = useState(null);
	const [showDeleteModal, setShowDeleteModal] = useState(false);

	const onClickMenu = (e) => {
		setAnchorEl(e.currentTarget);
	};

	const onCloseMenu = useCallback(() => {
		setAnchorEl(null);
	}, []);

	const onClickModify = () => {
		history.push(`/club/manage/recruit/modify/${id}`);
		// onCloseMenu();
	};

	const onClickDelete = () => {
		setShowDeleteModal(true);
		onCloseMenu();
	};

	const onCloseModal = useCallback((e) => {
		setShowDeleteModal(false);
	}, []);

	return (
		//
		<Container>
			<HeaderContainer>
				<RecruitingInfo className="pending">모집중</RecruitingInfo>
				<RecruitingInfo className="order">{generation ? generation : ''}기</RecruitingInfo>
				{/* <RecruitDeadline>2021.01.01 ~ 2021.01.08</RecruitDeadline> */}
				<div style={{ marginLeft: 'auto', marginTop: '-5vh', cursor: 'pointer' }}>
					<IconButton aria-label="more" aria-controls="long-menu" aria-haspopup="true" onClick={onClickMenu}>
						<MoreHorizIcon />
					</IconButton>
					<Menu
						id="recruit-manage"
						anchorEl={anchorEl}
						keepMounted
						open={Boolean(anchorEl)}
						onClose={onCloseMenu}
						PaperProps={{
							style: {
								maxHeight: ITEM_HEIGHT * 4.5,
								width: '10ch',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center'
							}
						}}
					>
						<MenuItem onClick={onClickModify}>수정하기</MenuItem>
						<MenuItem onClick={onClickDelete}>삭제하기</MenuItem>
					</Menu>
				</div>
			</HeaderContainer>
			<ContainerRow style={{ marginTop: '2.4vh' }}>
				<RecruitTitle>{title ? title : ''}</RecruitTitle>
				<ButtonContainer>
					<Button>지원자 관리</Button>
					<Button>모집 종료</Button>
				</ButtonContainer>
			</ContainerRow>
			<DeleteRecruitModal
				id={id}
				title={title}
				show={showDeleteModal}
				onCloseModal={onCloseModal}
				setShowDeleteModal={setShowDeleteModal}
				recruitList={recruitList}
				setRecruitList={setRecruitList}
			/>
		</Container>
	);
};

export default RecruitAnnounceCard;
