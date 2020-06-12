import styled from 'styled-components';
import Logo from '../public/Logo.svg';

const StyledHeader = styled.header`
  box-shadow: ${(props) => props.theme.colors.smallShadow};
  grid-area: HEADER;
  @media (max-width: 425px) {
    box-shadow: none;
  }
`;
const NavLink = styled.a`
  color: ${(props) => props.theme.colors.blue};
  font-size: ${(props) => (props.small ? '18px' : '20px')};
  padding: 1rem;
  white-space: nowrap;
  font-weight: 600;
  line-height: 22px;
  grid-area: 'NAVLINK';
  @media (max-width: 425px) {
    display: none;
  }
`;

const StyledNav = styled.nav`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-areas: 'LOGO' 'NAVBAR' 'NAVLINK';
  justify-content: center;
  align-items: center;
  padding: 1rem;
  .navbar {
    grid-area: 'NAVBAR';
  }
  @media (max-width: 425px) {
    grid-template-columns: auto;
    grid-template-areas: 'LOGO';
    .navbar {
      display: none;
    }
  }
`;
const StyledLogo = styled(Logo)`
  grid-area: LOGO;
`;
const Header = () => {
  return (
    <React.Fragment>
      <StyledHeader>
        <StyledNav>
          <StyledLogo />
          <div className="navbar">
            <NavLink small>Текстовые блоки</NavLink>
            <NavLink small>Галерея</NavLink>
          </div>
          <NavLink>👋 Форма с приветами</NavLink>
        </StyledNav>
      </StyledHeader>
    </React.Fragment>
  );
};

export default Header;
