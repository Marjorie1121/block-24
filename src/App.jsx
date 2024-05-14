
import './path-to-css.css'
import {puppyList} from './data.js'
import React, { useState } from 'react';
import { puppyList } from './data.js';

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  const handleClick = (id) => {
    setFeatPupId(id);
  };

  const featuredPuppy = puppies.find(pup => pup.id === featPupId);

  return (
    <div className="App">
      {puppies.map((puppy) => (
        <p key={puppy.id} onClick={() => handleClick(puppy.id)}>{puppy.name}</p>
      ))}
      {featPupId && (
        <div>
          <h2>{featuredPuppy.name}</h2>
          <ul>
            <li>Age: {featuredPuppy.age}</li>
            <li>Email: {featuredPuppy.email}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;

