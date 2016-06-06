## Change detection
{ title: 1 }

## Angular 1's change detection

##   
{notitle: 1}

![x](img/scribble.png)

## Angular 2's

- enforced flow

```shell
EXCEPTION: Expression '{{ bear }} in App@3:94'
 has changed after it was checked
```

## Data down

![x](img/data-down.png)

## Events up

![x](img/events-up.png)

## No looping

![x](img/change-after-check.png)

## Still - requires a check of whole tree!

## Even if only once

## But...

## Can we do better?

## `OnPush`

- tells Angular component should be ignored until `@Input()` changes


## Allows us to ignore parts of the tree

##    
{notitle: 1}

![x](img/on-push.png)

## 60fps possible!

## Demo :)
