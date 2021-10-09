import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function ScheduleElement(props) {
  return (
    <li class="list-group-item d-flex justify-content-between align-items-start">
      <div class="ms-2 me-auto">
        <div class="fw-bold">{props.title}</div>
        <div class="information">
          <i>Led By:</i> {props.leaders}
        </div>
      </div>
      <span class="badge bg-success rounded-pill giveMargin">{props.location}</span>
      <span class="badge bg-primary rounded-pill">{props.time}</span>
    </li>
  );
}

export default ScheduleElement;
