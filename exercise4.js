const colours = ['red', 'green', 'blue', 'orange', 'lime', 'olive', 'black', 'yellow'];

// 1.
function buildP(placeholder) {

    let p = document.createElement('p');
    

    let text = document.createTextNode("have you tried turning off and on again")
    p.appendChild(text);
    placeholder.appendChild(p);
}

buildP(document.querySelector("#placeholder"));