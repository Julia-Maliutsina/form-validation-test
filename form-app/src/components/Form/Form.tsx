import { FC } from 'react';

import { TextInput, DateInput, TextareaInput } from './Inputs';

import LABELS from '../../constants/labels';

interface ServerResponse {
  title: '';
  serverMessage: '';
}

interface FormProps {
  name: string | number | readonly string[] | undefined;
  nameError: String;
  changeName: (nameEntered: string) => void;
  email: string | number | readonly string[] | undefined;
  emailError: String;
  changeEmail: (emailEntered: string) => void;
  phone: string | number | readonly string[] | undefined;
  phoneError: String;
  changePhone: (phoneEntered: string) => void;
  birth: string | number | readonly string[] | undefined;
  birthError: String;
  changeBirth: (birthEntered: string) => void;
  message: string | number | readonly string[] | undefined;
  messageError: String;
  changeMessage: (messageEntered: string) => void;
  submitForm: (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
  submitDisabled: boolean | undefined;
  serverResponse: ServerResponse;
}

const Form: FC<FormProps> = ({
  name,
  nameError,
  changeName,
  email,
  emailError,
  changeEmail,
  phone,
  phoneError,
  changePhone,
  birth,
  birthError,
  changeBirth,
  message,
  messageError,
  changeMessage,
  submitForm,
  submitDisabled,
  serverResponse,
}) => (
  <div>
    <form>
      <p className="Title">Заполните форму</p>
      <div className="Divider"></div>
      <TextInput label={LABELS.name} text={name} textError={nameError} changeText={changeName} />
      <TextInput
        label={LABELS.email}
        text={email}
        textError={emailError}
        changeText={changeEmail}
      />
      <TextInput
        label={LABELS.phone}
        text={phone}
        textError={phoneError}
        changeText={changePhone}
      />
      <DateInput
        label={LABELS.birth}
        date={birth}
        dateError={birthError}
        changeDate={changeBirth}
      />
      <div className="MessageHead">
        <div className="Divider"></div>
        <p className="MessageTitle">{LABELS.message}</p>
        <div className="Divider"></div>
      </div>
      <TextareaInput
        className="MessageInput"
        textarea={message}
        textareaError={messageError}
        changeTextarea={changeMessage}
      />
      <input
        className="SubmitButton"
        type="submit"
        onClick={(e) => submitForm(e)}
        value="Отправить"
        disabled={submitDisabled}
      />
    </form>
    {serverResponse.title && (
      <div className="ServerResponse">
        <p className="ResponseTitle">{serverResponse.title}</p>
        <p>{serverResponse.serverMessage}</p>
      </div>
    )}
  </div>
);

export default Form;
