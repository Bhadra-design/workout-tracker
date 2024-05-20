import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import { useAuthContext } from './hooks/userAuthContext';
import Home from './pages/home';
import Navbar from './components/navbar';
import Login from './pages/login';
import Signup from './pages/signup';


function App() {
const {user} = useAuthContext() 

  return (
    <div className="App">
      <div className="pages">
        <Router>
        <Navbar />
        <Routes>
          <Route
            path='/'
            element={user ? <Home />: <Navigate to="/login" />}
          />
          <Route
            path='/login'
            element={!user ? <Login />: <Navigate to="/" />}
          />
          <Route
            path='/signup'
            element={!user ? <Signup />: <Navigate to="/" />}
          />
        </Routes>

        </Router>
      </div>
    </div>
  );
}

export default App;
