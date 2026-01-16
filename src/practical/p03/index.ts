import axios from "axios"

type ApiPost = {
  id: number
  title: string
}

type ApiComment = {
  postId: number
}

type PostWithCommentCount = {
  postId: number
  title: string
  totalComments: number
}

export async function mapPostWithCommentCount(): Promise<
  PostWithCommentCount[]
> {
  try {
    const [postsResponse, commentsResponse] = await Promise.all([
      axios.get<ApiPost[]>("https://jsonplaceholder.typicode.com/posts"),
      axios.get<ApiComment[]>("https://jsonplaceholder.typicode.com/comments"),
    ])

    const posts = postsResponse.data
    const comments = commentsResponse.data

    const countByPostId = comments.reduce<Record<number, number>>(
      (acc, comment) => {
        acc[comment.postId] = (acc[comment.postId] ?? 0) + 1
        return acc
      },
      {}
    )

    return posts.map((post) => ({
      postId: post.id,
      title: post.title,
      totalComments: countByPostId[post.id] ?? 0,
    }))
  } catch {
    return []
  }
}
