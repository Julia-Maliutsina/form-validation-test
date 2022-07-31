import { FC } from 'react';

interface PhoneProps {
  phone: string | number | readonly string[] | undefined;
  phoneError: String;
  changePhone: (phoneEntered: string) => void;
}

const Phone: FC<PhoneProps> = ({ phone, phoneError, changePhone }) => (
  <div>
    <label>
      Номер телефона
      <input type="text" name="Name" value={phone} onChange={(e) => changePhone(e.target.value)} />
    </label>
    {phoneError && <div className="InputError">* {phoneError}</div>}
  </div>
);

export default Phone;
