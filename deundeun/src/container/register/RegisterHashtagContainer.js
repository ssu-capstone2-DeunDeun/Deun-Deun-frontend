import RegisterHashtagForm from 'components/register/RegisterHashtagForm/index';
import { changeField, initialField } from 'modules/registerUserInfo';
import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

const RegisterHashtagContainer = () => {
    const dispatch = useDispatch();
    const hashtags = useSelector(({ registerUserInfo }) => registerUserInfo.hashtags);

    const onChange = (value) => {
        dispatch(changeField({ type: "hashtags", value: value }));
    }

    // useEffect(() =>
    //     dispatch(initialField("hashtags"))
    //     , [dispatch]);

    return (
        <RegisterHashtagForm onChange={onChange} hashtags={hashtags} />
    );
};


export default RegisterHashtagContainer;