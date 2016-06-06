## Routing
{title:1}

## Structured

![component router](img/component-router.png)

## For today: KISS

## Define routes

```typescript
import {Routes, ROUTER_DIRECTIVES} 
  from '@angular/router';

@Routes([
  {
    path:'/products/:id',
    component: ProductPage 
  },
  // ... more
])
@Component({
```

## Define where Routed content appears

```typescript
import {Routes, ROUTER_DIRECTIVES} 
  from '@angular/router';

@Component({
  directives: [ROUTER_DIRECTIVES],

  // here's where our routed component attaches
  template: '<router-outlet></router-outlet>',
})
```

## Why are routes strings?

## Lazy-loading

## Links

```typescript
import { ROUTER_DIRECTIVES, RouteConfig }
   from "@angular/router";

@Component({
  selector: "product-listing",
  directives: [ROUTER_DIRECTIVES],
  template: \`
    <h1>Here are our products:</h1>
    <a [routerLink]=
      "['/products', product.id]">
      Router
    </a>
  \`
})
```

## Exercise
{ title: 1}
  
    routing
  
