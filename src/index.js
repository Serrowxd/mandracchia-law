import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';

// CSS Refactor
import './css/refactor.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

// Route Imports
import App from './App';
import AboutUs from './components/Routes/AboutUs/AboutUs';
import AttProf from './components/Routes/AttProf/AttProf';
import AoP from './components/Routes/AoP/AoP';
import FAQ from './components/Routes/FAQ/FAQ';
import ChrisProf from './components/Routes/AttProf/ChrisProf';
import CharlesProf from './components/Routes/AttProf/CharlesProf';
import JeffProf from './components/Routes/AttProf/JeffProf';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/AboutUs" component={AboutUs} />
      <Route path="/AttProf" component={AttProf} />
      <Route path="/AoP" component={AoP} />
      <Route path="/FAQ" component={FAQ} />
      <Route path="/ChristopherMandracchia" component={ChrisProf} />
      <Route path="/CharlesMandracchia" component={CharlesProf} />
      <Route path="/JeffreySoderberg" component={JeffProf} />
    </div>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
