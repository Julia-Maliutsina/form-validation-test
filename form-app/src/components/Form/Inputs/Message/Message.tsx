import { FC } from 'react';

interface MessageProps {
  message: string | number | readonly string[] | undefined;
  messageError: String;
  changeMessage: (emailEntered: string) => void;
}

const Message: FC<MessageProps> = ({ message, messageError, changeMessage }) => (
  <div>
    <textarea
      className="MessageInput"
      name="Message"
      maxLength={300}
      value={message}
      onChange={(e) => changeMessage(e.target.value)}
    />
    {messageError && <div className="InputError">* {messageError}</div>}
  </div>
);

export default Message;
