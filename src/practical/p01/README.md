# Subject 1 — Fetch First & Last Post

## API Endpoint

```
https://jsonplaceholder.typicode.com/posts
```

## Function name

`getEdgePosts`

## Function interface

```tsx
getEdgePosts()
```

## Description

Fetch posts from the API and return only the **first** and **last** post as an array.

Return only `id` and `title`.

## Example output

```json
[
  { id: 1, title: "sunt aut facere repellat provident occaecati" },
  { id: 100, title: "at nam consequatur ea labore ea harum" }
]
```

## Edge Cases

### Single post in array
If there is only one post, return it twice (as both first and last):

```json
[
  { id: 1, title: "Only post" },
  { id: 1, title: "Only post" }
]
```

### Exactly two posts
If there are exactly two posts, return both:

```json
[
  { id: 1, title: "First" },
  { id: 2, title: "Second" }
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

