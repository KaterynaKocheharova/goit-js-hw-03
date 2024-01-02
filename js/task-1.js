'use strict'

// =============================================================== SLUG ==============================================================

function slugify(title) {
    const editedTitle = title.toLowerCase();
    const arr = editedTitle.split(" ");
    const newTitle = arr.join("-");
    return newTitle;
}

console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"