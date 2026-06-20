import React from 'react'
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Add from './pages/Add';
import List from './pages/List';
import Orders from './pages/Orders';

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="w-full max-w-300 h-px bg-gray-300 m-auto " ></div>
      <div className='flex w-full max-w-300 m-auto'>
        <Sidebar />
        <Routes>
          <Route path='/add' element={<Add/>} />
          <Route path='/list' element={<List/>} />
          <Route path='/orders' element={<Orders/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App