import './App.css';
import React, { useState } from 'react';

import Start from './Start.jsx';
import List from './List.jsx';
import Layout from './components/Layout';

function App() {
  const [plantlist, setPlantlist] = useState([]);

  return (
      <Layout content={plantlist.length === 0 ? Start : List} />
  );
}

export default App;
