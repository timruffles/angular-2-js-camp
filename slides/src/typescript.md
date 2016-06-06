## TypeScript
{title:1}


## ES6++

![typescript es6](img/typescript-es6.png)

## You're going to hate me...

##    
{notitle:1}

![img](img/squash.png)

## Static types done right

## Main benefit

## Fewer WTFs!

![im](img/wtfm.jpg)

## Lots of features

## Most important

1. Types
1. Modules
1. Classes

## Types
{title:1}

## Variables

```typescript
// type a var, let, const
const person : string = "hello";

// TypeScript is not foolish
const personInferred = "hello";
```

## Functions

```typescript
// type arguments, return values
function greet(name: string): string {
  // ...
}
```

## Compile time!

```javascript
var person = "hello";
function greet(who) {
    return "hi " + who;
}

// this will compile
console.log(greet("hi"));

// this won't: Argument of type 'number' 
// is not assignable to parameter of type 
// 'string'.
console.log(greet(1));
```

## Modules
{title:1}

## Uses ES6 modules!

## Export

```typescript
export class HelloComponent {
}
```

## Import

```typescript
// run.js
import { HelloComponent } from "./HelloComponent";
import { bootstrap } from 
  "@angular/platform-browser-dynamic";

bootstrap(HelloComponent);
```

## Classes
{title: 1}

## ES6++


## Properties in constructor

```typescript
export class BearState {
  private meta: {};

  someMethod() {
    this.meta // ok to access
  }
}

const state = new BearState();
state.meta // not ok
```

## Property short-hand

```typescript
export class BearState {
  constructor(
    public x: number,
    public y: number
  ) {
  }
}

const state = new BearState(10, 20);
state.y // 20;
```

## String union types

```typescript
type gameEvent = "start" | "end";

// Type error! 'type "other" is not
//   assignable to type "start" | "e...
const event: gameEvent = "other";
```

## Type unions...

```typescript
type startEvent = {
  at: number,
};

type endEvent = {
  at: number,
  reason: string,
};

type gameEvent = startEvent | endEvent;
```


## Generics...

```typescript
class Tree<T> {
  constructor(
    public value: T,
    public left?: Tree<T>, 
    public right?: Tree<T>) {
  }
}

const stringTree = new Tree<string>("hi");
const numberTree = new Tree<number>(5,
  new Tree<number>(6));
```

## It's good stuff

## Loading TypeScript
{title: 1}

## Not native

## Modules not native

- stuck in browser vendor disputes

## Polyfill to the rescue!

```javascript
System.import('app/main')
  .catch((e) => console.error(e.stack))
```

## SystemJS or WebPack

- no coupling, yay!

