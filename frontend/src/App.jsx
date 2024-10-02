import {Navigate, Route, Routes} from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import LandingPage from './pages/LandingPage';
import StartupLanding from './pages/StartupLanding';
import InvestorLanding from './pages/InvestorLanding';
import AdminLanding from './pages/AdminLanding';
import AdminKnowMore from './pages/AdminKnowMore';
import StartupsKnowMore from './pages/StartupKnowMore';
import EIRsKnowMore from './pages/EirKnowMore';
function App() {
  return (
    <div className="">
      <Routes>
       
        <Route path='/' element={<LandingPage />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path="/startuplanding" element={<StartupLanding />} />
        <Route path="/investorlanding" element={<InvestorLanding />} />
        <Route path="/adminlanding" element={<AdminLanding />} />
        <Route path="/adminknowmore" element={<AdminKnowMore />} />
        <Route path="/startupknowmore" element={<StartupsKnowMore />} />
        <Route path="/eirknowmore" element={<EIRsKnowMore />} />
      </Routes>
    </div>
  );
}

export default App;
