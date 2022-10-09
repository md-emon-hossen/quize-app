import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';
import '../css/signupform.css';
import Button from "./Button";
import Info from "./Info";

function SingupFrom() {

    const [username, setusername] = useState();
    const [email, setemail] = useState();
    const [password, setpassword] = useState();
    const [conpass, setconpass] = useState();
    const [agree, setagree] = useState();
    const [error, seterror] = useState();
    const [loding, setloding] = useState();
    const { signup } = useAuth();
    const navigate = useNavigate();
    async function handleSubmite(e) {
        e.preventDefault();
        if (password !== conpass) {
            return seterror("password doesn't match")
        }

        try {
            seterror('');
            setloding(true);
            await signup(email, password, username);
            navigate("/")
        } catch (err) {
            console.log(err);
            setloding(false);
            seterror("account create failed");
        }

    }

    return <>

        <form className="signup form" action="#" onSubmit={handleSubmite}>
            <div className="textInput">
                <input required type="text" placeholder="Enter name" value={username} onChange={(e) => setusername(e.target.value)} />
                <span className="material-icons-outlined"> person </span>
            </div>

            <div className="textInput">
                <input required type="text" placeholder="Enter email" value={email} onChange={(e) => setemail(e.target.value)} />
                <span className="material-icons-outlined"> alternate_email </span>
            </div>

            <div className="textInput">
                <input required type="password" placeholder="Enter password" value={password} onChange={(e) => setpassword(e.target.value)} />
                <span className="material-icons-outlined"> lock </span>
            </div>

            <div className="textInput">
                <input required type="password" placeholder="Confirm password" value={conpass} onChange={(e) => setconpass(e.target.value)} />
                <span className="material-icons-outlined"> lock_clock </span>
            </div>

            <label>
                <input required type="checkbox" value={agree} onChange={(e) => setagree(e.target.value)} />
                <span>I agree to the Terms & Conditions</span>
            </label>

            <Button type="submit" disabled={loding}>
                <span>Submit now</span>
            </Button>
            {error && <p className='error'>{error}</p>}

            <Info re="/login" show="have an account?" data="Login" />
        </form>
    </>
}

export default SingupFrom;