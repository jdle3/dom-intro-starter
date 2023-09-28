// ID Section
// get paragraph by ID, add span with tan class and "This is new tan text" text content
document.getElementById("firstPara").innerHTML += " <span class=\"tan\">This is new tan text.</span>";


// Tag Name Section
// get all images, change width to 250px
let images = document.getElementsByTagName("img");
console.log(images);

for(let image of images){
    image.width = "250";
}

// Class Name Section
// set med-blue spans to: #3C5E73
// set light-blue spans to : #7C9EA6

let ltBlueSpans = document.getElementsByClassName("light-blue");
let medBlueSpans = document.getElementsByClassName("med-blue");

for(let span of ltBlueSpans){
    span.style.color = "#7C9EA6";
}

for(let span of medBlueSpans){
    span.style.color = "#3C5E73";
}

// Selecting a group with a CSS selector
let colors = ["#283040", "#3C5E73", "#7C9EA6", "D9BCA3", "F2DCC9",]

let svgs = document.querySelectorAll("#svgs svg");

// iterate through the SVG collection and change the color of each
for(let i = 0; i < svgs.length; i++){
    svgs[i].style.stroke = colors[i];
}
for(let svg of svgs){

}