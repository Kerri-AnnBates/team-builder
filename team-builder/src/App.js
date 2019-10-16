import React, { useState } from 'react';
import './index.css';
import data from './data';
import Form from './components/Form';

function App() {

  const [teamMembers, setTeamMembers] = useState(data);

  return (
    <div className="team">
      <h1>My Team</h1>
      <Form />
      <ul>
        {teamMembers.map(member => ( <li>{member.name}</li>))}
      </ul>
    </div>
  );
}

export default App;
