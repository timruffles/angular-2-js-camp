## Platform directives
{title: 1}

## Some directives are provided by platform

## Directives

- don't have a template of their own
- often just attributes - `<div [hidden]='!isVisible()'`

## Built-in

- provided by browser-platform, server, NativeScript etc

## `PLATFORM_DIRECTIVES`

- `*ngFor`
- `*ngIf`
- some useful attribute directives

## `*ngFor`

```html
<div *ngFor='let item of items'
    >
  {{ item.name }}
</div>
```

## Gotcha 1:

- spot the bug!

```html
<div *ngFor='let item in items'
    >
  {{ item.name }}
</div>
```

## `ngForOf`

- *must* be `let ... of ...`

```html
<div *ngFor='let item of items'
    >
  {{ item.name }}
</div>
```

## Gotcha 2:

- what's the bug?

```html
<div ngFor='let item of items'
    >
  {{ item.name }}
</div>
```

## Structural directives are stars

- `*` denotes something that works with element as template

```html
<div *ngFor='let item of items'
    >
  {{ item.name }}
</div>
```

## Gotcha 3

```html
<div *ngFor='item of items'
    >
  {{ item.name }}
</div>
```

## Must use `let`

```html
<div *ngFor='let item of items'
    >
  {{ item.name }}
</div>
```

## Phew!

## Must use `let`

```html
<div *ngFor='let item of items'
    >
  {{ item.name }}
</div>
```
## `ngIf` is easier

- just remember the `*`

```html
<div *ngIf='item'
     >
  {{ item.name }}
</div>
```

## `ngIf` use-case

- creating/destroying large subtree
- often you'd prefer to show/hide via CSS

## `[class]` directive

- `[class.someClass]=x` will add/remove `someClass`
- if x is truthy, will be present

```html
<div [class.concealed]='!item'
     >
  ...
</div>
```

## `[hidden]` attribute

```html
<div [hidden]='!item'
     >
  ...
</div>
```

## Exercise
{exercise:1}

    build-in-directives



