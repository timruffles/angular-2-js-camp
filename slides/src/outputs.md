## Outputs
{title:1}

## Data-down, events-up

![outputs](img/outputs.png)

## ...events-up

## What goes up?

## Business events

## Events up

- via events

```html
<product
  (addToCart)="cart.add($event.product)"
  ...
  >
```

## Abstracting

## Events

```typescript
import { EventEmitter, Output } from "@angular/core";

@Component({ /* ... */ })
class Product {
  @Output() addToCart = new EventEmitter;

  addToCart() {
    // fires (filtered)=... expression
    this.addToCart.emit({ product: this.product })
  }
}
```

## Exercise
{exercise:1}

    outputs


