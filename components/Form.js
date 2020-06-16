import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import InputMask from 'react-input-mask';
import { useForm } from 'react-hook-form';
import { getFormData } from '../src/store';
import BisnessMan from '../public/bisness-man.svg';
import { ValidEmail, ValidPhone, ValidTextAria, ValidCheckBox, ValidForm } from '../src/actions';
const mapsStateToProps = (state) => {
  return {
    form: getFormData(state),
  };
};

const Inner = styled.div`
  background: ${(props) => props.theme.colors.lightGrey};
  box-shadow: 0px 5px 25px ${(props) => props.theme.colors.smallShadow};
`;
const Form = () => {
  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (e.target.value != '') document.querySelector('#submit').disabled = false;
  //   else document.querySelector('#submit').disabled = true;
  // };

  // validPhone = (phone) => {
  //   if (
  //     /(\+7|8)[- _]*\(?[- _]*(\d{3}[- _]*\)?([- _]*\d){7}|\d\d[- _]*\d\d[- _]*\)?([- _]*\d){6})/g.test(
  //       phone
  //     )
  //   )
  //     return true;
  //   else false;
  // };

  // validEmail = (e) => {
  //   if (
  //     /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/g.test(
  //       e.target.value
  //     )
  //   )
  //     console.log('valid');
  //   else console.log('invalid');
  // };

  // render() {
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = (values) => console.log(values);
  const handleValid = () => {
    const button = document.querySelector('#submit');
    const nodes = document.querySelectorAll('input');
    let isValid =
      nodes[0].validity.valid &&
      nodes[1].validity.valid &&
      nodes[2].validity.valid &&
      nodes[3].validity.valid &&
      nodes[4].validity.valid;
    if (isValid) {
      button.disabled = false;
    } else button.disabled = true;
  };
  return (
    <Inner>
      <FormWrapper>
        <StyledForm id="form" onSubmit={handleSubmit(onSubmit)}>
          <StyledBisnessMan />
          <h2>Форма с приветами</h2>
          <StyledInputMask
            onChange={() => handleValid()}
            type={'name'}
            id={'name'}
            name={'name'}
            placeholder={'Ваша имя'}
          />
          <StyledInputMask
            onChange={() => handleValid()}
            type={'text'}
            id="phone"
            mask
            name={'phone'}
            required
            ref={register({
              required: 'Required',
              min: 12,
              pattern: /\+7\(\d{3}\)\d{3}-\d{2}-\d{2}/,
            })}
            placeholder={'Телефон'}
          />
          <StyledInputMask
            type={'email'}
            required
            name={'email'}
            ref={register({
              required: 'Required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: 'invalid email address',
              },
            })}
            onChange={() => handleValid()}
            id="email"
            placeholder={'Электронная почта'}
          />
          <StyledInputMask
            required
            name={'textaria'}
            onChange={() => handleValid()}
            type={'text'}
            id="textaria"
            placeholder={'Сообщение'}
            required
          />
          <StyledCustomCheckbox>
            <label className="container">
              <input
                className="custom-checkbox"
                onChange={() => handleValid()}
                id="textaria"
                type="checkbox"
                required
                name={'checkbox'}
              />
              <span className="checkmark"></span>
            </label>
            <p>Согласен с правилами обработки моих персональных данных</p>
          </StyledCustomCheckbox>
          <StyledSubmit disabled type={'submit'} id={'submit'}>
            Отправить сообщение
          </StyledSubmit>
        </StyledForm>
      </FormWrapper>
    </Inner>
  );
};

export default Form;
// export default connect(mapsStateToProps)(Form);
const FormWrapper = styled.div`
  width: 90%;
  z-index: 10;
  margin: 0 auto;
  border-bottom: 1px solid ${(props) => props.theme.colors.darkGrey};
  margin-top: 100px;
  h2 {
    margin-bottom: 53px;
    z-index: 2;
    line-height: 120%;
  }
  form {
    margin: 0 auto;
  }
  @media (max-width: 425px) {
    h2 {
      font-size: 3rem;
    }
    margin-top: 0;
  }
`;
const StyledForm = styled.form`
  position: relative;
  display: flex;
  flex-flow: column;
  max-width: 900px;
  padding: 1rem;
  z-index: 5;
  @media (max-width: 425px) {
    padding: 0;
  }
`;
const StyledCustomCheckbox = styled.label`
  display: flex;
  flex-flow: nowrap;
  align-items: start;
  position: relative;
  p {
    margin: 0;
    padding-left: 1.5rem;
    max-width: 580px;
    white-space: pre-line;
    line-height: 160%;
  }
  margin-bottom: 12px;
  font-size: 20px;
  .container {
    display: block;
    position: relative;
    width: min-content;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    margin-right: 1.3rem;
  }
  .container input {
    position: relative;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
  .checkmark {
    position: absolute;
    top: 5px;
    left: 0;
    height: 25px;
    width: 25px;
    border: 1px solid ${(props) => props.theme.colors.darkGrey};
    border-radius: 5px;
  }

  .container:hover input ~ .checkmark {
    background-color: transparent;
  }

  .container input:checked ~ .checkmark {
    background-color: ${(props) => props.theme.colors.basicBlue};
    border: 1px solid ${(props) => props.theme.colors.basicBlue};
  }

  .container .checkmark:after {
    content: '';
    position: absolute;
    display: none;
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
  > .custom-checkbox:hover ~ .checkmark:after {
    display: block !important;
    border: solid ${(props) => props.theme.colors.darkGrey};
    border-width: 0 3px 3px 0;
  }
  .container input:checked ~ .checkmark:after {
    display: block;
  }
`;

const StyledSubmit = styled.button`
  position: relative;
  background: ${(props) => props.theme.colors.basicBlue};
  color: ${(props) => props.theme.colors.white};
  font-weight: 600;
  border: 1px solid transparent;
  width: 320px;
  padding: 2rem;
  font-size: 20px;
  border-radius: 8px;

  opacity: 1;
  :disabled {
    opacity: 0.25;
    :hover {
      background: ${(props) => props.theme.colors.basicBlue};
    }
  }
  :hover {
    background: ${(props) => props.theme.colors.blue};
  }
`;

const StyledInputMask = styled(InputMask).attrs((props) => ({
  id: props.id,
  mask: props.mask ? '+7(999)999-99-99' : '',
}))`
  position: relative;
  border-radius: 8px;
  padding: 2rem;
  font-size: 18px;
  margin-bottom: 4rem;
  border: 2px solid ${(props) => props.theme.colors.darkGrey};
  ::placeholder {
    font-size: 18px;
    font-weight: bold;
  }
  z-index: 2;
  height: ${(props) => (props.id === 'textaria' ? '150px' : 'auto')};
  :valid:not(::first-child) {
    border: 2px solid ${(props) => props.theme.colors.basicBlue};
  }

  :invalid:not(:focus):not(:placeholder-shown) {
    // Show a light reminder
    border: 2px solid ${(props) => props.theme.colors.alertRed};
    color: ${(props) => props.theme.colors.alertRed};
  }
  :invalid {
    color: ${(props) => props.theme.colors.alertRed};
  }
  :focus {
    outline: none;
    border: 2px solid ${(props) => props.theme.colors.basicBlue};
  }
`;

const StyledBisnessMan = styled(BisnessMan)`
  display: block;
  position: absolute;
  top: -40px;
  left: -240px;
  z-index: 1;
  @media (max-width: 768px) {
    position: relative;
    width: 320px;
    top: 0px;
    left: 0px;
  }
`;
