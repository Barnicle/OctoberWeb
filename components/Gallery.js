import React, { Component } from 'react';
import styled from 'styled-components';
import { StyledImg } from './styles/StyledImg';

class Gallery extends Component {
  render() {
    const gallery = this.props.gallery;
    let format;
    return (
      <StyledGallery>
        {Object.keys(gallery).map((key, index) => (
          <StyledImg
            key={index}
            gallery
            format={gallery[key].image.includes('jpeg') ? (format = 'jpeg') : (format = 'jpg')}
            index={gallery[key].id}
            small
            src={gallery[key].image}
          />
        ))}
      </StyledGallery>
    );
  }
}

const StyledGallery = styled.div.attrs({ id: 'gallery' })`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  width: 100%;
`;
export default Gallery;
