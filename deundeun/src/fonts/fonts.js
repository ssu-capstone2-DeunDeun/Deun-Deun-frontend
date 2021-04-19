import { createGlobalStyle } from 'styled-components';
import NotoSansKRRegular from './NotoSansKR-Regular.woff';

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

`;
