## Stores
{title: 1}

## Goal

- load in product data

## Stores

## Abstract persistence

```typescript
class Checkout {
  checkout(http: Http) {
    this.http.post("/some/checkout")
  }
}
```

## Why?

## DRY

- one place to define persistence

## Low-coupling

- bad to couple many components to complex API details

## Testing

- smaller API (e.g just promises) = easier to test

## Services
{title:1}

## Services are...

- any code!

## Defining a service

```typescript
import { Injectable } from "@angular/core";

@Injectable()
export class ProductStore {
}
```

## `@Injectable()`?

```typescript
import { Injectable } from "@angular/core";

@Injectable()
...
```

## Why?

## Well...

## How do we get an instance?

```typescript
  ngOnInit() {
    this.productStore.all()
      .then(products => 
        this.products = products);
  }
```

## Dependency Injection

## Provide store to app

```typescript
// App.component.ts
import { ProductStore } from "./ProductStore";

@Component({
  // ...
  providers: [ProductStore, /\* ... \*/],
})
```

## Using

```typescript
import { ProductStore } from "./ProductStore";

@Component(/\* ... \*/)
export class ProductList {
  // we'll get an instance
  constructor(store: ProductStore) {
  }
}
```

## Why DI?

## Two benefits

## One: testing

## Two: pluggable implementations

## Hierarchical

## Tree

![injector tree](img/injector-tree.png)

## e.g
{notitle:1}

```typescript
import { provide } from '@angular/core';
import { ProductStore, ServerSideStore } from 
  './Product';

// provide a valid alternative implementation
// of ProductStore (server-side, stubbed, web-sockets...)
bootstrap(FrontPage, [
  provide(ProductStore, { 
    useClass: ServerSideStore,
  },
])
```

## Use

```typescript
import { ProductStore } from './ProductStore';

class ProductList {
  // ...and components down the tree 
  // will get ServerSideStore not ProductStore!
  constructor(greeter: ProductStore) { 
  }
}
```

## First parent with instance wins


## `@Injectable()`?

- Angular needs meta-data to be created
- At least one decorator per service and you're ok


## Exercise
{exercise: true}

    stores

