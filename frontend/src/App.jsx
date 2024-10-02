import {Navigate, Route, Routes} from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import LandingPage from './pages/LandingPage';
import StartupLanding from './pages/StartupLanding';
import EirLanding from './pages/EirLanding';
import AdminLanding from './pages/AdminLanding';
import AdminKnowMore from './pages/AdminKnowMore';
import StartupsKnowMore from './pages/StartupKnowMore';
import EIRsKnowMore from './pages/EirKnowMore';
import KycForm from './components/KycForm';
import ProgressS from './pages/ProgressS';
import ProgressE from './pages/ProgressE';
import ShortListed from './pages/ShortListed';
function App() {
  return (
    <div className="">
      <Routes>
       
        <Route path='/' element={<LandingPage />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path="/startuplanding" element={<StartupLanding />} />
        <Route path="/eirlanding" element={<EirLanding />} />
        <Route path="/adminlanding" element={<AdminLanding />} />
        <Route path="/adminknowmore" element={<AdminKnowMore />} />
        <Route path="/startupknowmore" element={<StartupsKnowMore />} />
        <Route path="/eirknowmore" element={<EIRsKnowMore />} />
        <Route path="/kyc" element={<KycForm />} />
        <Route path="/progressS" element={<ProgressS />} />
        <Route path="/progressE" element={<ProgressE />} />
        <Route path="/shortlisted" element={<ShortListed />} />

      </Routes>
    </div>
  );
}

export default App;
