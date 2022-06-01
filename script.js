let output =    document.getElementById("output"); 

document.getElementById("compile").addEventListener('click', () => {
   let html = document.getElementById("inputh").value;
   console.log(html);
   output.innerHTML = html;
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
