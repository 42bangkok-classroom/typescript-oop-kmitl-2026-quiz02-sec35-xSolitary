# Subject 5 — Safe Fetch Comment

## API Endpoint

```
https://jsonplaceholder.typicode.com/comments/{id}
```

## Function name

`safeFetchComment`

## Function interface

```tsx
safeFetchComment(commentId)
```

## Description

Fetch a single comment by `commentId`.

Rules:

- If any error occurs, return `null`
- If successful, return an object with `id` and `body`

## Example input

```tsx
safeFetchComment(1)
```

## Example output

```json
{ id: 1, body: "laudantium enim quasi..." }
```

## Example input

```tsx
safeFetchComment(9999)
```

## Example output
```ts
null
```

## Edge Cases

### Invalid commentId values
Return `null` for invalid or non-existent comment IDs:

```tsx
safeFetchComment(0)      // returns null
safeFetchComment(-1)    // returns null
safeFetchComment(9999)  // returns null
```

### Comment with empty body
If the comment exists but has an empty body, return it:

```tsx
safeFetchComment(1)
```

```json
{ id: 1, body: "" }
```

### Error handling
Return `null` for any error (network error, 404, 500, timeout, etc.):

```tsx
safeFetchComment(null)      // returns null (invalid input)
safeFetchComment(undefined) // returns null (invalid input)
```

## Global Rules

- Use **axios**
- Use **async / await**
- Use **try / catch**
- One function per subject
- Use at least one **array or object method**
- No `any`
- Function must **return value only** (no console.log)

