var response = await fetch('http://api.are.na/v2/channels/api-test-01/contents');
var data = await response.json();
// console.log(response);
// console.log(data);

var blocks = data.contents;
// console.log(contents);
// would log hi fourteen times, for each entry
// contents.forEach(() => {
//     console.log('hi');
// })

// can switch this out for a class
var mainElement = document.querySelector('main');

blocks.forEach((block) => {
    console.log(block.content);
    // console.log(block.updated_at);
    mainElement.innerHTML += `<p>${ block.content }</p>`;
})
