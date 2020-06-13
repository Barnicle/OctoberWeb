import { createGlobalStyle } from "styled-components";

export const theme = {
  colors: {
    alertRed: "#EA4F24",
    blue: "#128ACE",
    basicBlue: "#00A4F7",
    yellow: "#FFF2C3",
    lightGrey: "#FAF9FA",
    grey: "#DADADA",
    darkGrey: "#ADADAD",
    black: "#333333",
    smallShadow: "0px 5px 25px rgba(0, 0, 0, 0.05)",
    basicShadow: "0px 5px 30px rgba(0, 0, 0, 0.1)",
  },
  textSizes: {
    xs: "16px",
    s: "18px",
    m: "20px",
    l: "40px",
    xl: "54px",
  },
  deviceWidth: {
    maxWidth: "1440px",
    tablet: "768px",
    mobileL: "546px",
    mobile: "425px",
    mobileS: "320px",
  },
};

export const GlobalStyle = createGlobalStyle`

html{
  box-sizing: border-box;
  font-size: 10px;
}
*, *:before, *:after{
  box-sizing: inherit;
}
body{
  padding: 0;
  margin: 0;
  font-size: 2rem;
  line-height: 2;
  color:${theme.colors.black};
  font-family: 'Montserrat';
}
a{
  color: ${theme.colors.black};
  text-decoration: none;
}`;
