var response = await fetch('https://api.are.na/v2/channels/proxy-01/contents');
var data = await response.json();

var blocks = data.contents;

// can switch this out for a class
var mainElement = document.querySelector('main');

blocks.forEach((block) => {
    console.log(block.content);
    // console.log(block.updated_at);
    mainElement.innerHTML += `<p>${ block.content }</p>`;
})
