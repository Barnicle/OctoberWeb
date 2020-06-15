import styled from 'styled-components';
import { connect } from 'react-redux';
import { getData } from '../src/store';
import Form from './Form';
import StaticBlocks from './Sections';
import Gallery from './Gallery';

const MainWrapper = styled.div`
  grid-area: MAIN;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  justify-content: center;
  align-items: center;
  min-width: 320px;
  width: 100%;
  margin: 0 auto;
`;
const mapsStateToProps = (state) => {
  return {
    data: getData(state),
  };
};

class Main extends React.Component {
  render() {
    const { data } = this.props;
    const { gallery } = data;
    return (
      <MainWrapper>
        <StaticBlocks {...data} />
        <Gallery gallery={gallery} />
        <Form />
      </MainWrapper>
    );
  }
}
//TODO: сделать копирования по щелчку

export default connect(mapsStateToProps)(Main);
