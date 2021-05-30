import { ACCESS_TOKEN } from 'constants/index';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'


class OAuth2RedirectHandler extends Component {
    getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');

        var results = regex.exec(this.props.location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    };

    render() {
        const error = this.getUrlParameter('error');
        const info = this.getUrlParameter('info');
        const hashtag = this.getUrlParameter('hashtag');
        const jwtAccessToken = this.getUrlParameter('jwtAccessToken');

        console.log("info=", info);
        console.log("error=", error);
        console.log("hashtag=", hashtag);
        console.log("jwtAccessToken=", jwtAccessToken);

        if (jwtAccessToken) {
            localStorage.setItem(ACCESS_TOKEN, jwtAccessToken);
            console.log("access_token", ACCESS_TOKEN);
            // return <Redirect to={{
            //     pathname: "/profile",
            //     state: { from: this.props.location }
            // }} />;
        }

        if (info === 'false') {  //정보 입력이 안된 경우
            return <Redirect to="/register/1" />
        }
        else if (hashtag === '') {   //hashtag가 안된경우
            return <Redirect to="/register/2" />
        }
        else {
            return <Redirect to="/home" />
        }
    }
}

export default OAuth2RedirectHandler;