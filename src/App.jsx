import React from 'react'
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <div>
      <Navbar />
      <div>div for hr</div>
      <div>
        <Sidebar/>
      </div>
    </div>
  );
}

export default App