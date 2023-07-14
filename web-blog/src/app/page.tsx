import { getPosts } from "@/service/api_service/blogapi"

export default async function Home() {
  const data = await getPosts()
  console.log(data)
  return (
    <h1>hello home</h1>
  )
}
