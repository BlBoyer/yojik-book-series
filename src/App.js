import Nav from './nav/nav';
import Home from './home/home';
import { useState } from 'react';

function App() {
  const [Route, setRoute] = useState(() => Home);

  return (
    <div className='row justify-c'>
      <Nav route={setRoute} />
      <Route />
    </div>
  );
}

export default App;
