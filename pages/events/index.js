import Layout from '@/components/Layout'
import { API_URL } from '@/config/index'
import EventItem from '@/components/EventItem'
import Pagination from '@/components/Pagination'
const PER_PAGE = 2

export default function EventsPage({ events, total, page }) {

  return (
    <Layout title="man">
      <h1>Events</h1>
      {!events.length && <h3>No events to show</h3>}
      {
        events.map(evt => (
          <EventItem evt={evt} key={evt.id} />
        ))
      }
      <Pagination total={total} page={page} perPage={PER_PAGE} />
    </Layout>
  )
}


export async function getServerSideProps({ query: { page = 1 } }) {

  // calculate start page
  const start = +page === 1 ? 0 : (+page - 1) * PER_PAGE

  // Fetch total / count
  const totalRes = await fetch(`${API_URL}/events/count`)
  const total = await totalRes.json()


  //Fetch events
  const eventRes = await fetch(`${API_URL}/events?_sort=date:ASC&_limit=${PER_PAGE}&_start=${start}`)
  const events = await eventRes.json()

  return {
    props: { events, page: +page, total: total }
  }
}