//--------- game display mouse hover ---------//

let gameDivs = document.querySelectorAll(".proj-div > div");
let gamePs = document.querySelectorAll(".proj-div p");
let gameVids = document.querySelectorAll("video");
let gameHs = document.querySelectorAll("h3");

for (let i = 0; i < gameDivs.length; i++){
    let div = gameDivs[i];
    let vid = gameVids[i];
    let h = gameHs[i];

    // PAGE LOAD (disable video) //
    window.addEventListener("load", function() {
        vid.pause();
    });

    // MOUSE IN //
    div.addEventListener("mouseover", function(){
        //add if statements for padding flexibility
        this.style.transition = "all 1.5s";
        this.style.backgroundColor = "var(--tertiary)";
        this.style.padding = "50px";
        this.style.paddingLeft = "20px";

        vid.style.transition = "all 1.5s";
        vid.play();
        vid.style.maxWidth = "100%";

    });

    // MOUSE OUT //
    div.addEventListener("mouseout", function(){
        this.style.transition = "all 1.5s";
        this.style.backgroundColor = "var(--dgray)";
        this.style.padding = "30px";

        vid.pause();
        vid.style.maxWidth = "90%";
    });

    // DOUBLE CLICK PAGE REDIRECTION //
    div.addEventListener("dblclick", function(){
        console.log("double clicked");
        let text = h.innerHTML.toLowerCase();
        let words = text.split(" ");
        let word = words[words.length - 1];
        let destination = "highlights.html#" + word;
        window.location.href = destination;
    });
}