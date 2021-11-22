import React,{useState, useContext} from 'react';
import {useHistory} from 'react-router-dom';
import StoreContext from '../Store/Context';
import './Login.css';
function initialState(){
    return {user: '',password: ''}
}

function login({user, password}){
    if (user === 'admin' && password === "admin") {
        return {token: '1234'}
    }
    return {erro:'Usuário ou senha invalida'}
}
const UserLogin = () =>{
    const [values, setValues] = useState(initialState)
    const {setToken} = useContext(StoreContext);
    const history = useHistory();

    function onChange(event){
        const {value, name} = event.target;
        setValues({
            ...values,
            [name]: value,
        })
    }

    function onSubmit(event){
        event.preventDefault();

        const {} = login(values);
        if(token){
            setToken(token)
            history.push('/');
        }
        setValues(initialState)
    }
}
return (
    <div className="user-login">
        <h1 className="user-login__title">Acessar o sistema</h1>
        <form>
        <div className="user-login__form-control">
            <label htmlFor="user">Usuário</label>
            <input id="user" type ="text" name="user" onChange={onChange} value={values.user}/>
        </div>
        <div className="user-login__form-control">
            <label htmlFor="passsword">Senha</label>
            <input id="password" type ="password" name="password" onChange={onChange} value={values.password}/>
        </div>
        </form>
    </div>
)