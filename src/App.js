import './App.css';
import { Routes } from 'react-router-dom';
import { privateRouter, publicRouter } from './routes/protectedRoute';

function App() {
  return (
    <Routes>
      {privateRouter()}
      {publicRouter()}
    </Routes>
  );
}

export default App;
