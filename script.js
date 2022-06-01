let htmlEditor = document.getElementById("inputh");
let cssEditor = document.getElementById("inputc");
let jsEditor = document.getElementById("inputj");

let editors = [htmlEditor, cssEditor, jsEditor];

let currentEditor = htmlEditor;

document.getElementById("compile").addEventListener('click', () => {
    let html = htmlEditor.value;
    let css = cssEditor.value;
    let js = jsEditor.value;
    let startIndex = html.indexOf("<body>")+6;
    let endIndex = html.indexOf("</body>");
    html = html.slice(startIndex,endIndex);
    let outputDiv=document.getElementById("output");
    outputDiv.innerHTML=html+"<style>"+css+"</style>";
    // document.getElementById("scr").innerHTML = js;
    let scriptTag = document.createElement("script");
    document.body.append(scriptTag);
    console.log(scriptTag);
    scriptTag.innerHTML = js;
    
    
});


let btns = document.querySelectorAll('.btn');
let activeBtn = btns[0];

function clearAll(btn, editorIndex){
    for(let i of btns){
        if(i!==btn){
            i.classList.remove('active');
        }
    }

    for(let j=0; j<3; j++){
        if(j !== editorIndex){
            editors[j].style.display = 'none';
        }
    }
}

for(let i of btns){
    i.addEventListener('click', () => {
        i.classList.add('active');
        
        let caseConstant = i.getAttribute('data-editor');
        console.log(caseConstant);


        editors[parseInt(caseConstant)].style.display = "block";
                
        clearAll(i, parseInt(caseConstant));

    })
}
