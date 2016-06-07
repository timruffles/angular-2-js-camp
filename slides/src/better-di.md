## Better DI
{tags:{state:"title"}}

## First: why DI?

## Two benefits

## One: testing

## Two: switchable implementations

- depend on interface
- switch implementation

## Angular 1

## Crufty

```javascript
module.service("User", calledWithNew);
.factory("User", usesReturnValue)
.provider("User", returnsProviderConfig)
.value("User", User)
```

## Implicit

- e.g 'where did this service come from?!'
- file location opaque

```javascript
module.controller("UserCtrl", function(
  User
  , Login
  , errors
) {
  // unclear where the above came from physically
  // (without conventions)
})
```

## App-wide

- Can't switch provider for part of an app

## Angular 2

## Let's define a 'service'

```javascript
import { Injectable } from "@angular/core";

@Injectable()
export class Greeter {
  message(name) {
    return 'Hello ${name}, 
      Angular 2 is easy';
  }
}
```

## Using a service

## Better API

```typescript
import { Component } from '@angular/core';
import { Greeter } from './greeter';

@Component({
  // setup
  providers: [Greeter],
})
class HelloComponent {
  constructor(greeter: Greeter) { 
    this.message = greeter.message();
  }
}
```

## Hierarchical

```typescript
import { Greeter } from './greeter';

bootstrap(FrontPage, [Greeter]);
```

```typescript
import { Greeter } from './greeter';

@Component({
  // don't be explicit
  providers: [],
})
class HelloComponent {
  constructor(greeter: Greeter) { 
  }
}
```

## Tree

![injector tree](img/injector-tree.png)

## Let's try

- Goal:
- Inject a game store
- Update game state from store

