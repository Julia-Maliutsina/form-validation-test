import { FC } from 'react';

import { NameInput, EmailInput, PhoneInput, BirthInput, MessageInput } from './Inputs';

interface FormProps {
  name: string | number | readonly string[] | undefined;
  nameError: String;
  changeName: (nameEntered: string) => void;
  email: string | number | readonly string[] | undefined;
  emailError: String;
  changeEmail: (emailEntered: string) => void;
  message: string | number | readonly string[] | undefined;
  messageError: String;
  changeMessage: (emailEntered: string) => void;
}

const Form: FC<FormProps> = ({
  name,
  nameError,
  changeName,
  email,
  emailError,
  changeEmail,
  message,
  messageError,
  changeMessage,
}) => (
  <form>
    <p className="Title">Заполните форму</p>
    <div className="Divider"></div>
    <NameInput name={name} nameError={nameError} changeName={changeName} />
    <EmailInput email={email} emailError={emailError} changeEmail={changeEmail} />
    <PhoneInput />
    <BirthInput />
    <div className="MessageHead">
      <div className="Divider"></div>
      <p className="MessageTitle">Введите сообщение</p>
      <div className="Divider"></div>
    </div>
    <MessageInput message={message} messageError={messageError} changeMessage={changeMessage} />
    <input className="SubmitButton" type="submit" value="Отправить" />
  </form>
);

export default Form;
