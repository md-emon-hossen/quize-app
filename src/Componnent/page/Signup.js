import sigupPic from "../../assect/img/sign.png";
import "../../css/login.css";
import Footer from "../Footer";
import Illustation from "../Illustation";
import Nav from "../Nav";
import SingupFrom from "../SingupFrom";
function Signup() {
    return <>
        <Nav show='Login' re='/login' />
        <h1>Create a new account</h1>
        <div className="column">
            <Illustation pic={sigupPic} />
            <SingupFrom />
        </div>
        <Footer />
    </>
}

export default Signup;