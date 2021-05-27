import RegisterForm2 from 'components/register/RegisterForm2/index';
import { changeField, initialField } from 'modules/registerUserInfo';
import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

const RegisterContainer2 = () => {
    const dispatch = useDispatch();
    const hashtags = useSelector(({ registerUserInfo }) => registerUserInfo.hashtags);

    const onChange = (value) => {
        dispatch(changeField({ type: "hashtags", value: value }));
    }

    // useEffect(() =>
    //     dispatch(initialField("hashtags"))
    //     , [dispatch]);

    return (
        <RegisterForm2 onChange={onChange} hashtags={hashtags} />
    );
};

export default RegisterContainer2;
