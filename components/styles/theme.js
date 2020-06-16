import { createGlobalStyle } from 'styled-components';

export const theme = {
  colors: {
    alertRed: '#EA4F24',
    blue: '#128ACE',
    basicBlue: '#00A4F7',
    yellow: '#FFF2C3',
    lightGrey: '#FAF9FA',
    grey: '#DADADA',
    darkGrey: '#ADADAD',
    white: '#FFFFFF',
    black: '#333333',
    smallShadow: '0px 5px 25px rgba(0, 0, 0, 0.05)',
    basicShadow: '0px 5px 30px rgba(0, 0, 0, 0.1)',
  },
  textSizes: {
    xs: '16px',
    s: '18px',
    m: '20px',
    l: '40px',
    xl: '54px',
  },
  deviceWidth: {
    maxWidth: '1440px',
    tablet: '768px',
    mobileL: '546px',
    mobile: '425px',
    mobileS: '320px',
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

ul,ol{
  list-style: none;
  max-width: 80%;
}
ol{
  counter-reset: num;
  li::before {
    content: counter(num) ".";
    margin-right: 3rem;
    counter-increment: num;
    color: ${(props) => props.theme.colors.basicBlue};
    font-weight: bold;
  }
}
  ul{
  li {
    position: relative;
    margin-left: 4rem;
  }
  li::before {
    content: url("/public/Ellipse.svg");
    position: absolute;
    display: inline-block;
    margin-right: 3rem;
    left: -2.1em;
    top: 0.5em;
    border: 4px solid ${theme.colors.basicBlue};
    border-radius: 50%;
    width: 1em;
    height: 1em;
  }
  }
blockquote{
border-left: 4px solid ${theme.colors.basicBlue};
padding-left: 4rem;
max-width: 900px;
}
a{
  color: ${theme.colors.black};
  text-decoration: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
  width: 1000px;
 font-size: 16px;
}
td{
  height: 200px;
  width: 200px;
}


thead tr{
border-bottom: 2px solid ${theme.colors.basicBlue};
/* padding: 1rem; */
}
tr{
border-bottom: 2px solid ${theme.colors.lightGrey};
vertical-align: top;
}

tbody tr :first-child, tbody tr :last-child  {
 padding-left: 30px;
 width: 200px;
 height: 200px;
 @media (max-width: 500px) {
    h1 {
      font-size: 32px;
    }
    h2 {
      font-size: 26px;
    }
    p {
      font-size: 18px;
    }
 }
}
`;
