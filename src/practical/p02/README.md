# Subject 2 — Filter Posts By User

## API Endpoint

```
https://jsonplaceholder.typicode.com/posts
```

## Function name

`getPostsByUser`

## Function interface

```tsx
getPostsByUser(userId)
```

## Description

Fetch posts and return only posts that belong to the given `userId`.

Return only `id` and `title`.

## Example input

```tsx
getPostsByUser(1)
```

## Example output

```json
[
  { id: 1, title: "sunt aut facere repellat provident occaecati" },
  { id: 2, title: "qui est esse" }
]
```

## Edge Cases

### No posts match userId
If no posts match the given `userId`, return an empty array:

```tsx
getPostsByUser(999)
```

```json
[]
```

### Multiple posts for same userId
If there are multiple posts for the same user, return all of them:

```tsx
getPostsByUser(1)
```

```json
[
  { id: 1, title: "Post 1" },
  { id: 2, title: "Post 2" },
  { id: 3, title: "Post 3" }
]
```

## Global Rules

- Use **axios**
- Use **async / await**
- Use **try / catch**
- One function per subject
- Use at least one **array or object method**
- No `any`
- Function must **return value only** (no console.log)

