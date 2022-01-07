import LoginPage from './pages/LoginPage';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<LoginPage />}></Route>
      </Routes>
    </>
  );
};

export default App;
