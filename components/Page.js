import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle } from './styles/theme';
import Header from './Header';
import Meta from './Meta';
import Main from './Main';
import Footer from './Footer';

const StyledPage = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 80px 1fr auto;
  min-width: 300px;
  grid-template-areas: 'HEADER' 'MAIN' 'FOOTER';
  @media (max-width: 425px) {
    grid-template-rows: 40px 1fr auto;
  }
`;

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <StyledPage>
          <Meta />
          <Header />
          <Main />
          <Footer />
        </StyledPage>
      </ThemeProvider>
    );
  }
}

export default Page;
