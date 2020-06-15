import React from 'react';
import parse from 'html-react-parser';
import styled from 'styled-components';
import { StyledImg } from './styles/StyledImg';
import Link from './LinkWrapper';
const Static = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem;

  width: 100%;
  h1 {
    margin: 0;
  }
  div {
    max-width: 1300px;
  }
  @media (max-width: 500px) {
    h1 {
      font-size: 32px;
    }
    h2 {
      font-size: 26px;
    }
    p {
      font-size: 18px;
    }
  }
`;

const mapsStateToProps = (state) => {
  return {
    state: getData(state),
  };
};

const StyledTable = styled.div`
  overflow-x: auto;
`;
const StyledH3 = styled.h4`
  text-transform: uppercase;
  line-height: 140%;
  letter-spacing: 0.2em;
  font-size: 16px;
`;
const StaticBlocks = (data) => {
  const { static_blocks } = data;
  return (
    <Static>
      <h1>{data.title}</h1>
      <div>
        {parse(data.content)}
        <StyledH3>текстовые блоки и изображения для галереи</StyledH3>
        <Link props={'https://test.octweb.ru/api/pages/index/'} />
      </div>
      <section>
        {parse(static_blocks[0].content)}
        <StyledImg index={'1'} small />
        <StyledImg index={'2'} small />
        <StyledImg index={'3'} small />
        <StyledImg index={'4'} small />
      </section>
      <section>{parse(static_blocks[1].content)}</section>
      <section>
        <p>
          Инвариант трансформирует драматизм. Асинхронность эволюции видов, в первом приближении,
          готично иллюстрирует бессознательный драматизм, так Г.Корф формулирует собственную
          антитезу. Теория наивного и сентиментального искусства иллюстрирует комплекс априорной
          бисексуальности. Синтез искусств готично дает мимезис. Монтаж неравномерен.
        </p>
        <blockquote>
          <p>
            Очевидно, что горизонт ожидания монотонно иллюстрирует первоначальный драматизм.
            Эзотерическое потенциально. Миракль, согласно традиционным представлениям, имитирует
            незначительный драматизм, таким образом, сходные законы контрастирующего развития
            характерны и для процессов в психике. Типическое случайно.
          </p>
        </blockquote>
        <p>
          Психологический параллелизм, по определению, иллюстрирует базовый тип личности.
          Художественная контаминация диссонирует экзистенциализм, таким образом, второй комплекс
          движущих сил получил разработку.
        </p>
        <Link
          props={
            'https://test.octweb.ru/api/crop/media/uploads/gallery/gallery/6.jpeg?geometry=420x240&crop=center'
          }
        />
      </section>
    </Static>
  );
};

export default StaticBlocks;
