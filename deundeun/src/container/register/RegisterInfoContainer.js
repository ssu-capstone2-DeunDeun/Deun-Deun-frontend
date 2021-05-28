import RegisterInfoForm from 'components/register/RegisterInfoForm/index';
import { changeField, initialField } from 'modules/registerUserInfo';
import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

const RegisterInfoContainer = () => {
    const dispatch = useDispatch();
    const nickname = useSelector(({ registerUserInfo }) => registerUserInfo.nickname)

    const onChange = (e) => {
        const { value } = e.target;
        console.log(e);
        console.log(value);
        dispatch(changeField({ type: "nickname", value: value }));
    }

    useEffect(() =>
        dispatch(initialField("nickname")), [dispatch]);

    return (
        <RegisterInfoForm onChange={onChange} nickname={nickname} />
    );
};

export default RegisterInfoContainer;
