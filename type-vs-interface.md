# Type vs. Interface in TypeScript: What Is the Difference?

## Introduction

When we start learning TypeScript, we will often see both type and interface. They may look similar because both can describe the shape of an object. The main difference is that interface is mainly used to describe object structures, while type can give a name to many kinds of types.

## Detailed Explanation

Here is a simple interface for a user:
```ts
interface User {
  id: number;
  name: string;
}
```
This tells TypeScript that a User object must have an ID and a name. We can build on an interface with extends:
```ts
interface Admin extends User {
  role: string;
}
```
A type alias can describe the same object:
```ts
type User = {
  id: number;
  name: string;
};
```
However, type can also describe values that are not just objects. For example, a union lets a variable hold one of several possible values:
```ts
type Status = "loading" | "success" | "error";
```
We can also combine types with an intersection (&):
```ts
type Admin = User & { role: string };
```
One special feature of interfaces is that TypeScript can merge two declarations with the same name. Type aliases cannot be reopened this way.

## Conclusion

We use interface when describing an object that other parts of our program may extend. Choose type when we need unions, intersections, or other type combinations. Both are useful and either we can describe many object shapes, so consistency across our project also matters.