import styled from 'styled-components';
import axios from 'axios';

export const StyledImg = styled.img.attrs((props) => ({
  src: `${
    props.gallery
      ? `https://test.octweb.ru/media/uploads/gallery/gallery/${props.index}.${
          props.format
        }?geometry=${props.small ? '162' : '100'}x240&crop=center`
      : `https://test.octweb.ru/media/${props.index}.jpg`
  }`,
}))`
  border-radius: 8px;
  margin: 2rem;
  width: 162px;
  height: 100px;
  object-fit: cover;
  @media (max-width: 768px) {
    margin: 0.2rem;
  }
  @media (max-width: 425px) {
    width: 162px;
    height: 100px;
  }
`;
