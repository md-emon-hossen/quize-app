import { Link } from 'react-router-dom';
import { useAuth } from '../context/authContext';
import '../css/navAccount.css';
function NavAccount({ show, re }) {
    const { currentUser, login } = useAuth();
    return <>
        <div className="account">
            <span className="material-icons-outlined" title="Account"> account_circle </span>
            <Link to={re}>{show}</Link>
            {currentUser ? <p>{currentUser.displayName}</p> : null}

            <Link to='/login' onClick={login} class="material-icons-outlined" title="Logout"> logout </Link>
        </div>

    </>
}

export default NavAccount;