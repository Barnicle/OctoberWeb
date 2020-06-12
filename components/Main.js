import axios from 'axios';
import styled from 'styled-components';

const StyledSection = styled.section``;

const StyledMain = styled.main`
  display: grid;
  grid-auto-rows: 1fr;
  justify-content: center;
  align-items: center;
  max-width: 1300px;
`;
const Main = () => {
  const data = axios
    .get('https://test.octweb.ru/api/pages/index/?format=json')
    .then((res) => console.log(res));

  return <StyledMain>MAIN</StyledMain>;
};

export default Main;
