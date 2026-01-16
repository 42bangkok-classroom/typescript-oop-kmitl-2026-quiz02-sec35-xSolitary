import axios from "axios"

type ApiPost = {
  userId: number
  id: number
  title: string
}

type Post = {
  id: number
  title: string
}

export async function getPostsByUser(userId: number): Promise<Post[]> {
  try {
    const response = await axios.get<ApiPost[]>(
      "https://jsonplaceholder.typicode.com/posts"
    )
    const posts = response.data

    return posts
      .filter((post) => post.userId === userId)
      .map(({ id, title }) => ({ id, title }))
  } catch {
    return []
  }
}
