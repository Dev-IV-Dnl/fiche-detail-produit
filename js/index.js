let imgP = document.querySelector(".imgPrincipale");
let imgMin1 = document.querySelector(".miniature1");
let imgMin2 = document.querySelector(".miniature2");
let imgMin3 = document.querySelector(".miniature3");
let imgMin4 = document.querySelector(".miniature4");
let allMiniatures = [imgMin1, imgMin2, imgMin3, imgMin4];

for (let i in allMiniatures) {
    allMiniatures[i].addEventListener("click", () => {
        if (allMiniatures[i] == imgMin1) {
            imgP.style.backgroundImage = 'url("./img/yam2.jpg")';
        } else if (allMiniatures[i] == imgMin2) {
            imgP.style.backgroundImage = 'url("./img/yam3.jpg")';
        } else if (allMiniatures[i] == imgMin3) {
            imgP.style.backgroundImage = 'url("./img/yam4.jpg")';
        } else if (allMiniatures[i] == imgMin4) {
            imgP.style.backgroundImage = 'url("./img/yam5.jpg")';
        }
    })
}