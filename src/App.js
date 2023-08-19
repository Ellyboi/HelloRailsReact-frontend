import React, { useState, useEffect } from 'react'; // Import the necessary modules
import './App.css';
import axios from 'axios';
import Railsreacts from './components/railsreacts';

const API_URL = "http://localhost:3000/api/v1/railsreacts";

function getAPIData() {
  return axios.get(API_URL).then((response) => response.data);
}

function App() {
  const [railsreacts, setRailsreacts] = useState([]);

  useEffect(() => {
    let mounted = true;
    getAPIData().then((items) => {
      if (mounted) {
        setRailsreacts(items);
      }
    });
    return () => (mounted = false); // Clean up the effect by directly updating the mounted variable
  }, []);

  return (
    <div className="App">
      <h1>Hello</h1>
      <Railsreacts railsreacts={railsreacts} />
    </div>
  );
}

export default App;
