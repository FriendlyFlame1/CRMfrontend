import React from 'react';
import Navbar from './Navbar';
import DataTable from './datatable';
import Navbar2 from './Navbar2';



const App = () => {
  return (
    <div>
      <Navbar />
      <Navbar2 />
      <DataTable />
      {/* Other components */}
    </div>
  );
};

export default App;
