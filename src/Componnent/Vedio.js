import { Link } from "react-router-dom";
import three from '../assect/img/3.jpg';
import '../css/vedio.css';
function Vedio() {
    return <>
        <Link to="/quize"><div className="video">
            <img src={three} alt="" />
            <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
            <div className="qmeta">
                <p>10 Questions</p>
                <p>Score : Not taken yet</p>
            </div>
        </div>
        </Link>
    </>
}

export default Vedio;