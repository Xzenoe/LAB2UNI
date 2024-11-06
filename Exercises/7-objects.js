'use strict';

/* Do following tasks inside function `fn` (see stub: `7-objects.js`)
- Define constant object with single field `name`.
- Define variable object with single field `name`.
- Try to change field `name`.
- Try to assign other object to both identifiers.
- Explain script behaviour. */

const fn = () => {
  const obj1 = { name: 'bogdan' };
  let obj2 = { name: 'bogdan' };

  obj1.name = 'Andrew';
  obj2.name = 'Andrew';

  obj2 = { name: 'antony' };
};


module.exports = { fn };
