import React from 'react';
import styled from 'styled-components';
import Copy from '../public/Copy.svg';

export const LinkWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => props.theme.colors.yellow};
  border-radius: 8px;
  width: 80rem;
  padding: 2rem;
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
      max-width: 500px;
    }
  }
  @media (max-width: 425px) {
    width: 100%;

    align-items: flex-start;
    a {
      max-width: 250px;
    }
  }
`;

const Link = ({ props }) => {
  return (
    <LinkWrapper
      onClick={() =>
        navigator.clipboard
          .writeText(props)
          .then(() => {
            console.log('Great');
          })
          .catch((err) => {
            console.log('Something went wrong', err);
          })
      }
    >
      <a>{props}</a>
      <Copy />
    </LinkWrapper>
  );
};
export default Link;
