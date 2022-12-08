let randomNumber1 = Math.random() * 6 + 1
randomNumber1 = Math.floor(randomNumber1)


document.querySelector(".img1").setAttribute("src", `images/dice${randomNumber1}.png`)


let randomNumber2 = Math.random() * 6 + 1
randomNumber2 = Math.floor(randomNumber2)


document.querySelector(".img2").setAttribute("src", `images/dice${randomNumber2}.png`)


if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerText = "Player 1 wins"
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerText = "Player 2 wins"
}else{
    document.querySelector("h1").innerText = "Draw!"
}
