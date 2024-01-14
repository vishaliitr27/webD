const inc= document.getElementById("increase");
const dec= document.getElementById("decrease");
const res= document.getElementById("reset");
const count= document.querySelector("#counter")


inc.addEventListener("click",function increase(){
    let x = parseInt(count.textContent);
    x+=1;
    count.textContent=x;
})
dec.addEventListener("click",function decrease(){
    let x = parseInt(count.textContent);
    x-=1;
    count.textContent=x;
})
res.addEventListener("click", function reset(){
    count.textContent = 0;
})