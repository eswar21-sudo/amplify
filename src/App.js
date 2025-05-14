import React, { useState } from 'react';

function App() {
  const [restMsg, setRestMsg] = useState('');
  const [httpMsg, setHttpMsg] = useState('');

  const REST_URL = "https://w46adkqgx6.execute-api.us-east-1.amazonaws.com/dev/rest";
  const HTTP_URL = "https://mqcidownod.execute-api.us-east-1.amazonaws.com/prod/http";

  const callRest = async () => {
    const res = await fetch(REST_URL);
    const data = await res.json();
    setRestMsg(data.message);
  };

  const callHttp = async () => {
    const res = await fetch(HTTP_URL);
    const data = await res.json();
    setHttpMsg(data.message);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>AWS Amplify + Lambda + API Gateway</h2>
      <button onClick={callRest}>Call REST API</button>
      <p>{restMsg}</p>
      <button onClick={callHttp}>Call HTTP API</button>
      <p>{httpMsg}</p>
    </div>
  );
}

export default App;
