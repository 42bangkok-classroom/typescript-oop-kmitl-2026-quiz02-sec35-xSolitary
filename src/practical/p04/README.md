# Subject 4 — Count Comments Per Post

## API Endpoint

```
https://jsonplaceholder.typicode.com/comments
```

## Function name

`countCommentsByPost`

## Function interface

```tsx
countCommentsByPost()
```

## Description

Fetch comments and return an object that shows how many comments each post has.

**Important Notes:**
- The object keys should be numbers (post IDs), not strings.
- If the comments array is empty, return an empty object `{}`.
- Handle edge cases gracefully (e.g., comments with `null` or `undefined` postId should be skipped).
- Use `try/catch` as required by global rules, but focus on correctly processing valid API responses.

## Example output

```json
{
	1: 5,
	2: 5,
	3: 5
}
```

## Edge Cases

### Empty comments array
If the comments array is empty, return an empty object:

```json
{}
```

### Posts with zero comments
If a post has no comments, it should not appear in the result object:

```json
{
	1: 1,
	3: 1
}
```
Note: Post ID 2 is not in the result because it has no comments.

### Comments with null or undefined postId
Comments with `null` or `undefined` postId should be skipped and not counted.

## Global Rules

- Use **axios**
- Use **async / await**
- Use **try / catch**
- One function per subject
- Use at least one **array or object method**
- No `any`
- Function must **return value only** (no console.log)

