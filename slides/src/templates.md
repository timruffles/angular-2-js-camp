## Templates
{ title: 1}

## Are readable now!

## Data-binding

```html
<!-- interpolated - live -->
<div title="Hello {{ person }}">

<!-- [] = attribute replaced by expression -->
<div [title]="getMessage()">
```

## Event-handling

```html
<!-- DOM events -->
<form (submit)="create($event)">
```

## Local variables

- access nodes in template

```html
<video #movieplayer >
  <button (click)="movieplayer.play()">
</video>
```

