'use strict';

/* 10. Implement phone book using hash (also known as `object`).
- Define hash with `key` contains `name` (from previous example) and `value`
contains `phone`.
- Implement function `findPhoneByName` with signature
`findPhoneByName(name: string): string`. Returning phone from hash/object.
Use `hash[key]` to find needed phone. */

const phonebook = { Mark: '0975554443', John: '0974747477', Zan: '0679994545' };

const findPhoneByName = (name) => phonebook[name];

module.exports = { phonebook, findPhoneByName };
