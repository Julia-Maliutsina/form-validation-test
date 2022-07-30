import { useState } from 'react';

import validateName from '../../utils/validateName';
import validateEmail from '../../utils/validateName';
import validateMessage from '../../utils/validateMessage';

import ERRORS from '../../constants/errors';

import Form from './Form';

function FormContainer() {
  const [name, setName] = useState(String);
  const [nameError, setNameError] = useState(String);
  const [email, setEmail] = useState(String);
  const [emailError, setEmailError] = useState(String);
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
      message={message}
      messageError={messageError}
      changeMessage={changeMessage}
    />
  );
}

export default FormContainer;
