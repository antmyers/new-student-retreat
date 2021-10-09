import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScheduleElement from './ScheduleElement';


function AccordionEvening(props) {
  return (
    <div class="accordion-item">
      <h2 class="accordion-header" id="flush-headingThree">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
          Evening
        </button>
      </h2>
      <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">
          <ul class="list-group">
          <ScheduleElement title="The Celebration of the Mass" location="SMSP Church" leaders="Fr. Jim" time="4:50pm" />
          <ScheduleElement title="Dinner!!" location="Donnely Hall" leaders="Wade Gerberding" time="6:15pm" />
          <ScheduleElement title="Personal Reflection" location="Donnely Hall" leaders="Yourself!" time="7:30pm" />
          <ScheduleElement title="Large Group Discussion" location="Donnely Hall" leaders="Sam Weians" time="7:35pm" />
          <ScheduleElement title="Closing Prayer and Sendoff" location="Donnely Hall" leaders="Andrew Myers" time="7:50pm" />
        </ul>
        </div>
      </div>
    </div>
  );
}

export default AccordionEvening;
