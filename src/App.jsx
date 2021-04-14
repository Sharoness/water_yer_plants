import './App.css';
import React, { useState } from 'react';
import Start from './Start';
import AddPlant from './AddPlant';
import List from './List';
import Info from './Info';

function App() {
  const [plantlist, setPlantlist] = useState([]);

  return (
    <div className="content">
      <header>
        <h1>Water yer plants</h1>
      </header>
      <Start />
      {/* if state is empty -> component Start. Else component List */}
    </div>
  );
}

export default App;
