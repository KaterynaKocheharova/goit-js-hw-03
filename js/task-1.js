'use strict'

// ================================================ SLUG ==============================================

function slugify(title) {
    const editedTitle = title.toLowerCase();
    const arr = editedTitle.split(" ");
    const newTitle = arr.join("-");
    return newTitle;
}

console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
console.log(slugify("English for developer")); // "english-for-developer"
