import { FC } from 'react';

interface TextareaProps {
  className: string;
  textarea: string | number | readonly string[] | undefined;
  textareaError: String;
  changeTextarea: (textareaEntered: string) => void;
}

const Textarea: FC<TextareaProps> = ({ className, textarea, textareaError, changeTextarea }) => (
  <div>
    <textarea
      className={className}
      maxLength={300}
      value={textarea}
      onChange={(e) => changeTextarea(e.target.value)}
    />
    {textareaError && <div className="InputError">* {textareaError}</div>}
  </div>
);

export default Textarea;
