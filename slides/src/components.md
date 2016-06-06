## Components
{tags:{state:"title"}}

## Our first component

## Goal

```html
<app>
  <img src="img/bear.png">
</app>
```

## Bit by bit

##  
{tags:{state:"notitle"}}

```javascript
import { Component } from '@angular/core';
```


##   
{tags:{state:"notitle"}}

```javascript
@Component({
  // any CSS selector
  selector: 'app',
  // ...
})
```

##   
{tags:{state:"notitle"}}

```javascript
@Component({
  // ...
  template: '<img src="img/bear.png">',
})
```

##   
{tags:{state:"notitle"}}

```javascript
@Component({
  // ...
})
export class HelloComponent {
}
```


## All together

```javascript
import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: '<img src="img/bear.png">',
})
export class HelloComponent {
}
```

## Complete app!

```javascript
import { HelloComponent } from "./HelloComponent";
import { bootstrap } from 
  "@angular/platform-browser-dynamic";

bootstrap(HelloComponent);
```


```javascript
<!DOCTYPE html>

<app></app>

<!-- bundled up: app + dependencies -->
<script src="dist/app.js"></script>
```

## App = tree of components

![component](img/component-tree.png)
