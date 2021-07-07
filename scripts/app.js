const backImg = document.getElementById("backImg")
const cont = document.querySelector("body")
//Height devided by given number. If you want to change image every quarter of the page scrolled - give 4 (1/4)
const perc = cont.getBoundingClientRect().height / 10

//Sort order
// const imgs = [
//     "straight",
//     "lookingUp",
//     "lookingDown",
//     "slightSmile",
//     "laugh",
//     "worried",
//     "slightFrown",
//     "slightSad",
//     "devo",
// ]

const imgs = [
    "wineimg-00084",
    "wineimg-00155",
    "wineimg-00157",
    "wineimg-00178",
    "wineimg-00211",
    "wineimg-00251",
    "wineimg-00270",
    "wineimg-00271",
    "wineimg-00427",
]

cont.onscroll = e => {
    //See if scroll height is divisible by scroll percentage (if it is a multiple of 1/10, 1/4 etc)
    if(Math.abs(window.scrollY % perc) <= 50){
        //Apply the img source given how many times scrollY is divisable pointing to array order
        backImg.src = `assets/${
            imgs[Math.floor(window.scrollY / perc)]
        }.png`
    }
}

//We could attatch the percentage to a container so that when we scroll to the end of the container it no longer changes.