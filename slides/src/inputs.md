## Data-driven components
{title:1}

## Goal

- get data into our component!

## Data in

```html
<product
  [product]="product"
  ...
  >
```

## Data in

```typescript
import { Input } from "@angular/core";

@Component({ /* ... */ })
class DataControl {
  @Input() public categories: string[];

  ngOnChanges(changes) {
    // fired when input changes
  }
}
```

## Exercise
{exercise:1}

    inputs

