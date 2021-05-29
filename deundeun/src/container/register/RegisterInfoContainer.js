import RegisterInfoForm from 'components/register/RegisterInfoForm/index';
import { changeField, duplicated, initialField, signup } from 'modules/registerUserInfo';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

const RegisterInfoContainer = () => {
    const dispatch = useDispatch();
    const { nickname, name, duplicate, signupCheck } = useSelector(({ registerUserInfo }) => ({
        nickname: registerUserInfo.nickname,
        name: registerUserInfo.name,
        duplicate: registerUserInfo.duplicate,
        signupCheck: registerUserInfo.signupCheck
    })
    )
    const [error, setError] = useState(null);


    const onChange = (e) => {
        const { value, name } = e.target;
        dispatch(changeField({ type: name, value: value }));
    }

    useEffect(() =>
        dispatch(initialField("nickname"))
        , [dispatch]);


    const isDuplicated = () => {
        dispatch(duplicated(nickname));
    }

    const handleSubmit = (e) => {
        const form = { nickname, name };
        const userRequestDto = Object.assign(form);
        dispatch(signup(userRequestDto));
    }

    useEffect(() => {
        if (duplicate === true) {
            setError("닉네임이 존재합니다!");
        }
        if (duplicate === false) {
            setError("사용 가능한 닉네임입니다!");
        }

        if (signupCheck) {
            if (signupCheck.response.status === 400) {
            }
            else {
            }
        }

    }, [duplicate, signupCheck])

    return (
        <RegisterInfoForm error={error} handleSubmit={handleSubmit} duplicate={duplicate} isDuplicated={isDuplicated} onChange={onChange} name={name} nickname={nickname} />
    );
};


export default RegisterInfoContainer;
