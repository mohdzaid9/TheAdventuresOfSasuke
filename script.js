let scoreCounter = 0
let scoreFlag = true
document.onkeydown= function(e){
    console.log('keycode:',e.keyCode)
    if(e.keyCode==38 || e.keyCode==32 || e.keyCode==87){
       let player =document.querySelector('.player')
        player.classList.add('animatePlayer')
        setTimeout(() => {
            player.classList.remove('animatePlayer')
        }, 700);
    }
    else if(e.keyCode==39 || e.keyCode==68){
        let player =document.querySelector('.player')
         let px = parseInt(window.getComputedStyle(player,null).getPropertyValue('left'))
        player.style.left = px+200+'px'
     }
     else if(e.keyCode==37 || e.keyCode==65){
        let player =document.querySelector('.player')
         let px = parseInt(window.getComputedStyle(player,null).getPropertyValue('left'))
        player.style.left = px-200+'px'
     }
}
setInterval(()=>{
    let player =document.querySelector('.player')
    let gameOver =document.querySelector('.gameOver')
    let obstacle =document.querySelector('.obstacle')
  
    let px = parseFloat(window.getComputedStyle(player,null).getPropertyValue('left'))
    let py = parseFloat(window.getComputedStyle(player,null).getPropertyValue('top'))

    let ox = parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('left'))
    let oy = parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('top'))
    
    let offsetX =Math.abs(px-ox)
    let offsetY = Math.abs(py-oy)
    

    
    console.log(offsetX,offsetY)
    if(offsetX<100 && offsetY<150){
        gameOver.style.visibility='visible'
        obstacle.classList.remove('animateObstacle')
        
    }
    else if(scoreFlag && offsetX<100){
        let score = document.querySelector('.score')
        score.innerHTML = `score : ${scoreCounter++}`
        scoreFlag=false
        setInterval(()=>{
            scoreFlag=true
        },10)
    }
    
},100)

//Theme Functionality

let btn = document.getElementById('themeBtn')
let light = true
btn.addEventListener('click',()=>{
    if(light){
        document.body.classList.add('darkTheme')
        themeIcon.classList.remove('fa-moon')
        themeIcon.classList.add('fa-sun')
        light=false
    }else{
        themeIcon.classList.remove('fa-sun')
    themeIcon.classList.add('fa-moon')
    document.body.classList.remove('darkTheme')
    document.body.classList.add('lightTheme')
    light = true
    }
})
