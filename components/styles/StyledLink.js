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
