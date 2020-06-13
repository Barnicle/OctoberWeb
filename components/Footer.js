import styled from "styled-components";

const StyledFooter = styled.footer`
  grid-area: FOOTER;
  height: 100%;
`;
const FooterWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background: #faf9fa;
  align-items: start;
  border-bottom: 2px solid #128ace;
  box-shadow: 0px 5px 25px rgba(0, 0, 0, 0.05);
  width: 90%;
  margin: 0 auto;
  height: 100%;
  @media (max-width: 556px) {
    width: 100%;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <FooterWrapper>
        <div>
          <h2>Санкт-Петербург</h2>
          <p>Большой Проспект П.С., 18, офис 22</p>
          <div>
            <a>Текстовые блоки</a>
            <a>Галерея</a>
            <a>Форма</a>
          </div>
        </div>
        <div>
          <h2>mail@octoberweb.ru</h2>
          <h4>+7 (981) 131-64-98</h4>
        </div>
        <div>
          <button>Написать Нам</button>
          <p>© 2009-2020 OctoberWeb</p>
        </div>
      </FooterWrapper>
    </StyledFooter>
  );
};

export default Footer;
