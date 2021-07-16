import './App.css';
import React, { useState } from 'react';

import Start from './Start.jsx';
import List from './List.jsx';
import Layout from './components/Layout';

function App() {
  const [plantlist, setPlantlist] = useState([]);

  return (
      <Layout>
        {plantlist.length === 0 ? <Start /> : <List />}
      </Layout>
  );
}

export default App;
