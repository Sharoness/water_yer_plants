import React, { useState } from 'react';

import Start from './Start.jsx';
import List from './List.jsx';
import Layout from './Layout';

function App() {
  const [plantlist, setPlantlist] = useState(["monstera", "pannenkoekenplant"]);

  return (
      <Layout>
        {plantlist.length === 0 ? <Start /> : <List plantlist={plantlist} />}
      </Layout>
  );
}

export default App;
