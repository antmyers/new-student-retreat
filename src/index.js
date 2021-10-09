import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import App from './App';
import Header from './Header';
import SmallGroup from './SmallGroup';
import AccordionEvening from './AccordionEvening';
import AccordionAfternoon from './AccordionAfternoon';
import AccordionMorning from './AccordionMorning';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Router>

      <Switch>
        <Route path="/smallGroup">
          <Header page="smallGroup" />
            <SmallGroup leader="Bailey" location="Donnely" participants="Joseph Streight, Libby Widlak, Morgan Manchester, Hannah Zaleswki" />
            <SmallGroup leader="Andrew" location="Rectory Lounge" participants="Ryan Schmidt, Carson Ching, Monica Whalen, Lani Maffesoli, Moriah Ma" />
            <SmallGroup leader="Wade" location="Monteith Room" participants="Noah Bock, Ryan Lee, Athera Yakoo, Grace Cole" />
            <SmallGroup leader="Bekah" location="Richard Room" participants="Andrew Nguyen, Sophie Moffett, Nicole Krochmal, Laura Gallagher" />
            <SmallGroup leader="Mary" location="Newman Room" participants="Barcino Kylie, Anna Jain, Clare Rowe, Kelly Lynch" />
        </Route>
        <Route path="/">
          <Header page="schedule" />
            <div class="accordion accordion-flush" id="accordionFlushExample">
              <AccordionMorning />
              <AccordionAfternoon />
              <AccordionEvening />
            </div>
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
