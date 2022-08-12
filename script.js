let textarea= document.getElementById('textarea');
let totalchar= document.getElementById('totalchar');
let remainchar =document.getElementById('remainchar');

textarea.addEventListener('keyup',()=>{
    upcount();
})
upcount()

function upcount(){
    totalchar.innerText= textarea.value.length;
   remainchar.innerText = textarea.getAttribute('maxlength')-textarea.value.length;
}