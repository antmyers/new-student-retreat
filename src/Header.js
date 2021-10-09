import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import src from './st-mary-logo.png';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Header(props) {
  let isSchedule = "nav-link";
  let isSmallGroup = "nav-link";
  if(props.page == "schedule") {
    isSchedule += " active";
  } else {
    isSmallGroup += " active";
  }
  return (
    <div class="header">
      <span class="headerText">New Student Retreat 2021</span>
      <img src={src}/>
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <Link to="/" class={isSchedule}>Schedule</Link>
        </li>
        <li class="nav-item">
          <Link to="/smallGroup" class={isSmallGroup}>Small Groups</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
