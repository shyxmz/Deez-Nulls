import {Navigate, Route, Routes} from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import LandingPage from './pages/LandingPage';
function App() {
  return (
    <div className="">
      <Routes>
      <Route path='/' element={<Navigate to = '/login' />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/landingpage' element={<LandingPage />}/>
      </Routes>
    </div>
  );
}

export default App;
