let htmlbtn = document.querySelector("#html-btn");
let cssbtn = document.querySelector("#css-btn");
let jsbtn = document.querySelector("#js-btn");
let htmlcode = document.querySelector("#html-coding");
let csscode = document.querySelector("#css-coding");
let jscode = document.querySelector("#js-coding");


htmlbtn.addEventListener('click', function() {
    if(htmlcode.style.display = 'none',htmlbtn.style.borderStyle = 'solid')
       htmlcode.style.display = 'block',csscode.style.display = 'none',jscode.style.display = 'none',htmlbtn.style.borderStyle = 'dashed',cssbtn.style.borderStyle = 'solid',jsbtn.style.borderStyle = 'solid'
    else(htmlcode.style.display = 'block',htmlbtn.style.borderStyle = 'dashed')
        });
cssbtn.addEventListener('click', function() {
    if(csscode.style.display = 'none',cssbtn.style.borderStyle = 'dashed')
        csscode.style.display = 'block',htmlcode.style.display = 'none',jscode.style.display = 'none',cssbtn.style.borderStyle = 'dashed',jsbtn.style.borderStyle = 'solid',htmlbtn.style.borderStyle = 'solid'
    else(csscode.style.display = 'block')
        });
jsbtn.addEventListener('click', function() {
    if(jscode.style.display = 'none',jsbtn.style.borderStyle = 'dashed')
        jscode.style.display = 'block',csscode.style.display = 'none',htmlcode.style.display = 'none',jsbtn.style.borderStyle = 'dashed',cssbtn.style.borderStyle = 'solid',htmlbtn.style.borderStyle = 'solid'
    else(jscode.style.display = 'block')
        });


function run(){
    let htmlcoding = document.querySelector("#html-coding").value;
    let csscoding = document.querySelector("#css-coding").value;
    let jscoding = document.querySelector("#js-coding").value;
    let output = document.querySelector("#output-area");

    output.contentDocument.body.innerHTML = htmlcoding + "<style>"+csscoding+"</style>";
    output.contentWindow.eval(jscoding);
}