import { changeNicknameField, submitNicknameField, updateNickname } from 'modules/currentUserInfo';
import MyPage from 'pages/MyProfileModifyPage/index';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const MyProfileModifyPageContainer = () => {
    const { userInfo, modifyNickname } = useSelector(({ currentUserInfo }) => ({
        userInfo: currentUserInfo.userInfo,
        modifyNickname: currentUserInfo.modifyNickname,
    }))
    const dispatch = useDispatch();

    const onSubmitNickname = () => {
        dispatch(updateNickname(modifyNickname));

    }
    const onChangeNickname = (e) => {
        dispatch(changeNicknameField({ type: "modifyNickname", value: e.target.value }))
    }

    return (
        <MyPage onSubmitNickname={onSubmitNickname} onChangeNickname={onChangeNickname} userInfo={userInfo} />
    );
};

export default MyProfileModifyPageContainer;