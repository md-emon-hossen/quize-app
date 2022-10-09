import { Link } from "react-router-dom";
import "../css/info.css";
function Info({ re, data, show }) {
    return <>
        <div className="info">
            <p>{show}<Link to={re}> {data}</Link></p>
        </div>
    </>
}

export default Info;