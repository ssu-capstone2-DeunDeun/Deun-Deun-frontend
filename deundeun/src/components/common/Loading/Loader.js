import React from 'react';
import ReactLoading from 'react-loading';
import { LoaderBox } from './styles';

function Loader() {
    return (
        <LoaderBox>
            <div className="loadingImg">
                <div>로딩중</div>
                <ReactLoading
                    type="spin"
                    color="black"
                    height="20px"
                    width="40px"
                />
            </div>
        </LoaderBox>
    );
}
export default Loader;

