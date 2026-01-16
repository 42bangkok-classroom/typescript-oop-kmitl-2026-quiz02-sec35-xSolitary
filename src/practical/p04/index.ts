import axios from "axios"

type ApiComment = {
  postId: number | null | undefined
}

export async function countCommentsByPost(): Promise<Record<number, number>> {
  try {
    const response = await axios.get<ApiComment[]>(
      "https://jsonplaceholder.typicode.com/comments"
    )
    const comments = response.data

    if (comments.length === 0) {
      return {}
    }

    return comments.reduce<Record<number, number>>((acc, comment) => {
      const postId = comment.postId
      if (typeof postId !== "number") {
        return acc
      }
      acc[postId] = (acc[postId] ?? 0) + 1
      return acc
    }, {})
  } catch {
    return {}
  }
}