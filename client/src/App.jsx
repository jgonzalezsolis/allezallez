
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom' 
import './App.css'
import Main from './views/main';
import Add from './views/add';
import Edit from './views/edit';
import View from './views/viewAll';
import ViewOne from './views/viewOne';
import Register from './components/Register';
import Logout from './components/Logout';
import Login from './components/Login';
import NotFound from './components/NotFound';

function App() {

  return (
    <BrowserRouter>
    <div className='APP'>
        <Routes>
          <Route index element={<  Register/>} />
          <Route path="/main" element={<Main/>} />
          <Route path="/logout" element={<Logout/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/addRoute" element={<Add/>} />
          <Route path="/allRoutes" element={<View/>} />
          <Route path="/routes/:id" element={<ViewOne/>} />
          <Route path="/routes/edit/:id" element={<Edit/>} />
          <Route path="*" element={<NotFound/>}/>
        </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App

