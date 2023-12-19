function slugify(title) {

    // 1 variant
    
    const slug = title.toLowerCase().split(' ').join('-');
    return slug;
}
// 2 variant
    // const slug = title.toLowerCase().replace(/ /g, '-');
    // return slug;

// 3 variant

    // const titleNameLower = title.toLowerCase();
    // const slug = titleNameLower.replace(/ /g, '-');
    // return slug;



console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"