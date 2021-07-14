import { useRouter } from "next/router"
import Layout from "@/components/Layout";

export default function MyEvent() {
  const router = useRouter()
  console.log(router.query.slug);

  return (
    <Layout>
      <h1>My event</h1>
    </Layout>
  )
}
