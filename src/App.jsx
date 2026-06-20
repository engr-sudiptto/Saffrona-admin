import React from 'react'
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="w-full max-w-300 h-px bg-gray-300 m-auto " ></div>
      <div className='flex w-full max-w-300 m-auto'>
        <Sidebar/>
      </div>
    </div>
  );
}

export default App