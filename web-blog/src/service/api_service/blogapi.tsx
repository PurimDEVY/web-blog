import { fetchAPI } from "./common";

export async function getPosts(first = 10) {
  console.log("call get post")
    const data = await fetchAPI(
      `query FetchPosts($first: Int = 10) {
          posts(first: $first) {
            nodes {
              excerpt
              featuredImage {
                node {
                  sourceUrl
                }
              }
              slug
              title
            }
          }
        }`,
      {
        variables: {
          first,
        },
      }
    );
  
    return data?.posts?.nodes;
  }