import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Admin from './pages/Admin';
import Request from './pages/Request';
import Update from './pages/Update';
import Status from './pages/Status';
import ClubHead from './pages/ClubHead';
import ProtectedRoute from './ProtectedRoute'; // Import the ProtectedRoute component

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<ProtectedRoute Component={Admin} />} />
          <Route path="/clubhead" element={<ProtectedRoute Component={ClubHead} />} />
          <Route path="/register" element={<ProtectedRoute Component={Request} />} />
          <Route path="/update" element={<ProtectedRoute Component={Update} />} />
          <Route path="/status" element={<ProtectedRoute Component={Status} />} />
        </Routes>  
      </div>
    </Router>
  );
}

export default App;
