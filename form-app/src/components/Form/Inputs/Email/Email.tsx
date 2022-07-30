import { FC } from 'react';

interface EmailProps {
  email: string | number | readonly string[] | undefined;
  emailError: String;
  changeEmail: (emailEntered: string) => void;
}

const Email: FC<EmailProps> = ({ email, emailError, changeEmail }) => (
  <div>
    <label>
      E-mail{' '}
      <input type="text" name="Email" value={email} onChange={(e) => changeEmail(e.target.value)} />
    </label>
    {emailError && <div className="InputError">* {emailError}</div>}
  </div>
);

export default Email;
