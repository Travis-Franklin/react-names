import React from 'react';
import logo from './logo.svg';
import './App.css';
import GiveNames from './Names';

function App() {
  return (
    <div>
      < GiveNames whatName='Jon'/>
      < GiveNames whatName='Travis'/>
      < GiveNames whatName='Jeff'/>

    </div>
   
  );
}

export default App;
