# Subject 3 — Map Posts With Comment Count

## API Endpoints

```
https://jsonplaceholder.typicode.com/posts
https://jsonplaceholder.typicode.com/comments
```

## Function name

`mapPostWithCommentCount`

## Function interface

```tsx
mapPostWithCommentCount()
```

## Description

Fetch posts and comments, then return posts with the total number of comments for each post.

Note: The API returns posts with `id` field, but your output should use `postId` instead of `id`.

## Example output

```json
[
  { postId: 1, title: "...", totalComments: 5 },
  { postId: 2, title: "...", totalComments: 5 }
]
```

## Edge Cases

### Posts with zero comments
If a post has no comments, set `totalComments` to `0`:

```json
[
  { postId: 1, title: "Post 1", totalComments: 0 },
  { postId: 2, title: "Post 2", totalComments: 0 }
]
```

### Empty posts array
If there are no posts, return an empty array:

```json
[]
```

## Global Rules

- Use **axios**
- Use **async / await**
- Use **try / catch**
- One function per subject
- Use at least one **array or object method**
- No `any`
- Function must **return value only** (no console.log)

