import { colors } from "src/utils/constants/colors.constants";
import { breakpoints } from "src/utils/constants/media.constants";
import { createGlobalStyle } from "styled-components";

export const NormalizeStyles = createGlobalStyle`
    /* Reset and base styles  */
* {
	padding: 0px;
	margin: 0px;
	border: none;
}

*,
*::before,
*::after {
	box-sizing: border-box;
}

body {
    margin: 0;
}

/* Links */

a, a:link, a:visited  {
    text-decoration: none;
}

a:hover  {
    text-decoration: none;
}

/* Common */

aside, nav, footer, header, section, main {
	display: block;
}

h1, h2, h3, h4, h5, h6, p {
    font-size: inherit;
	font-weight: inherit;
}

ul, ul li {
	list-style: none;
}

img {
	vertical-align: top;
}

img, svg {
	max-width: 100%;
	height: auto;
}

address {
  font-style: normal;
}

/* Form */

input, textarea, button, select {
	font-family: inherit;
    font-size: inherit;
    color: inherit;
    background-color: transparent;
}

input::-ms-clear {
	display: none;
}

button, input[type="submit"] {
    display: inline-block;
    box-shadow: none;
    background-color: transparent;
    background: none;
    cursor: pointer;
}

input:focus, input:active,
button:focus, button:active {
    outline: none;
}

button::-moz-focus-inner {
	padding: 0;
	border: 0;
}

label {
	cursor: pointer;
}

legend {
	display: block;
}

`;

export const GlobalStyles = createGlobalStyle`
    body {
        font-family: "PT Sans", sans-serif;
        color: ${colors.foreground.main};
        background-color: ${colors.background};
    }

    h2 {
        font-size: 56px;
        line-height: 120%;
        font-weight: bold;
        @media (max-width: ${breakpoints.desktop}px) {
            font-size: 56px;
        }
        @media (max-width: ${breakpoints.container}px) {
            font-size: 48.8px;
        }
        @media (max-width: ${breakpoints.laptopL}px) {
            font-size: 45.2px;
        }
        @media (max-width: 1200px) {
            font-size: 39.8px;
        }
        @media (max-width: ${breakpoints.laptop}px) {
            font-size: 35.84px;
        }
        @media (max-width: ${breakpoints.tablet}px) {
            font-size: 30.08px;
        }
        @media (max-width: ${breakpoints.mobileL}px) {
            font-size: 22.3625px;
        }
        @media (max-width: ${breakpoints.mobileM}px) {
            font-size: 21.2375px;
        }
        @media (max-width: ${breakpoints.mobileS}px) {
            font-size: 20px;
}
    }

    h3 {
        font-size: 25px;
        line-height: 120%;
        @media (max-width: ${breakpoints.desktop}px) {
            font-size: 25px;
        }
        @media (max-width: ${breakpoints.container}px) {
            font-size: 23.2px;
        }
        @media (max-width: ${breakpoints.laptopL}px) {
            font-size: 22.3px;
        }
        @media (max-width: 1200px) {
            font-size: 20.95px;
        }
        @media (max-width: ${breakpoints.laptop}px) {
            font-size: 19.96px;
        }
        @media (max-width: ${breakpoints.tablet}px) {
            font-size: 18.52px;
        }
        @media (max-width: ${breakpoints.mobileL}px) {
            font-size: 16.590625px;
        }
        @media (max-width: ${breakpoints.mobileM}px) {
            font-size: 16.309375px;
        }
        @media (max-width: ${breakpoints.mobileS}px) {
            font-size: 16px;
        }
    }

    p {
        font-size: 20px;
        line-height: 145%;
        @media (max-width: ${breakpoints.desktop}px) {
            font-size: 20px;
        }
        @media (max-width: ${breakpoints.container}px) {
            font-size: 18.8px;
        }
        @media (max-width: ${breakpoints.laptopL}px) {
            font-size: 18.2px;
        }
        @media (max-width: 1200px) {
            font-size: 17.3px;
        }
        @media (max-width: ${breakpoints.laptop}px) {
            font-size: 16.64px;
        }
        @media (max-width: ${breakpoints.tablet}px) {
            font-size: 15.68px;
        }
        @media (max-width: ${breakpoints.mobileL}px) {
            font-size: 14.39375px;
        }
        @media (max-width: ${breakpoints.mobileM}px) {
            font-size: 14.20625px;
        }
        @media (max-width: ${breakpoints.mobileS}px) {
            font-size: 14px;
        }
    }

    
    
`;
