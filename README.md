# is-email-address

Check whether a string is a valid email address or not

---

# Installation

with `npm`

```bash
npm install is-email-address
```

with `yarn`

```bash
yarn add is-email-address
```

with `pnpm`

```bash
pnpm install is-email-address
```

# Usage

import the default export from the package:

using ES modules

```js
import isEmailAddress from "is-email-address";
```

using CommonJs

```js
const isEmailAddress = require("is-email-address");
```

the import is a function that takes a  string as an argument and checks if it's a valid email address

```js
 console.log(isEmailAddress("foo"));
 // false
 
 console.log(isEmailAddress("foo@example.com"));
 // true
```
