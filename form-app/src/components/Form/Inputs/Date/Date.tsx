import { FC } from 'react';

interface DateProps {
  label: string;
  date: string | number | readonly string[] | undefined;
  dateError: String;
  changeDate: (dateEntered: string) => void;
}

const Date: FC<DateProps> = ({ label, date, dateError, changeDate }) => (
  <div>
    <label>
      {label}
      <input type="date" value={date} onChange={(e) => changeDate(e.target.value)} />
    </label>
    {dateError && <div className="InputError">* {dateError}</div>}
  </div>
);

export default Date;
