import React from "react";

const LoginPage = (props) => {
  return (
    <div>
      <label htmlFor="">
        Podaj login: <input type="text" />
      </label>
      <label htmlFor="">
        Podaj hasło: <input type="password" />
      </label>
      <button className="loginButton" onClick={props.click}>
        Zaloguj
      </button>
    </div>
  );
};

export default LoginPage;
