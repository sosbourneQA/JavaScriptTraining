// 1.
// document.querySelector("#text_content").addEventListener("click", blueToRed);
// document.querySelector("#big_colour").addEventListener("click", greenToPink);
// document.querySelector("#fonts").addEventListener("click", trnToArial);

// 3.
const tnrParagraph = document.querySelector("#tnrParagraph");



// 4.
const mouseOver = event => {
    // 5.
    event.target.style.backgroundColor = 'limegreen';
    if (event.target.textContent.indexOf('background') === -1) {
        event.target.textContent += ', I have had my background changed on mouse over';
    }
    else {
        event.target.textContent = event.target.textContent.replace("out", "over");
    }
};
tnrParagraph.addEventListener('mouseover', mouseOver);



// 9.
const mouseOut = event => {
    event.target.style.backgroundColor = 'yellow';
    if (event.target.textContent.indexOf('background') === -1) {
        event.target.textContent += ', background changed on mouse out';
    }
    else {
        event.target.textContent = event.target.textContent.replace("over", "out");
    }
}
tnrParagraph.addEventListener('mouseout', mouseOut);



// 10.
const elementClick = event => {
    event.target.style.backgroundColor = 'white';
}
