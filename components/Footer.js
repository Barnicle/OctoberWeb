import styled from 'styled-components';
import { NavLink } from './styles/StyledLink';
const StyledFooter = styled.footer`
  grid-area: FOOTER;
  height: 100%;
  min-width: 300px;
`;
const FooterWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 1fr);
  grid-template-rows: 1fr 1fr;

  padding: 5rem 3rem 5rem 3rem;
  grid-gap: 3rem;
  .second {
    display: flex;
    flex-flow: row;
    width: 100%;
    P {
      font-size: 16px;
      white-space: nowrap;
    }
  }

  .first {
    display: grid;
    grid-template-columns: repeat(auto-fill, 1fr);
    grid-template-rows: 1fr 1fr;
    grid-auto-flow: row;
    grid-gap: 0 5rem;
    white-space: nowrap;
  }

  border-bottom: 2px solid ${(props) => props.theme.colors.lightBlue};
  width: 90%;
  margin: 0 auto;
  height: 100%;
  > div {
    h4,
    h2,
    p {
      margin: 0;
    }
    display: flex;
    flex-flow: column;
    vertical-align: top;
  }
  /* @media (min-width: 769px) and(max-width:1024) {
  } */
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(auto-fill, 1fr);
    padding: 1.5rem;
    .first {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr 80px;
      grid-auto-flow: column;
      white-space: pre-wrap;
    }
    .second {
      flex-flow: column;
    }
  }
`;
const StyledButton = styled.button`
  color: ${(props) => props.theme.colors.basicBlue};
  margin-left: auto;
  margin-right: 0;
  background: ${(props) => props.theme.colors.white};
  font-size: 18px;
  font-weight: bold;
  line-height: 160%;
  max-width: 200px;
  width: 100%;
  height: 50px;
  text-align: center;
  border-radius: 8px;
  border: 2px solid ${(props) => props.theme.colors.basicBlue};
  @media (max-width: 1024px) {
    width: 100%;
    max-width: 1024px;
    margin-left: 0;
  }
  @media (max-width: 300px) {
    max-width: 250px;
  }
`;

const Inner = styled.div`
  background: ${(props) => props.theme.colors.lightGrey};
  box-shadow: 0px 5px 25px ${(props) => props.theme.colors.smallShadow};
  width: 100%;
`;
const Footer = () => {
  return (
    <Inner>
      <StyledFooter>
        <FooterWrapper>
          <div className="first">
            <div>
              <h4>Санкт-Петербург</h4>
              <p>Большой Проспект П.С., 18, офис 22</p>
            </div>
            <div>
              <h4>mail@octoberweb.ru</h4>
              <h4>+7 (981) 131-64-98</h4>
            </div>
            <StyledButton className="button">Написать нам</StyledButton>
          </div>
          <div className="second">
            <FooterNav>
              <NavLink noPadding to="static_blocks">
                Текстовые блоки
              </NavLink>
              <NavLink noPadding to="#gallery">
                Галерея
              </NavLink>
              <NavLink noPadding to="#form">
                Форма
              </NavLink>
            </FooterNav>
            <p>© 2009-2020 OctoberWeb</p>
          </div>
        </FooterWrapper>
      </StyledFooter>
    </Inner>
  );
};
const FooterNav = styled.div`
  display: flex;
  width: 100%;

  flex-flow: wrap;

  a {
    padding-right: 4rem;
  }
`;
export default Footer;
