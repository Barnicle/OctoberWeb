import React from 'react';
import parse from 'html-react-parser';
import styled from 'styled-components';
import { StyledImg, StyledImgWrapper, StyledOverlay, StyledGallery } from './styles/StyledImg';
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
`;

const StyledTable = styled.div`
  display: block;
  overflow-x: auto;
  max-width: 100rem;
  @media (max-width: 1024px) {
    max-width: 72rem;
  }
  @media (max-width: 768px) {
    max-width: 62rem;
  }
  @media (max-width: 668px) {
    max-width: 52rem;
  }
  @media (max-width: 425px) {
    max-width: 32rem;
  }
`;
const StyledH3 = styled.h4`
  text-transform: uppercase;
  line-height: 140%;
  letter-spacing: 0.2em;
  font-size: 16px;
`;

const GreyText = styled.p`
  position: absolute;
  top: ${(props) => props.top};
  right: 0;
  font-size: 18px;
  width: 31rem;
  line-height: 160%;
  color: #adadad;

  @media (max-width: 1024px) {
    position: initial;
    width: 100%;
  }
`;
const StaticBlocks = (data) => {
  const { static_blocks } = data;
  return (
    <Static id="static_blocks">
      <h1>{data.title}</h1>
      <div>
        <div>
          {parse(data.content)}
          <GreyText top={'20%'}>
            Этот блок с описанием тоже нужно сверстать. Специально использовали разные стили и
            текстовые блоки, даже если они порой неуместны ;)
          </GreyText>
        </div>
        <StyledH3>текстовые блоки и изображения для галереи</StyledH3>
        <Link smallWidth props={'https://test.octweb.ru/api/pages/index/'} />
      </div>
      <section>
        {parse(static_blocks[0].content)}

        <StyledGallery nowrap>
          <StyledImgWrapper>
            <StyledImg index={'1'} small />
            <StyledOverlay />
          </StyledImgWrapper>
          <StyledImgWrapper>
            <StyledImg index={'2'} small />
            <StyledOverlay />
          </StyledImgWrapper>
          <StyledImgWrapper>
            <StyledImg index={'3'} small />
            <StyledOverlay />
          </StyledImgWrapper>
          <StyledImgWrapper>
            <StyledImg index={'4'} small />
            <StyledOverlay />
          </StyledImgWrapper>
        </StyledGallery>
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
      </section>
      <StyledTable>
        <table>
          <thead>
            <tr>
              <th scope="col">Название</th> <th scope="col">Описание</th>
              <th scope="col">Значение</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Пингвин</td>
              <td>
                Семейство нелетающих морских птиц, единственное современное в отряде
                пингвинообра́зных. Все представители этого семейства хорошо плавают и ныряют.
              </td>
              <td>0,3 лошадиных силы</td>
            </tr>
            <tr>
              <td>Гагарка</td>
              <td>
                Вид морских птиц из семейства чистиковых. После истребления нелетающей бескрылой
                гагарки в XIX веке этот вид остался единственным в роде гагарок.
              </td>
              <td>0,1 лошадиная сила</td>
            </tr>
            <tr>
              <td>Тупик</td>
              <td>
                Вид морских птиц из семейства чистиковых отряда ржанкообразных. Обитают на
                побережьях Атлантического и Северного Ледовитого океанов. Гнездятся в норах на
                птичьих базарах. Питаются рыбой, в основном песчанками.
              </td>
              <td>0,1 лошадиная сила</td>
            </tr>
          </tbody>
        </table>
      </StyledTable>
    </Static>
  );
};

export default StaticBlocks;
