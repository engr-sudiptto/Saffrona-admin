import React from 'react'
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Add from './pages/Add';
import List from './pages/List';
import Orders from './pages/Orders';
import { ToastContainer } from 'react-toastify';

const App = () => {

  const url = 'http://localhost:4000'

  return (
    <div className="w-full h-screen flex flex-col overflow-hidden ">
      <ToastContainer/>
      <Navbar />
      <div className="w-full max-w-300 h-px bg-gray-300 m-auto "></div>
      <div className="flex w-full max-w-300 m-auto flex-1 overflow-hidden">
        <Sidebar />
        <div className="flex-1 h-full overflow-y-auto p-4 md:p-10">
          <Routes>
            <Route path="/add" element={<Add url={url} />} />
            <Route path="/list" element={<List url={url} />} />
            <Route path="/orders" element={<Orders url={url} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App