import './App.css';
import { Routes, Route } from 'react-router-dom';
import Landpg1 from './landingpg1/landpg1';
import Landpg2 from './landingpg2/landpg2';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Landpg1 />} />
          <Route path="/pg2" element={<Landpg2 />} />
        </Routes>      
    </div>
  );
}

export default App;
