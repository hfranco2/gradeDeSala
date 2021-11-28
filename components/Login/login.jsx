import React, { useState, useContext } from "react";
import { useHistory } from "react-router";
import StoreContext from "../Store/Context";
import UIButton from "../UI/Button/Button";
import "../Login/login.css";
import axios from "axios";

function initialState() {
  return { user: "", password: "" };
}
const uri = "http://localhost:4001";

const loginApi = async ({ user, password }) => {
  // Send GET request to 'books/all' endpoint

  let retorno = await axios
    .put(`${uri}/user/login`, {
      usuario: user,
      senha: password,
    })
    .catch((erro) => {
      console.log("erro da api" + erro);
    });
  return await retorno.data;
};
function login({ user, password }) {
  if (user === "admin" && password === "admin") {
    return { token: "1234" };
  }
  return { error: "Usuário ou senha inválido" };
}

const UserLogin = () => {
  const [values, setValues] = useState(initialState);
  const [error, setError] = useState(null);
  const { setToken } = useContext(StoreContext);
  const history = useHistory();

  function onChange(event) {
    const { value, name } = event.target;

    setValues({
      ...values,
      [name]: value,
    });
  }

  function onSubmit(event) {
    event.preventDefault();
    loginApi(values).then((res) => {
      setToken(res.token);

      return history.push("/");
    });
    setError(error);
    setValues(initialState);
  }

  return (
    <div className="user-login">
      <h1 className="user-login__title">Acessar o Sistema</h1>
      <form onSubmit={onSubmit}>
        <div className="user-login__form-control">
          <label htmlFor="user">Usuário</label>
          <input
            id="user"
            type="text"
            name="user"
            onChange={onChange}
            value={values.user}
          />
        </div>
        <div className="user-login__form-control">
          <label htmlFor="password">Senha</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={onChange}
            value={values.password}
          />
        </div>
        {error && <div className="user-login__error">{error}</div>}
        <UIButton
          type="submit"
          theme="contained-green"
          className="user-login__submit-button"
          rounded
        >
          Entrar
        </UIButton>
      </form>
    </div>
  );
};

export default UserLogin;
