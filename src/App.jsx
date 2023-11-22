import { BrowserRouter } from 'react-router-dom';

import {Router} from "./router/router"


import './App.css';
import Provider from './Context/Provider';


function App() {
  return (
    <div className='app'>
      <Provider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;