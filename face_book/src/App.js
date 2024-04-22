// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import DashBoard from './pages/DashBoard';

function App() {
  return (
    <div style={{display:'flex'}}>
      <BrowserRouter>
      {/* <Navbar/> */}
      <Routes>
        <Route element={<Login />} path='/'/>
        <Route element={<DashBoard />} path='/dashBoard'/>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
