import { createGlobalStyle } from 'styled-components';
import NotoSansKRRegular from './NotoSansKR-Regular.woff';
import NotoSansKRBold from './NotoSansKR-Bold.woff';
export default createGlobalStyle`
    @font-face {
        font-family: 'NotoSansKR';
        src: local('NotoSansKR'),
        url(${NotoSansKRRegular}) format('woff');
        font-weight: 500;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.45;
        letter-spacing: normal;
        text-align: left;
        color: #282828;
    }

    @font-face {
        font-family: 'NotoSansKRBold';
        src: local('NotoSansKRBold'),
        url(${NotoSansKRBold}) format('woff');
        font-weight: 900;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.45;
        letter-spacing: normal;
        text-align: left;
        color: #282828;
    }
`;
