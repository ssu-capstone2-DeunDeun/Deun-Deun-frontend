import RegisterHashtagForm from 'components/register/RegisterHashtagForm/index';
import { addHashtags, getHashtags } from 'lib/api/auth';
import { getUserInfo } from 'modules/currentUserInfo';
import { initHashtagsForm } from 'modules/initHashtags';
import { changeField, hashtagSubmit } from 'modules/registerUserInfo';
import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

const RegisterHashtagContainer = () => {
    const dispatch = useDispatch();
    const { hashtags, inithashtags } = useSelector(({ registerUserInfo, initHashtags }) => ({
        hashtags: registerUserInfo.hashtags,
        inithashtags: initHashtags.inithashtags
    }));

    const onChangeHashtags = (value) => {
        dispatch(changeField({ type: "hashtags", value: value }));
    }

    useEffect(() => {
        dispatch(initHashtagsForm())
    }, [dispatch]);

    // useEffect(() =>
    //     dispatch(initialField("hashtags"))
    //     , [dispatch]);

    return (
        <RegisterHashtagForm onChangeHashtags={onChangeHashtags} hashtags={hashtags} inithashtags={inithashtags} />
    );
};


export default RegisterHashtagContainer;