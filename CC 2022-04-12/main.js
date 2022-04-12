// Coding challenge 04/12/2022

// Create a method that accepts an array of names, and returns an array of each name with its first letter capitalized.

// example
// capMe(['jo', 'nelson', 'jurie'])  returns ['Jo', 'Nelson', 'Jurie']
// capMe(['KARLY', 'DANIEL', 'KELSEY']) returns ['Karly', 'Daniel', 'Kelsey']

function capMe(names) {
  return names.map(name => {
    return name.split(' ').map(word => {
      return word[0].toUpperCase() + word.slice(1).toLowerCase();
    }).join(' ');
  });
}

//or

// function capMe(names) {
//   return names.map(n => n[0].toUpperCase() + n.slice(1).toLowerCase());
// }

capMe(['jo', 'nelson', 'jurie'])  // ['Jo', 'Nelson', 'Jurie']
capMe(['KARLY', 'DANIEL', 'KELSEY']) // ['Karly', 'Daniel', 'Kelsey']