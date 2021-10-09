import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScheduleElement from './ScheduleElement';


function AccordionMorning(props) {
  return (
    <div class="accordion-item">
      <h2 class="accordion-header" id="flush-headingOne">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
          Morning
        </button>
      </h2>
      <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">
          <ul class="list-group">
            <ScheduleElement title="Check-In" location="Newman Lounge" leaders="The Retreats Team" time="10:00am" />
            <ScheduleElement title="Introductions" location="SMSP Courtyard" leaders="The Retreats Team" time="10:30am" />
            <ScheduleElement title="Icebreakers" location="SMSP Courtyard" leaders="Bekah Riley" time="10:45am" />
            <ScheduleElement title="Student Testimony" location="SMSP Courtyard" leaders="Joey Imperial" time="11:25am" />
            <ScheduleElement title="Small Group Discussion" location="See Small Groups Tab" leaders="Small Group Leaders" time="11:45am" />
            <ScheduleElement title="Activity" location="SMSP Courtyard" leaders="???" time="12:15pm" />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AccordionMorning;
