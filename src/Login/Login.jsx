
import '../Login/Login.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoginHook from '../hook/LoginHook';

const Login = () => {
    
    const { submit, email, password, setemail, setpassword } = LoginHook()

    return (
        <form onSubmit={submit}>
            <div className="container">
                <h1>Inicio Sesión</h1>
                <div className="continerInputs">
                    <label>Correo</label>
                    <input value={email} name='email' type="email" placeholder="Ingrese su usuario" onChange={(e) => setemail(e.target.value)} />
                </div>
                <div className="continerInputs">
                    <label>Contraseña</label>
                    <input value={password} name='password' type="password" placeholder="Ingrese su contraseña" onChange={(e) => setpassword(e.target.value)} />
                </div>
                <button>Entrar</button>
                <ToastContainer theme='dark' />
            </div>
        </form>
    )
}

export default Login
