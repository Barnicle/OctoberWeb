import React, { Component } from "react";
import { connect } from "react-redux";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { theme, GlobalStyle } from "./styles/theme";
import { fetchData } from "../src/actions";

import Header from "./Header";
import Meta from "./Meta";
import Main from "./Main";
const StyledPage = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 80px 1fr 1fr;
  grid-template-areas: "HEADER" "MAIN" "FOOTER";
`;

class Page extends Component {
  componentDidMount = () => {
    // this.props.dispatch(fetchData());
  };
  render() {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <StyledPage>
          <Meta />
          <Header />
          <Main />
        </StyledPage>
      </ThemeProvider>
    );
  }
}

export default connect()(Page);
