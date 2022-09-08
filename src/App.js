import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Login from './Pages/Login';
import Profile from './Pages/Profile'
import Products from './Pages/Products'
import ProtectedRoutes from './Auth/Auth'
 function App() {
  return (
 <div className='App'>
    <Router>
       <Routes>
          <Route element={<ProtectedRoutes/>}>
            <Route element={<Profile/>} path="/"/>
            <Route element={<Products/>} path="/products"/>
          </Route>
        
          <Route element={<Login/>} path="/login"/>
        </Routes>
    </Router>

 </div>
     
  );
}

export default App;
