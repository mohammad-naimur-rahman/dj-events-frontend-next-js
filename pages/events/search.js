import Layout from '@/components/Layout'
import { API_URL } from '@/config/index'
import EventItem from '@/components/EventItem'
import qs from 'qs'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function SearchPage({ events }) {
  const router = useRouter()

  return (
    <Layout title="Search Results">
      <Link href='/events'>Go Back</Link>
      <h1>Search Results for {router.query.term}</h1>
      {!events.length && <h3>No events to show</h3>}
      {
        events.map(evt => (
          <EventItem evt={evt} key={evt.id} />
        ))
      }
    </Layout>
  )
}


export async function getServerSideProps({ query: { term } }) {

  const query = qs.stringify({
    _where: {
      _or: [
        { name_contains: term },
        { performers_contains: term },
        { descriptions_contains: term },
        { venue_contains: term },
      ]
    }
  })

  const res = await fetch(`${API_URL}/events?${query}`)
  const events = await res.json()

  return {
    props: { events }
  }
}