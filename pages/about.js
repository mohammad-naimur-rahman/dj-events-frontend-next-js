import Link from 'next/link';
import Layout from '@/components/Layout';

export default function about() {
  return (
    <Layout title="about dj">
      <h1>About</h1>
      <p>This is an app to find latest DJ and other muscical events</p>
      <p>version: 0.0.1</p>
      <Link href="/">Home</Link>
    </Layout>
  )
}
