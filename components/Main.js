import styled from "styled-components";
import { connect } from "react-redux";
import { getData } from "../src/store";
import { StyledUL, StyledOL } from "./Lists";
import parse from "html-react-parser";
import Copy from "../public/copy.svg";
import Form from "./Form";

const StyledMain = styled.main`
  grid-area: MAIN;
  justify-content: center;
  align-items: center;
`;
const StyledImg = styled.img`
  border-radius: 8px;
`;
const MainWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: 0 auto;
`;
const mapsStateToProps = (state) => {
  return {
    state: getData(state),
  };
};

class Main extends React.Component {
  hadleParse = (string) => {
    return parse(string);
  };
  componentDidMount = () => {
    // this.props.dispatch(fetchData());
  };
  render() {
    const { state } = this.props;

    return (
      <StyledMain>
        <MainWrapper>
          <LinkWrapper>
            <a href="https://test.octweb.ru/api/pages/index/">
              https://test.octweb.ru/api/pages/index/
            </a>
            <Copy />
            <StyledImg
              src={
                "https://test.octweb.ru/api/crop/media/uploads/gallery/gallery/6.jpeg?geometry=420x240&crop=center"
              }
            />
          </LinkWrapper>
          <Form />
        </MainWrapper>
      </StyledMain>
    );
  }
}
//TODO: сделать копирования по щелчку
const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => props.theme.colors.yellow};
  border-radius: 8px;
  width: 80rem;
  padding: 0.8rem 2rem 0.8rem 2rem;
`;
export default connect(mapsStateToProps)(Main);
