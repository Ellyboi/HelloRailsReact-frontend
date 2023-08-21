import React from 'react';

function Railsreacts(props) {
  return (
    <div>
      <h1>This is API greetings</h1>
      {props.railsreacts.map((railsreact) => (
        <div key={railsreact.id}>
          <h2>{railsreact.title}</h2>
          <p>{railsreact.body}</p>
        </div>
      ))}
    </div>
  );
}

export default Railsreacts;
