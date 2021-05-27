import RegisterForm1 from 'components/register/RegisterForm1/index';
import { changeField, initialField } from 'modules/registerUserInfo';
import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

const RegisterContainer1 = () => {
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
        <RegisterForm1 onChange={onChange} nickname={nickname} />
    );
};

export default RegisterContainer1;
