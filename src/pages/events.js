import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import PageTitle from '../components/PageTitle'
import Container from '../components/Container'
import Layout from '../components/Layout'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

import '@fullcalendar/core/main.css'
import '@fullcalendar/daygrid/main.css'

const Text = styled.p`
  text-align: center;
  line-height: 1.6;
  a {
    color: #121212;
  }
`

const FullCalendarWrapper = styled.div`
  .fc-content {
    cursor: pointer;
  }
`

class EventsPage extends React.Component {
  render() {
    const events = [
      {
        title: 'event 1',
        start: '2019-04-02T13:13:55.008',
        end: '2019-04-03T13:13:55.008',
        description: 'this is my event',
      },
      { title: 'event 2', date: '2019-04-02' },
    ]

    return (
      <Layout>
        <Helmet>
          <title>Event Calendar</title>
          <meta name="description" content="Event Calendar" />
        </Helmet>

        <Container>
          <PageTitle>Events</PageTitle>
          <Text>This will be the Event calendar page</Text>
          <FullCalendarWrapper>
            <FullCalendar
              eventClick={this.handleEventClick}
              defaultView="dayGridMonth"
              plugins={[dayGridPlugin, interactionPlugin]}
              events={events}
            />
          </FullCalendarWrapper>
        </Container>
      </Layout>
    )
  }

  handleEventClick = arg => {
    console.log('event clicked', arg)
    alert(arg.event.title + ' ' + arg.event.extendedProps.description)
  }
}

export default EventsPage
