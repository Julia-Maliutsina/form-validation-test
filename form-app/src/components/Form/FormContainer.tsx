import { useState } from 'react';

import validateName from '../../utils/validateName';
import validateEmail from '../../utils/validateName';
import validatePhone from '../../utils/validatePhone';
import validateMessage from '../../utils/validateMessage';

import ERRORS from '../../constants/errors';

import Form from './Form';

function FormContainer() {
  const [name, setName] = useState(String);
  const [nameError, setNameError] = useState(String);
  const [email, setEmail] = useState(String);
  const [emailError, setEmailError] = useState(String);
  const [phone, setPhone] = useState('+7');
  const [phoneError, setPhoneError] = useState(String);
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

  const changeMessage = (messageEntered: string) => {
    const newMessage = messageEntered;
    setMessage(newMessage);
    if (validateMessage(newMessage)) {
      setMessageError('');
    } else {
      setMessageError(ERRORS.message);
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
      message={message}
      messageError={messageError}
      changeMessage={changeMessage}
    />
  );
}

export default FormContainer;
