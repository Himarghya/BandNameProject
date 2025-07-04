const GenerateName = document.getElementById("GenerateName");
GenerateName.addEventListener("click" , () =>{
    GenerateName.classList.add("Animation");
    setTimeout(()=>{
        GenerateName.classList.remove("Animation")
    },100);
    sound();
})

function sound(){
    var audio = new Audio("./public/Click Sound .mp3");
    audio.play();
}