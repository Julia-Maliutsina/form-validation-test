import './App.scss';

function App() {
  return (
    <div className="App">
      <form>
        <p className="Title">Заполните форму</p>
        <div className="Divider"></div>
        <label>
          Имя Фамилия <input type="text" name="Name" />
          {/* /(^[A-ZА-Яa-zа-я]{3,30} [A-ZА-Яa-zа-я]{3,30}$)/ */}
        </label>
        <label>
          E-mail <input type="email" name="Email" />
        </label>
        <label>
          Номер телефона <input type="text" name="Phone" />
        </label>
        <label>
          Дата рождения <input type="date" name="Birth" />
        </label>
        <div className="MessageSection">
          <div className="Divider"></div>
          <p className="MessageTitle">Введите сообщение</p>
          <div className="Divider"></div>
        </div>
        <textarea className="MessageInput" name="Message" maxLength={300} />
        <input className="SubmitButton" type="submit" value="Отправить" />
      </form>
    </div>
  );
}

export default App;
