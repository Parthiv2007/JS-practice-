const button = document.querySelector(".genButton");
const input = document.querySelector("#pinInput");


button.addEventListener('click',()=> {
    input.value = generatepin();
})

function generatepin(){
    let genpin = "";

    genpin =  Math.floor(Math.random() * 10000);
    return genpin;
}
