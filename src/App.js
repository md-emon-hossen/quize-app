import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./Componnent/page/Home";
import Login from "./Componnent/page/Login";
import Quize from './Componnent/page/Qyize';
import Result from './Componnent/page/Result';
import Signup from "./Componnent/page/Signup";
import { AuthProvaider } from './context/authContext';
import './css/global.css';

function App() {
  return <>
    <BrowserRouter>
      <AuthProvaider>
        <Routes>
          < Route exact path="/" element={<Home />} />
          < Route exact path="/login" element={<Login />} />
          < Route exact path="/signup" element={<Signup />} />
          < Route exact path="/quize" element={<Quize />} />
          < Route exact path="/result" element={<Result />} />
        </Routes>
      </AuthProvaider>
    </BrowserRouter>
  </>
}
export default App;