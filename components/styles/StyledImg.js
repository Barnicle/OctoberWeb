import styled from 'styled-components';
import axios from 'axios';

export const StyledImg = styled.img.attrs((props) => ({
  src: `${
    props.gallery
      ? `https://test.octweb.ru/media/uploads/gallery/gallery/${props.index}.${
          props.format
        }?geometry=${props.small ? '162' : '300'}x240&crop=center`
      : `https://test.octweb.ru/media/${props.index}.jpg`
  }`,
}))`
  position: relative;
  border-radius: 8px;

  width: 100%;
  height: 100%;
  object-fit: cover;

  @media (max-width: 768px) {
    margin: 0.2rem;
  }
  @media (max-width: 425px) {
    width: 162px;
    height: 100px;
  }
`;
export const StyledImgWrapper = styled.div`
  position: relative;
  border-radius: 8px;
  margin: 2rem;
  width: 162px;
  height: 100px;
  @media (min-width: 1024px) {
    width: 250px;
    height: 170px;
  }
  @media (max-width: 768px) {
    margin: 0.2rem;
  }
  @media (max-width: 425px) {
    width: 162px;
    height: 100px;
  }
`;
export const StyledOverlay = styled.div`
  position: absolute;
  display: block;
  border-radius: 8px;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0;
  :hover {
    opacity: 0.2;
  }
`;
export const StyledGallery = styled.div`
  display: flex;
  flex-flow: row wrap;

  align-items: flex-start;
  width: 100%;
  margin-bottom: 3rem;
  @media (max-width: 768px) {
  }
`;
