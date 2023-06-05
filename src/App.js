import { useState } from 'react';
import './App.css';
import { Button } from './components';

function App() {
  const [check, setCheck] = useState(false);

  return (
    <div className="p-10">
      <div className="space-x-2">
        <Button>Contained</Button>
        <Button variant="outlined">Outlined</Button>
        <Button variant="text">Text</Button>

        <h4 className="mt-10">
          variant : contained (default) , outlined , text
        </h4>
        <Button onClick={() => setCheck(!check)}>
          {check ? 'true' : 'false'}
        </Button>
      </div>
    </div>
  );
}

export default App;
