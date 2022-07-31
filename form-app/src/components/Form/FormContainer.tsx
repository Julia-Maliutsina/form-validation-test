import { useState } from 'react';

import validateName from '../../utils/validateName';
import validateEmail from '../../utils/validateEmail';
import validatePhone from '../../utils/validatePhone';
import validateMessage from '../../utils/validateMessage';

import { ERRORS, EMPTY_INPUT_ERROR } from '../../constants/errors';
import { DEFAULT_PHONE } from '../../constants/defaultValues';

import Form from './Form';

function FormContainer() {
  const [name, setName] = useState(String);
  const [nameError, setNameError] = useState(String);
  const [email, setEmail] = useState(String);
  const [emailError, setEmailError] = useState(String);
  const [phone, setPhone] = useState(DEFAULT_PHONE);
  const [phoneError, setPhoneError] = useState(String);
  const [birth, setBirth] = useState(String);
  const [birthError, setBirthError] = useState(String);
  const [message, setMessage] = useState(String);
  const [messageError, setMessageError] = useState(String);
  const [submitDisabled, setSubmitDisabled] = useState(Boolean);
  const [serverResponse, setServerResponse] = useState(Object);

  const changeName = (nameEntered: string) => {
    const newName =
      nameEntered.indexOf(' ') >= 0 && nameEntered.indexOf(' ') !== nameEntered.length - 1
        ? nameEntered.toUpperCase().trim()
        : nameEntered.toUpperCase();
    setName(newName);
    if (validateName(newName)) {
      setNameError('');
    } else {
      setNameError(ERRORS.name);
    }
  };

  const changeEmail = (emailEntered: string) => {
    const newEmail = emailEntered.trim();
    setEmail(newEmail);
    if (validateEmail(newEmail)) {
      setEmailError('');
    } else {
      setEmailError(ERRORS.email);
    }
  };

  const addStr = (str: string, index: number, stringToAdd: string) => {
    return str.substring(0, index) + stringToAdd + str.substring(index, str.length);
  };

  const changePhone = (phoneEntered: string) => {
    let oldPhone = phone;
    let newPhone = phoneEntered;
    if (newPhone.length > 17) {
      newPhone = newPhone.slice(0, 17);
    }
    if (!validatePhone(newPhone)) {
      setPhoneError(ERRORS.phone);
      setPhone(oldPhone);
      return;
    }
    if (newPhone.length >= 3 && newPhone.indexOf('(') < 0) {
      newPhone = addStr(newPhone, 2, ' (');
    }
    if (newPhone.length > 7 && newPhone.indexOf(')') < 0) {
      newPhone = addStr(newPhone, 7, ') ');
    }
    if (newPhone.length > 12 && newPhone.lastIndexOf(' ') !== 12) {
      newPhone = addStr(newPhone, 12, ' ');
    }

    setPhoneError('');
    setPhone(newPhone);
  };

  const changeBirth = (birthEntered: string) => {
    setBirth(birthEntered);
    setBirthError('');
  };

  const changeMessage = (messageEntered: string) => {
    const newMessage = messageEntered;
    setMessage(newMessage);
    if (validateMessage(newMessage)) {
      setMessageError('');
    } else {
      setMessageError(ERRORS.message);
    }
  };

  const checkForEmptyFields = (): Boolean => {
    let result = true;
    if (!name) {
      setNameError(EMPTY_INPUT_ERROR);
      result = false;
    }
    if (!email) {
      setEmailError(EMPTY_INPUT_ERROR);
      result = false;
    }
    if (phone.length < 17) {
      setPhoneError(ERRORS.phone);
      result = false;
    }
    if (!phone || phone === DEFAULT_PHONE) {
      setPhoneError(EMPTY_INPUT_ERROR);
      result = false;
    }
    if (!birth) {
      setBirthError(EMPTY_INPUT_ERROR);
      result = false;
    }
    if (!message) {
      setMessageError(EMPTY_INPUT_ERROR);
      result = false;
    }
    return result;
  };

  const submitForm = (e: React.MouseEvent<HTMLInputElement, MouseEvent>): void => {
    e.preventDefault();
    checkForEmptyFields();
    if (
      !nameError &&
      !emailError &&
      !phoneError &&
      !birthError &&
      !messageError &&
      checkForEmptyFields()
    ) {
      let data = { name: name, email: email, phone: phone, birth: birth, message: message };
      const dataToSend = JSON.stringify(data);
      //add url here
      const url = 'https://mockend.com/Julia-Maliutsina/form-validation-test/user/1';
      const xhttp = new XMLHttpRequest();
      xhttp.open('POST', url, true);
      xhttp.setRequestHeader('Content-type', 'application/json; charset=UTF-8');
      xhttp.send(dataToSend);
      setSubmitDisabled(true);
      xhttp.onload = function () {
        setSubmitDisabled(false);
        let response = { title: '', serverMessage: '' };
        if (xhttp.response.status === 'success') {
          response.title = 'Данные отправлены!';
          setTimeout(() => {
            setServerResponse({ title: '', serverMessage: '' });
            setName('');
            setEmail('');
            setPhone(DEFAULT_PHONE);
            setBirth('');
            setMessage('');
          }, 3000);
        }
        if (xhttp.response.status === 'error') {
          response.title = 'Ошибка!';
          setTimeout(() => {
            setServerResponse({ title: '', serverMessage: '' });
          }, 3000);
        }
        response.serverMessage = xhttp.response.message;
        setServerResponse(response);
      };
    }
  };

  return (
    <Form
      name={name}
      nameError={nameError}
      changeName={changeName}
      email={email}
      emailError={emailError}
      changeEmail={changeEmail}
      phone={phone}
      phoneError={phoneError}
      changePhone={changePhone}
      birth={birth}
      birthError={birthError}
      changeBirth={changeBirth}
      message={message}
      messageError={messageError}
      changeMessage={changeMessage}
      submitForm={submitForm}
      submitDisabled={submitDisabled}
      serverResponse={serverResponse}
    />
  );
}

export default FormContainer;
