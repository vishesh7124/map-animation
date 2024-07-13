const card = document.getElementById("card")
const folds = document.getElementsByClassName("fold")
const transformSkew =(fold,deg)=>{
    fold.style.transform = `skewY(${deg}deg)`
}
const closeMap = document.getElementById("closeMap")
var r = document.querySelector(':root');
let zoom =0

card.addEventListener("click",()=>{
    zoom =1
    for (let i = 0; i < folds.length; i++) {
        if(i%2==0){
            card.style.transform ="scale(3.5)"
            transformSkew(folds[i],0)
            folds[i].style.filter = "brightness(1)"
        }
        else {
            transformSkew(folds[i],0)
            folds[i].style.filter = "brightness(1)"
        }
    }
    r.style.setProperty('--bcolor', 'transparent');
    setTimeout(() => {
        closeMap.style.display = "block"
        
    }, 500);
})
card.addEventListener("mouseenter",()=>{
    if(!zoom){
        r.style.setProperty('--bcolor', 'white');
        card.style.transform = "scale(1.2)"
    }
})

card.addEventListener("mouseleave",()=>{
    r.style.setProperty('--bcolor', 'transparent');
    if(!zoom){
        card.style.transform = "scale(1)"
        
    }
})

document.body.addEventListener("keydown", (e)=>{
    if(e.key=="Escape"){
        zoom=0
        for (let i = 0; i < folds.length; i++) {
            if(i%2==0){
                card.style.transform ="scale(1)"
                transformSkew(folds[i],-45)
                folds[i].style.filter = "brightness(1.25)"
            }
            else {
                transformSkew(folds[i],45)
                folds[i].style.filter = "brightness(0.75)"
            }
        }
        closeMap.style.display = "none"
    }
    
})

closeMap.addEventListener("click",()=>{
    for (let i = 0; i < folds.length; i++) {
        if(i%2==0){
            card.style.transform ="scale(1)"
            transformSkew(folds[i],-45)
            folds[i].style.filter = "brightness(1.25)"
        }
        else {
            transformSkew(folds[i],45)
            folds[i].style.filter = "brightness(0.75)"
        }
    }
    setTimeout(() => {
        zoom =0
    }, 500);
    closeMap.style.display = "none"
})


