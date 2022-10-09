import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../context/authContext";
import '../css/loginFrom.css';
import Button from './Button';
import Info from './Info';

function LoginFrom() {

    const [email, setemail] = useState();
    const [password, setpassword] = useState();
    const { login } = useAuth();
    const [error, seterror] = useState();
    const navigate = useNavigate();

    async function handleSubmite(e) {
        e.preventDefault();
        try {
            await login(email, password);
            navigate("/");
        } catch (err) {
            console.log(err);
            seterror("login failed");

        }


    }

    return <>
        <form className="login form" action="#" onSubmit={handleSubmite}>
            <div className="textInput">
                <input type="text" placeholder="Enter email" value={email} onChange={(e) => setemail(e.target.value)} />
                <span className="material-icons-outlined"> alternate_email </span>
            </div>

            <div className="textInput">
                <input type="password" placeholder="Enter password" value={password} onChange={(e) => setpassword(e.target.value)} />
                <span className="material-icons-outlined"> lock </span>
            </div>

            <Button>
                <span>Login</span>
            </Button>
            <span className='error'>{error}</span>

            <Info re="/signup" show="Have't an account?" data="Signup" />
        </form>
    </>
}

export default LoginFrom;