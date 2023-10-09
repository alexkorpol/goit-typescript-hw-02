/*
  У вас є функція merge, яка поєднує два об'єкти. 
  Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.
*/

function merge<T, U>(objA: T, objB: U): T & U {
  return Object.assign({}, objA, objB);
}

// Приклад використання:
const mergedObject = merge({ name: 'John' }, { age: 30 });

console.log(mergedObject); // { name: 'John', age: 30 }

export { }