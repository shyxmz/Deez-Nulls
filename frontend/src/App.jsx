import {Navigate, Route, Routes} from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import LandingPage from './pages/LandingPage';
import StartupLanding from './pages/StartupLanding';
import InvestorLanding from './pages/InvestorLanding';
import AdminLanding from './pages/AdminLanding';
function App() {
  return (
    <div className="">
      <Routes>
      <Route path='/' element={<Navigate to = '/login' />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/landingpage' element={<LandingPage />}/>
        <Route path="/startuplanding" element={<StartupLanding />} />
        <Route path="/investorlanding" element={<InvestorLanding />} />
        <Route path="/adminlanding" element={<AdminLanding />} />
      </Routes>
    </div>
  );
}

export default App;
