import { getProject } from "@/sanity/sanity-util"


export default async function Home() {
  const project = await getProject()

  return (
    <div>
      {project.map((project) => (
        <div key={project._id}>
          {project.name}</div>
      ))}
    </div>
    // <h1>hello home</h1>
  )
}
