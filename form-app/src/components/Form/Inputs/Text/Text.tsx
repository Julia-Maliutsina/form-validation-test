import { FC } from 'react';

interface TextProps {
  label: string;
  text: string | number | readonly string[] | undefined;
  textError: String;
  changeText: (nameEntered: string) => void;
}

const Text: FC<TextProps> = ({ label, text, textError, changeText }) => (
  <div>
    <label>
      {label}
      <input type="text" value={text} onChange={(e) => changeText(e.target.value)} />
    </label>
    {textError && <div className="InputError">* {textError}</div>}
  </div>
);

export default Text;
