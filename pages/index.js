import Layout from '@/components/Layout'
import { API_URL } from '@/config/index'
import EventItem from '@/components/EventItem'
import Link from 'next/link'

export default function Home({ events }) {
  return (
    <Layout title="man">
      <h1>Upcoming events</h1>
      {!events.length && <h3>No events to show</h3>}
      {
        events.map(evt => (
          <EventItem evt={evt} key={evt.id} />
        ))
      }
      {
        events.length > 0 && (
          <Link href='/events'>
            <a className="btn-secondary">View all Events</a>
          </Link>
        )
      }
    </Layout>
  )
}


export async function getStaticProps() {
  const res = await fetch(`${API_URL}/events?_sort=date:ASC&_limit=3`)
  const events = await res.json()

  return {
    props: { events },
    revalidate: 1
  }
}