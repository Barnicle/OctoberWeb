import React, { Component, Fragment } from "react";
import styled from "styled-components";
import BisnessMan from "../public/bisness-man.svg";

export default class Form extends Component {
  handleSubmit = (e) => {
    if (e.target.value != "")
      document.querySelector("#submit").disabled = false;
    else document.querySelector("#submit").disabled = true;
  };
  render() {
    return (
      <FormWrapper>
        <StyledForm>
          <StyledBisnessMan />
          <h2>Форма с приветами</h2>
          <StyledInput
            type={"name"}
            placeholder={"Ваша имя"}
            onChange={this.handleSubmit}
          />
          <StyledInput
            type={"phone"}
            required
            placeholder={"Телефон"}
            onChange={this.handleSubmit}
          />
          <StyledInput
            onChange={this.handleSubmit}
            type={"email"}
            required
            placeholder={"Электронная почта"}
          />
          <StyledInput
            type={"text"}
            placeholder={"Сообщение"}
            textaria
            required
          />
          <StyledCustomCheckbox>
            <input className="custom-checkbox" type="checkbox" required />
            <span className="checkmark"></span>
            Согласен с правилами обработки моих персональных данных
          </StyledCustomCheckbox>
          <StyledSubmit disabled type={"submit"} id={"submit"}>
            Отправить сообщение
          </StyledSubmit>
        </StyledForm>
      </FormWrapper>
    );
  }
}
const FormWrapper = styled.div`
  width: 100%;
  background: #faf9fa;
  box-shadow: 0px 5px 25px rgba(0, 0, 0, 0.05);
  z-index: 10;
  border-bottom: 1px solid #adadad;
  h2 {
    margin-bottom: 53px;
    z-index: 2;
  }
  form {
    margin: 0 auto;
  }
`;
const StyledForm = styled.form`
  position: relative;
  display: flex;
  flex-flow: column;
  width: 800px;
  padding: 5rem;
  z-index: 5;
`;
const StyledCustomCheckbox = styled.label`
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  font-size: 20px;

  > input {
    position: absolute;
    opacity: 0;
    top: 0;
    left: 0;
    cursor: pointer;

    height: 0;
    width: 0;
    height: 25px;
    width: 25px;
  }
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    border: 1px solid #adadad;
    border-radius: 5px;
  }
  input:hover ~ .checkmark {
    background-color: transparent;
  }

  input:checked ~ .checkmark {
    background-color: #2196f3;
    border: 1px solid #2196f3;
  }

  .checkmark:after {
    content: "";
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
    border: solid #adadad;
    border-width: 0 3px 3px 0;
  }
  input:checked ~ .checkmark:after {
    display: block;
  }
`;

const StyledSubmit = styled.button`
  position: relative;
  background: ${(props) => props.theme.colors.basicBlue};
  color: #ffffff;
  font-weight: 600;
  border: 1px solid transparent;
  width: 300px;
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

const StyledInput = styled.input`
  position: relative;
  border-radius: 8px;
  padding: 2rem;
  margin-bottom: 4rem;
  max-width: 800px;
  border: 2px solid #adadad;
  ::placeholder {
    font-size: 18px;
    font-weight: bold;
  }
  z-index: 2;
  height: ${(props) => (props.textaria ? "150px" : "auto")};
  &:invalid:focus:not(:placeholder-shown) {
    // Show the more robust requirement instructions below.
    border: 2px solid #ea4f24;
    color: #ea4f24;
  }
  :invalid:not(:focus):not(:placeholder-shown) {
    // Show a light reminder
    border: 2px solid #ea4f24;
    color: #ea4f24;
  }
  :focus {
    outline: none;
    border: 2px solid #00a4f7;
  }
`;

const StyledBisnessMan = styled(BisnessMan)`
  position: absolute;
  top: -40px;
  left: -240px;
  z-index: 1;
`;
