import Nav from './nav/nav';
import Home from './home/home';
import { useEffect, useState } from 'react';
import IfContainer from './components/ifcontainer';

function App() {
  const [Route, setRoute] = useState(() => Home);
  const [isOpen, setIsOpen] = useState(false);

  //close navigation modal when new route selected
  useEffect(() => setIsOpen(false), [setRoute]);

  return [
    <button
      key={0}
      style={{ position: 'absolute', borderRadius: '15%' }}
      className='button-glow bg-brown-3 txt-xl border-3'
      onClick={() => setIsOpen(!isOpen)}>
      =
    </button>,
    <div key={1} className='row justify-c'>
      {/* If this is a row it will be an issue for the button */}
      <Route />
    </div>,
    <div key={2} className='row justify-c full-width full-height'>
      <IfContainer condition={isOpen}>
        <Nav route={setRoute} />
      </IfContainer>
    </div>,
  ];
}

export default App;
