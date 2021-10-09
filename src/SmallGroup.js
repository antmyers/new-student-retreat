import logo from './logo.svg';
import './Header.css';

function SmallGroup(props) {
  console.log(props.participants);
  const names = props.participants.split(",");
  const listItems = names.map((name) =>
    <li key={name} class="list-group-item d-flex justify-content-between align-items-center">
      {name}
    </li>
  );
  return (
    <div className="outerContainer">
      <ul class="list-group">
        <li class="list-group-item list-group-item-dark d-flex justify-content-between align-items-center">
          Led by: <b>{props.leader}</b>
          <span class="badge bg-success rounded-pill giveMargin">{props.location}</span>
        </li>
        {listItems}
      </ul>
    </div>
  );
}

export default SmallGroup;
