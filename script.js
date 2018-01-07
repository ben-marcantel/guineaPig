
let artElement= document.getElementsByClassName("article-section");
let output =document.getElementById("output-target");
let input = document.getElementById("keypress-input");
let h1 = document.getElementById("page-title");
let buttonBlue = document.getElementById("add-color");
let buttonHulk = document.getElementById("make-large");
let buttonBord = document.getElementById("add-border");
let buttonRoun = document.getElementById("add-rounding");

// When any section is clicked the output target text should be "You clicked on the {text of the section} section"

for (i=0; i<artElement.length;i++){
    artElement.item(i).addEventListener("click", function articleClick(e){
        let elemenText = e.target.innerHTML;
        output.innerHTML = `You clicked on the ${elemenText} section`;
    })
}

// When the mouse is over the h1 tag, the output element should contain the text "You moved your mouse over the header".

h1.addEventListener("mouseover", (e)=>{
    output.innerHTML = "You moved your mouse over the header";
})

// When the mouse leaves the h1 tag, the output element should contain the text "You left me!!".

h1.addEventListener("mouseleave",(e)=>{
    output.innerHTML = "You left me!!";
})

// When you type characters into the input field, the output element should mirror the text in the input field.

input.addEventListener("keyup", (e)=>{
    output.innerHTML = input.value;
})

// When you click the "Add color" button, the guinea-pig element's text color should change to blue.


buttonBlue.addEventListener("click", (e)=>{
    document.getElementById("guinea-pig").style.color = "blue";
})

// When you click the "Hulkify" button, the guinea-pig element's font size should become much larger.

buttonHulk.addEventListener("click", (e)=>{
    document.getElementById("guinea-pig").style.fontSize = "205%";
})

//When you click the "Capture it" button, the guinea-pig element should have a border added to it.

buttonBord.addEventListener("click",(e)=>{
    document.getElementById("guinea-pig").style.border = "thin solid blue";
})

// When you click the "Rounded" button, the guinea-pig element's border should become rounded.
buttonRoun.addEventListener("click",(e)=>{
    document.getElementById("guinea-pig").style.borderRadius = "25px";
})

// The first section's text should be bold.
for (i=0; i<artElement.length;i++){
    artElement.item(0).style.fontWeight = "900";
        
}
// The last section's text should be bold and italicized.
for (i=0; i<artElement.length;i++){
    artElement.item(5).style.fontWeight = "900";
    artElement.item(5).style.fontStyle = "italic";  
}
