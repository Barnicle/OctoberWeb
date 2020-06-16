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
  max-width: ${(props) => (props.smallWidth ? '60rem' : '110rem')};
  padding: 1.5rem;
  text-decoration: underline;

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
    width: 90%;
    margin: 0 auto;
    flex-flow: wrap;
    word-break: break-all;
    a {
      max-width: 51rem;
    }
  }
  @media (max-width: 600px) {
    a {
      max-width: 41rem;
    }
  }
  @media (max-width: 425px) {
    align-items: flex-start;
    a {
      max-width: 26rem;
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
