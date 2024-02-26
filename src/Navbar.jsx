import React, { useState } from 'react';
import './navbar.css'; //


const Navbar = () => {
  const initialModules = ['Home', 'Leads', 'Contacts', 'Account', 'Deals', 'Task', 'Meetings', 'Calls', 'Services', 'Project'];
  const [modules, setModules] = useState(initialModules);
  const [newModule, setNewModule] = useState('');

  const handleAddModule = () => {
    if (newModule.trim() !== '') {
      setModules([...modules, newModule.trim()]);
      setNewModule('');
    }
  };

  return (
    <ul className="navbar"> 
    {/* Add the "navbar" class */}
      {/* <ul className="navbar-nav"> */}
        {/* Add the "navbar-nav" class */}
        {modules.map((module, index) => (
          <li key={index}>{module}</li>
        ))}
        <li>
          <input
            type="text"
            value={newModule}
            onChange={(e) => setNewModule(e.target.value)}
            placeholder="Add Module"
          />
          <button onClick={handleAddModule}>Add</button>
        </li>
      </ul>
    // </nav>
  );
};

export default Navbar;
