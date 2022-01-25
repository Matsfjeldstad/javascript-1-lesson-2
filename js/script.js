// We code it together

// 1. Select heading h2

var subHeading = document.querySelector("h2");

console.log(subHeading);
// 2. Select element with class .heading2

var subHeading = document.querySelector(".heading2");
console.log(subHeading)

// 3. Select element with id #list using querySelector

var list = document.querySelector("#list")
console.log(list)

// 4. Select element with id #list using getElementById

var list2 = document.getElementById("list");
console.log(list2)
// 5. Select single li

var selectListItem = document.querySelector("li");
console.log(selectListItem)

//  a. Select Multiple li's

var selectItems = document.querySelectorAll("li");
console.log(selectItems[1]);

//  b. Loop on the list items

for(var i = 0; i < selectItems.length; i++){
    console.log(selectItems[i].innerHTML);
}
// 7.
    // a. select h1 element
    var heading = document.querySelector("h1");
    // b. Change the color of that h1 to be purple
    heading.style.color = "purple";
    // c. Change the border to be 1px solid green
    heading.style.border = "1px solid green";
    // d. Change background colour to be light gray
    heading.style.backgroundColor = "lightgray";
    // e. Change the padding to be 1em ( remember that 1em is the base in px you put on the body )
    heading.style.padding = "1em";
    heading.style.transition = "0.5s"
    heading.style.width = "700px"

    function changeWidth(){
        heading.style.width = "1000px"
        heading.innerText = "kuk"
        heading.classList.add("kuklist")
    }

    var body = document.querySelector("body");

    body.style.backgroundColor = "#999999";
    body.style.backgroundImage = "url(https://www.w3schools.com/colors/img_colormap.gif)"
    body.style.backgroundSize = "cover"
    body.style.backgroundRepeat = "no-repeat"

    const myDiv = document.querySelector("div");
    myDiv.classList.add("container")
    myDiv.classList.add("mySecondDiv")
console.log(myDiv)

// 1. select the h1 and change the innerText



// 2.loop through al the li element and change the innerText value to be changed

var selectItems = document.querySelectorAll("li");
for(var i = 0; i < selectItems.length; i++){
    selectItems[i].innerText = selectItems[i].innerText + " changed";
    console.log(selectItems[i].innerHTML)
}
// 3.change the innerHTML of the h1 to be updated using innerHTML
var heading = document.querySelector("h1");

// 4. add some html to the div >> add <p><b>Bold text</b> not bold text</p>

var addHtml = document.querySelector("div")

addHtml.innerHTML = `<p>
<b> bold Text </b> notbold tex </p>`;



var selectUl = document.querySelector("ul");
var newLI = `<li>this is a new listed item</li>`

selectUl.innerHTML = selectUl.innerHTML + newLI;

console.log(selectUl.innerText);