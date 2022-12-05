
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Login from './component/Login';
import Signup from './component/Signup';
import { Error404 } from './component/smallComponent/Error404';
import LogOut from './component/LogOut';
import { createContext, useReducer } from 'react';
import {initialState,reducer} from '../src/reducer/UseReducer';
export const UserContext=createContext();

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
   <UserContext.Provider value={{state, dispatch}}>   
  <BrowserRouter>
      <Routes>
      
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/logout" element={<LogOut />} />
        <Route path="/error" element={<Error404 />} />

        
      </Routes>

  </BrowserRouter>
  </UserContext.Provider> 
    </div>
  );
}

export default App;
