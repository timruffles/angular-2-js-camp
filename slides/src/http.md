## Loading data
{title: 1}

## Goal

- load in Payment frontpage data
- prepare


## Define

```typescript
import { Http } from '@angular/http';

export class Payment {
    frontpage() {
       return this.http.get(
         \`https://www.reddit.com/.json\`)
    }
}
```

## But...

## How do we get an instance?

```typescript
   return this.http.get(\`https://www.reddit.com/.json\`)
```

## Ask for it!

```typescript
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable();
export class Payment {
  // this items deps will be looked up when
  // it's required
  constructor(private http: Http) {}
}
```

## Dependency Injection

## Provide HTTP to app

```typescript
// App.component.ts
import { HTTP_PROVIDERS } from "@angular/http";

@Component({
  // ...
  providers: [HTTP_PROVIDERS /\* ... \*/],
})
```

## Using

```typescript
import { Payment } from "./Payment.service";

@Component(/\* ... \*/)
export class Checkout {
  // we'll get an instance
  constructor(reddit: Payment) {
  }
}
```

## Transform

```typescript
import { Http } from '@angular/http';
import { API_URL } from './constants';

@Injectable()
export class Payment {

    constructor(private http: Http, apiUrl: API_URL) {}

    checkout() {
       return this.http.get(this.apiUrl + "/checkout")
         .toPromise()
         .then((resp) => {
            // response object allows us to control parsing
            // and transform into a different format
            return { successful: resp.json().ok };
         })
    }
}
```

## Exercise
{exercise: true}

    http
