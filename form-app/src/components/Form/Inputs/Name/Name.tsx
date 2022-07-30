import { FC } from 'react';

interface NameProps {
  name: string | number | readonly string[] | undefined;
  nameError: String;
  changeName: (nameEntered: string) => void;
}

const Name: FC<NameProps> = ({ name, nameError, changeName }) => (
  <div>
    <label>
      Имя Фамилия
      <input type="text" name="Name" value={name} onChange={(e) => changeName(e.target.value)} />
    </label>
    {nameError && <div className="InputError">* {nameError}</div>}
  </div>
);

export default Name;
