## How does change-detection work?
{title:1}

## Zones!

    @Component({
      selector: 'toggler',
      template: '<button (click)="toggle()">
        {{ msg }}</button>',
    })
    class TogglerComponent {
      constructor() { 
        this.msg = "Click me";
      }
      toggle() {
        this.msg = "You clicked me!";
        setTimeout(() => { 
          this.msg = "Click me";
        }, 250);
      }
    }

## How?

## Patching

Zones patch all async:

```javascript
window.setTimeout = function(fn, timeout) {
  originalTimeout(zone.callback(fn), timeout);
}
```





