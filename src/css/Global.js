import {createGlobalStyle} from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
    ${reset}
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');
    body{
        width: 100%;
        font-size: 16px;
        font-family:'Noto Sans KR', sans-serif;
        color: #333;
    }
    a{
        color: #333;
        text-decoration: none;
    }
    img{
        vertical-align: top;
    }

`

export default GlobalStyle