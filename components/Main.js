import styled from "styled-components";
import { connect } from "react-redux";
import { fetchData } from "../src/actions";
import { getData } from "../src/store";
import parse from "html-react-parser";
const StyledMain = styled.main`
  display: grid;
  grid-auto-rows: 1fr;
  justify-content: center;
  align-items: center;
  max-width: 1300px;
`;

const mapsStateToProps = (state) => {
  return {
    state: getData(state),
  };
};
class Main extends React.Component {
  componentDidMount = () => {
    // this.props.dispatch(fetchData());
  };
  render() {
    const { state } = this.props;
    console.log(typeof state.content);
    return <StyledMain>{<div>{state.content}</div>}</StyledMain>;
  }
}

export default connect(mapsStateToProps)(Main);
