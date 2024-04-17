let gameDivs = document.querySelectorAll(".proj-div div");
let gamePs = document.querySelectorAll(".proj-div p")

for (let i = 0; i < gameDivs.length; i++){
    let div = gameDivs[i];
    let p = gamePs[i];
    div.addEventListener("mouseover", function(){
        //add if statements for padding flexibility
        div.style.transition = "all 1.5s";
        div.style.backgroundColor = "var(--gray2)";
        div.style.padding = "50px";

        p.style.transition = "all 0.8s";
        p.style.color = "black";
    });
    div.addEventListener("mouseout", function(){
        div.style.transition = "all 1.5s";
        div.style.backgroundColor = "var(--dgray)";
        div.style.padding = "30px";

        p.style.transition = "all 0.8s";
        p.style.color = "white";
    });
}