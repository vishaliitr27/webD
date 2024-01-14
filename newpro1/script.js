const rect = document.getElementById("btn");
const colors = ['1','2','3','4','5','6','7','8','9','0',"A",'B','C','D','E'];
rect.addEventListener("click", function changecolor(){
    const bg = document.querySelector("body")
    let color="#";
    for(let i = 0;i<6;i++){
        color += colors[getrandomno()]
    }
    document.body.style.backgroundColor = color;
});
function getrandomno(){
    return Math.floor(Math.random() * colors.length);
}