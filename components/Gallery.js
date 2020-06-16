import React, { Component } from 'react';
import styled from 'styled-components';
import { StyledImg, StyledImgWrapper, StyledOverlay, StyledGallery } from './styles/StyledImg';
import Link from './LinkWrapper';
import Carousel, { Modal, ModalGateway } from 'react-images';
class Gallery extends Component {
  render() {
    const gallery = this.props.gallery;
    let format;
    return (
      <React.Fragment>
        <section>
          <h2>Галерея с изображениями</h2>
          <p>
            Все просто. Выводится столько фотографий сколько влезит на экран. Те что не влезли
            рассчитываются и выводится их количество над последней фотографией. По клику на эту
            подпись так же открывается увеличенное версия того изображения, над которым выводится
            подпись.
          </p>
          <StyledGallery id="gallery">
            {Object.keys(gallery).map((key, index) => (
              <StyledImgWrapper key={index}>
                <StyledImg
                  gallery
                  format={
                    gallery[key].image.includes('jpeg') ? (format = 'jpeg') : (format = 'jpg')
                  }
                  index={gallery[key].id}
                  small
                  src={gallery[key].image}
                />
                <StyledOverlay />
              </StyledImgWrapper>
            ))}
          </StyledGallery>
          <Link
            props={
              'https://test.octweb.ru/api/crop/media/uploads/gallery/gallery/6.jpeg?geometry=420x240&crop=center'
            }
          />
        </section>
      </React.Fragment>
    );
  }
}

export default Gallery;
