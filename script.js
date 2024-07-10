card = document.getElementById("card")
folds = document.getElementsByClassName("fold")
console.log(folds)


card.addEventListener("click",()=>{
    for (let i = 0; i < folds.length; i++) {
        if(i%2==0){
            card.style.transform ="scale(3.5)"
            // transformSkew(folds[i],-15)
            setTimeout(transformSkew(folds[i],0),500)
            // setTimeout(transformSkew(folds[i],0),1500)
            folds[i].style.filter = "brightness(1)"
        }
        else {
            // transformSkew(folds[i],15)
            setTimeout(transformSkew(folds[i],0),500)
            // setTime      out(transformSkew(folds[i],0),1500)
            folds[i].style.filter = "brightness(1)"
        }
    }
})

const transformSkew =(fold,deg)=>{
    fold.style.transform = `skewY(${deg})`
    console.log(deg)
}
