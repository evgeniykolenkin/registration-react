import React, { useState } from "react";
import FormInput from "./components/FormInput";
import "./App.css";

function App() {
  const [confirmation, setСonfirmation] = useState(false);

  const [values, setValues] = useState({
    name: "",
    surname: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "Имя",
      errorMessage:
        "Необходимо ввести не менее 3-16 букв без специальных символов: /!@#$%^&*\\",
      required: true,
      pattern: "^[A-Za-zА-Яа-я0-9]{3,16}$",
    },
    {
      id: 2,
      name: "surname",
      type: "text",
      placeholder: "Фамилия",
      errorMessage:
        "Необходимо ввести не менее 3-16 букв без специальных символов: /!@#$%^&*\\",
      required: true,
      pattern: "^[A-Za-zА-Яа-я0-9]{3,16}$",
    },
    {
      id: 3,
      name: "phone",
      type: "tel",
      placeholder: "Номер телефона",
      errorMessage:
        "Необходимо ввести не менее 11 цифр в формате: 123-456-7890",
      required: true,
      pattern: "[0-9]{3}-[0-9]{3}-[0-9]{4}",
    },
    {
      id: 4,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "Необходим действующий Email",
      required: true,
    },
    {
      id: 5,
      name: "password",
      type: "password",
      placeholder: "Пароль",
      errorMessage:
        "Необходимо не менее 8-20 знаков и хотя бы 1 букву, 1 цифру и 1 специальный символ: !@#$%^&*",
      required: true,
      pattern: `^(?=.*[0-9])(?=.*[a-zA-z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
    },
    {
      id: 6,
      name: "confirmPassword",
      type: "password",
      placeholder: "Повторите пароль",
      errorMessage: "Пароли не совпадают",
      required: true,
      pattern: values.password,
    },
  ];

  const handleConfirmation = (e) => {
    if (e.target.checked === true) {
      setСonfirmation(true);
      const custom = e.target.closest(".confirm__checkbox");
      custom.className = "confirm__checkbox";
    }
    if (e.target.checked === false) {
      setСonfirmation(false);
    }
  };

  const handleSubmit = (e) => {
    const label = e.target.querySelector(".confirm__checkbox");
    if (confirmation === true) {
      alert("Аккаунт создан");
    } else {
      e.preventDefault();
      alert("Подтвердите пароль");
      label.className = "confirm__checkbox red";

      return;
    }
  };

  const onChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form__header">
          <h1 className="form__title">Создание аккаунта</h1>
          <p className="form__subtitle">
            Введите свои данные, чтобы создать аккаунт в сервисе
          </p>
        </div>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values.name[input.name]}
            onChange={onChange}
          />
        ))}
        <label className="confirm__checkbox">
          <input
            type="checkbox"
            className="confirm__checkbox-real"
            onClick={handleConfirmation}
          />
          <span className="confirm__checkbox-custom"></span>
          Подтверждаю пароль
        </label>
        <button>Продолжить</button>
      </form>
    </div>
  );
}

export default App;
