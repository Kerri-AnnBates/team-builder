import React, { useState } from 'react';
import './index.css';
import data from './data';
import Form from './components/Form';

function App() {

  const [teamMembers, setTeamMembers] = useState(data);

  const addMembers = (member) => {
    setTeamMembers([...teamMembers, member]);
  }

  return (
    <div className="team">
      <h1>My Team</h1>
      <Form addMembers={addMembers} /> 
      <ul>
        {teamMembers.map((member, index) => ( <li key={index}>{member.name}</li>))}
      </ul>
    </div>
  );
}

export default App;
