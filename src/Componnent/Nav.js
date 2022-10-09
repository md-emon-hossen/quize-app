import { Link } from "react-router-dom";
import logo from '../assect/img/logo.png';
import '../css/nav.css';
import NavAccount from './NavAccount';

function Navbar({ show, re }) {
    return <>
        <nav className="nav">
            <ul>
                <li>
                    <Link to="/" className="brand">
                        <img src={logo} alt="Online Quize" />
                        <h3>Online Quize</h3>
                    </Link>
                </li>
            </ul>
            <NavAccount show={show} re={re} />
        </nav>

    </>
}

export default Navbar;