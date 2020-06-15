export const LinkWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => props.theme.colors.yellow};
  border-radius: 8px;
  width: 80rem;
  padding: 0.8rem 2rem 0.8rem 2rem;
  cursor: pointer;
  :active {
    ::after {
      position: absolute;
      content: 'Скопировал!';
      right: 0;
      top: -50px;
      animation: fadein 2s;
    }
  }
  @media (max-width: 768px) {
    width: 100%;

    flex-flow: wrap;
    word-break: break-all;
    a {
      max-width: 200px;
    }
  }
`;
import styled from 'styled-components';

export const NavLink = styled.a`
  color: ${(props) => props.theme.colors.basicBlue};
  font-size: ${(props) => (props.small ? '18px' : '20px')};
  padding: ${(props) => (props.noPadding ? '0' : '1rem')};
  white-space: nowrap;
  font-weight: 800;
  line-height: 160%;
  grid-area: 'NAVLINK';
  @media (max-width: 425px) {
    display: ${(props) => (props.hide ? 'none' : 'block')};
  }
`;
