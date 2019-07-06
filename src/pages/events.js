import React from 'react'
import Loadable from 'react-loadable'

import { Link } from 'gatsby'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import PageTitle from '../components/PageTitle'
import Container from '../components/Container'
import Layout from '../components/Layout'

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
const LoadableCallendar = Loadable({
  loader: () => import('../components/EventCalendar'),
  loading() {
    return <div>Loading...</div>
  },
})

class EventsPage extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet>
          <title>Event Calendar</title>
          <meta name="description" content="Event Calendar" />
        </Helmet>

        <Container>
          <PageTitle>Events</PageTitle>
          <Text>This will be the Event calendar page</Text>
          <LoadableCallendar />
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
