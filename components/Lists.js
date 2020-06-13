import styled from "styled-components";

export const StyledUL = styled.ul`
  list-style: none;
  li {
    position: relative;
  }
  li::before {
    content: url("/public/Ellipse.svg");
    position: absolute;
    display: inline-block;
    left: -2em;
    top: 0.5em;
    border: 4px solid #00a4f7;
    border-radius: 50%;
    width: 1em;
    height: 1em;
  }
`;

export const StyledOL = styled.ol`
  list-style: none;
  counter-reset: num;
  li::before {
    content: counter(num) ".";
    margin-right: 1rem;
    counter-increment: num;
    color: ${(props) => props.theme.colors.basicBlue};
    font-weight: bold;
  }
`;
