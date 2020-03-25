import React from 'react';
import './App.css';
import Sidebar from './component/sidebar'
import Infographics from './component/infographics'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Covid-19 Information Page
        </p>
      </header>
      <div>
      <Sidebar></Sidebar>
      <Infographics> </Infographics>
      </div>
    </div>

  );
}

export default App;
