import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<LoginPage />}></Route>
        <Route path='/registrationpage' element={<RegistrationPage />}></Route>
      </Routes>
    </>
  );
};

export default App;
