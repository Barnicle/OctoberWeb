import React, { Component } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { theme, GlobalStyle } from './styles/theme';
import Header from './Header';
import Meta from './Meta';

const StyledPage = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 80px 1fr 1fr 1fr;
  grid-template-areas: 'HEADER' 'MAIN' 'FOOTER';
  /* max-width: ${(props) => props.theme.deviceWidth.maxWidth}; */
`;

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <StyledPage>
          <Meta />
          <Header />
        </StyledPage>
      </ThemeProvider>
    );
  }
}

export default Page;
