import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Mnozenje from './components/Mnozenje';
import Navbar from './components/Navbar';
import Sabiranje from './components/Sabiranje';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route to='/' element={<Sabiranje />} />
        <Route to='/mnozenje' element={<Mnozenje />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
