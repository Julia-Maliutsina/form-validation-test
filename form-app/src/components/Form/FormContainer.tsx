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
    }
    if (!phone || phone === DEFAULT_PHONE) {
      setPhoneError(EMPTY_INPUT_ERROR);
      result = false;
    }
    if (!birth) {
      setBirthError(EMPTY_INPUT_ERROR);
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
    if (!nameError && !emailError && !phoneError && !messageError) {
      console.log('send form');
    } else {
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
    />
  );
}

export default FormContainer;
