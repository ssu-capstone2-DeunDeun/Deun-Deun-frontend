import { changeNicknameField, submitNicknameField, updateNickname } from 'modules/currentUserInfo';
import MyPage from 'pages/MyProfileModifyPage/index';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const MyProfileModifyPageContainer = () => {
    const { userInfo, modifyNickname, modifyNicknameError, modifyNicknameSuccess } = useSelector(({ currentUserInfo }) => ({
        userInfo: currentUserInfo.userInfo,
        modifyNickname: currentUserInfo.modifyNickname,
        modifyNicknameError: currentUserInfo.modifyNicknameError,
        modifyNicknameSuccess: currentUserInfo.modifyNicknameSuccess,
    }))

    const dispatch = useDispatch();

    const onSubmitNickname = () => {
        dispatch(updateNickname(modifyNickname));

    }
    const onChangeNickname = (e) => {
        dispatch(changeNicknameField({ type: "modifyNickname", value: e.target.value }))
    }
    const [error, setError] = useState(false);

    useEffect(() => {
        if (modifyNicknameError) {
            // if (modifyNicknameError.response || modifyNicknameError.response.status === 409) {
            //     setError("중복된 닉네임 입니다");
            // }
            setError("중복된 닉네임 입니다");
            console.log("modifynicknameerror", modifyNicknameError);
        }
    }, [modifyNicknameError,]);

    useEffect(() => {
        if (modifyNicknameSuccess) {
            setError("닉네임이 변경되었습니다");
        }
    }, [modifyNicknameSuccess]);






    return (
        <MyPage onSubmitNickname={onSubmitNickname} error={error} onChangeNickname={onChangeNickname} userInfo={userInfo} />
    );
};

export default MyProfileModifyPageContainer;