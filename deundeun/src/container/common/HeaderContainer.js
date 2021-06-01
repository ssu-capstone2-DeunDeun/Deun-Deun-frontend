import Header from 'components/common/Header/index';
import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUserInfo, initialUserInfo } from 'modules/currentUserInfo';
import { ACCESS_TOKEN } from 'constants/index';
import { getHome } from 'modules/initHomePage';

const HeaderContainer = () => {
    const dispatch = useDispatch();
    const userInfo = useSelector(({ currentUserInfo }) => (currentUserInfo.userInfo));
    const [checkLogin, setCheckLogin] = useState(false);


    useEffect(() => {
        dispatch(getHome("DATE"));

    }, [dispatch])

    useEffect(() => {
        dispatch(getUserInfo());
    }, [dispatch]);



    useEffect(() => {
        if (localStorage.getItem(ACCESS_TOKEN)) {
            setCheckLogin(true);
        } else {
            setCheckLogin(false);
        }
    }, [dispatch]);


    const onLogout = () => {
        localStorage.removeItem(ACCESS_TOKEN);
        dispatch(initialUserInfo("userInfo"));
        setCheckLogin(false);
    }
    return (
        <Header onLogout={onLogout} userInfo={userInfo} checkLogin={checkLogin} />
    )
};

export default HeaderContainer;