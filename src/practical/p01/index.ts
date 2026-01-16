import axios from "axios"

type Post = {
  id: number
  title: string
}

export async function getEdgePosts(): Promise<Post[]> {
  try {
    const response = await axios.get<Post[]>(
      "https://jsonplaceholder.typicode.com/posts"
    )
    const posts = response.data

    if (posts.length === 0) return []

    const edgePosts =
      posts.length === 1
        ? [posts[0], posts[0]]
        : posts.length === 2
        ? [posts[0], posts[1]]
        : [posts[0], posts[posts.length - 1]]

    return edgePosts.map(({ id, title }) => ({ id, title }))
  } catch {
    return []
  }
}