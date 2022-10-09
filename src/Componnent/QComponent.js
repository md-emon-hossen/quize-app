import { Link } from "react-router-dom";
import "../css/qCom.css";

function QCom() {
    return (
        <>
            <h1>Pick three of your favorite Star Wars Flims</h1>
            <h4>Question can have multiple answers</h4>

            <div className="answers">
                {/* <!-- Option 1 --> */}
                <label className="answer" for="option1">
                    <input type="checkbox" id="option1" />
                    A New Hope 1
                </label>

                {/* <!-- Option 2 --> */}
                <label className="answer" for="option2">
                    <input type="checkbox" id="option2" />
                    A New Hope 1
                </label>

                {/* <!-- Option 3 --> */}
                <label className="answer" for="option3">
                    <input type="checkbox" id="option3" />
                    A New Hope 1
                </label>

                {/* <!-- Option 4 --> */}
                <label className="answer wrong" for="option4">
                    <input type="checkbox" id="option4" />
                    A New Hope 1
                </label>

                {/* <!-- Option 5 --> */}
                <label className="answer" for="option5">
                    <input type="checkbox" id="option5" />
                    A New Hope 1
                </label>

                {/* <!-- Option 6 --> */}
                <label className="answer" for="option6">
                    <input type="checkbox" id="option6" />
                    A New Hope 1
                </label>

                {/* <!-- Option 7 --> */}
                <label className="answer correct" for="option7">
                    <input type="checkbox" id="option7" />
                    A New Hope 1
                </label>

                {/* <!-- Option 8--> */}
                <label className="answer" for="option8">
                    <input type="checkbox" id="option8" />
                    A New Hope 1
                </label>

                {/* <!-- Option 9 --> */}
                <label className="answer" for="option9">
                    <input type="checkbox" id="option9" />
                    A New Hope 1
                </label>

                {/* <!-- Option 10 --> */}
                <label className="answer" for="option10">
                    <input type="checkbox" id="option10" />
                    A New Hope 1
                </label>
            </div>

            <div className="progressBar">
                <div className="backButton">
                    <span className="material-icons-outlined"> arrow_back </span>
                </div>
                <div className="rangeArea">
                    <div className="tooltip">24% Cimplete!</div>
                    <div className="rangeBody">
                        <div className="progress"></div>
                    </div>
                </div>
                <Link to="/result">
                    <button className="button next">
                        <span>Next Question</span>
                        <span className="material-icons-outlined"> arrow_forward </span>
                    </button>
                </Link>
            </div>

            <div className="miniPlayer floatingBtn">
                <span className="material-icons-outlined open"> play_circle_filled </span>
                <span className="material-icons-outlined close"> close </span>
                <img src="img/3.jpg" alt="" />
                <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
            </div>
        </>
    )
}
export default QCom;