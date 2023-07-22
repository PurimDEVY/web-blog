import { Project } from "@/src/model/Project";
import { createClient, groq } from "next-sanity";

export async function getProject(): Promise<Project[]> {

    const client = createClient({
        projectId: "bor6ylfk",
        dataset: "production",
        apiVersion: "2023-07-17",
    });
    
    return client.fetch(
        groq`*[_type == "blog"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content
        }`
    )
}