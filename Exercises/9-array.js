'use strict';

/* Collections: Array, Hash (Object)

Implement phone book using array of records.
- Define Array of objects with two fields: `name` and `phone`.
Object example: `{ name: 'Marcus Aurelius', phone: '+380445554433' }`.
- Implement function `findPhoneByName` with signature
`findPhoneByName(name: string): string`. Returning phone from that object
where field `name` equals argument `name`. Use `for` loop for this search. */

const phonebook = [
  { name: 'Mark', phone: '0975554443' },
  { name: 'John', phone: '0974747477' },
  { name: 'Zan', phone: '0679994545' }
];

const findPhoneByName = (name) => {
  for (const obj of phonebook) {
    if (obj.name === name) return (obj.phone);
  }
};

module.exports = { phonebook, findPhoneByName };
