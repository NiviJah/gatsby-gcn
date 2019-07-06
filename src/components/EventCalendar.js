import React from "react"
import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import interactionPlugin from "@fullcalendar/interaction"
import "@fullcalendar/core/main.css"
import "@fullcalendar/daygrid/main.css"

class MyEventCalendar extends React.Component {
  handleEventClick = e => {
    console.log('====================================');
    console.log(`title:${e.event.title} description:${e.event.extendedProps.description}`);
    console.log('====================================');
  }
  render() {
    const events = [
      {
        title: "event 1",
        start: "2019-04-02T13:13:55.008",
        end: "2019-04-03T13:13:55.008",
        description: "this is my event",
      },
      {
        title: "event 2",
        start: "2019-05-03T13:13:55.008",
        end: "2019-05-04T13:13:55.008",
        description: "this is another event",
      },
      {
        title: "event 3",
        start: "2019-07-03T13:13:55.008",
        end: "2019-075-04T13:13:55.008",
        description: "this is random event",
      },
    ]
    return (
      <div>
        <h1>this is a event calendar</h1>
        <FullCalendar
          eventClick={this.handleEventClick}
          defaultView="dayGridMonth"
          eventClick={this.handleEventClick}
          defaultView="dayGridMonth"
          plugins={[dayGridPlugin, interactionPlugin]}
          events={events}
        />
      </div>
    )
  }
}

export default MyEventCalendar