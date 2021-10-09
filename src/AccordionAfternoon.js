import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScheduleElement from './ScheduleElement';


function AccordionAfternoon(props) {
  return (
    <div class="accordion-item">
      <h2 class="accordion-header" id="flush-headingTwo">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
          Afternoon
        </button>
      </h2>
      <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">
          <ul class="list-group">
            <ScheduleElement title="Lunch!!" location="SMSP Courtyard" leaders="Wade Gerberding" time="12:40pm" />
            <ScheduleElement title="Freestyle Prayer Stations" location="Various" leaders="Various" time="1:30pm" />
            <ScheduleElement title="Student Testimony 2" location="Donnely Hall" leaders="Mary Wendelowski" time="2:40pm" />
            <ScheduleElement title="Ignatian Examen" location="Donnely Hall" leaders="Bailey" time="2:50pm" />
            <ScheduleElement title="Reflection" location="Donnely Hall" leaders="Yourself!" time="3:05pm" />
            <ScheduleElement title="Small Group Discussion" location="See Small Groups Tab" leaders="Small Group Leaders" time="3:15pm" />
            <ScheduleElement title="Free Time" location="Various" leaders="Yourself!" time="3:45pm" />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AccordionAfternoon;
