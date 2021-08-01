import Main,{Circ} from './Components.js'
import {useState} from 'react';
import { useMediaQuery } from 'react-responsive';

function App() {

  const small = useMediaQuery({
    query: '(max-width : 1000px)'
  }) 

  const [disp,updDisp] = useState({
    show:false,
    ctr:0
  });

  return (
    <div className="App h-vh">
      {/*<Circ/>*/}
      <Main show={disp.show} ctr={disp.ctr} upd={updDisp}/>
    </div>
  );

}

export default App;
