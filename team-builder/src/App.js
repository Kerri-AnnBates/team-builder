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
      <div className='container'>
        {teamMembers.map(
          (member, index) => ( 
            <div className='card-details' key={index}>
              <h2>{member.name}</h2>
              <a href={`mailto:${member.email}`}>{member.email}</a>
              <p>{member.role}</p>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default App;
