import loginPic from '../../assect/img/login.png';
import '../../css/login.css';
import Footer from '../Footer';
import Illustation from "../Illustation";
import LoginFrom from "../LoginForm";
import Nav from "../Nav";
function Login() {
    return <>
        <Nav show='Signup' re='/signup' />
        <h1>Login to your account</h1>
        <div className="column">
            <Illustation pic={loginPic} />
            <LoginFrom />
        </div>
        <Footer />
    </>
}

export default Login;