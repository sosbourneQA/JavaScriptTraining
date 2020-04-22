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