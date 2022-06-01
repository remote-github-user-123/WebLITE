document.getElementById("compile").addEventListener('click', () => {
    let html = document.getElementById("inputh").value;
    let css = document.getElementById("inputc").value;
    let js = document.getElementById("inputj").value;
    let startIndex = html.indexOf("<body>")+6;
    let endIndex = html.indexOf("</body>");
    html = html.slice(startIndex,endIndex);
    let outputDiv=document.getElementById("output");
    outputDiv.innerHTML=html+"<style>"+css+"</style>;
});


let btns = document.querySelectorAll('.btn');
let activeBtn = btns[0];

function clearAll(btn){
    for(let i of btns){
        if(i!==btn){
            i.classList.remove('active');
        }
    }
}

for(let i of btns){
    i.addEventListener('click', () => {
        i.classList.add('active');
        clearAll(i);
        

    })
}

