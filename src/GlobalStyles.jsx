import {createGlobalStyle} from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    *, *::after, *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        --home-bg: #151515;
        --color-black: #141414;
        --color-white: #fff;
        --color-gray: #e5e5e5;
        --color-yellow: #ffec82;
        --hard-pink: #ffa8b9;
        --soft-pink: #f3e7e9;
        --primary-font:  'Poppins', sans-serif;
        --secondary-font: 'Sarabun', sans-serif;
    }

    body {
        height: 100vh;
        width: 100vw;
        background: var(--home-bg);
        font-family: var(--secondary-font);
        overflow: hidden;
    }
`