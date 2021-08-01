import Main,{Circ} from './Components.js'
import {useState} from 'react';
import { useMediaQuery } from 'react-responsive';

function App() {
  
  const [loaded,setLoaded] = useState(false)
  const small = useMediaQuery({
    query: '(max-width : 1000px)'
  }) 

  const [disp,updDisp] = useState({
    show:false,
    ctr:0
  });

  return (
    <div className="App h-vh">
      {!small&&<Circ/>}
      <Main show={disp.show} ctr={disp.ctr} upd={updDisp} load={loaded} set={setLoaded}/>
    </div>
  );

}

export default App;
