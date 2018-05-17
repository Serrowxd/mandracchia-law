import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

// Route Imports
import App from './App';
import AboutUs from './components/Routes/AboutUs/AboutUs';
import AttProf from './components/Routes/AttProf/AttProf';
import AoP from './components/Routes/AoP/AoP';
import FAQ from './components/Routes/FAQ/FAQ';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/AboutUs" component={AboutUs} />
      <Route path="/AttProf" component={AttProf} />
      <Route path="/AoP" component={AoP} />
      <Route path="/FAQ" component={FAQ} />
    </div>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
