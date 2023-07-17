const slots = document.querySelectorAll('.slot')

let turn = 'X'
const cturn = () => {return turn === 'X' ? 'O':'X'}
let isGood = true;
const checkWin = () => {
    /* 
        Horizontal 
    */
    if(slots[0].innerHTML == slots[1].innerHTML && slots[1].innerHTML == slots[2].innerHTML && slots[0].innerHTML != ''){return [true,slots[0].innerHTML]}
    else if(slots[3].innerHTML == slots[4].innerHTML && slots[4].innerHTML == slots[5].innerHTML && slots[3].innerHTML != ''){return [true,slots[3].innerHTML]}
    else if(slots[6].innerHTML == slots[7].innerHTML && slots[7].innerHTML == slots[8].innerHTML && slots[6].innerHTML != ''){return [true,slots[6].innerHTML]}
    
    /* 
        Verticle 
    */
    else if(slots[0].innerHTML == slots[3].innerHTML && slots[3].innerHTML == slots[6].innerHTML && slots[0].innerHTML != ''){return [true,slots[0].innerHTML]}
    else if(slots[1].innerHTML == slots[4].innerHTML && slots[4].innerHTML == slots[7].innerHTML && slots[1].innerHTML != ''){return [true,slots[1].innerHTML]}
    else if(slots[2].innerHTML == slots[5].innerHTML && slots[5].innerHTML == slots[8].innerHTML && slots[2].innerHTML != ''){return [true,slots[2].innerHTML]}

    /* 
        Diagonal 
    */
    else if(slots[0].innerHTML == slots[4].innerHTML && slots[4].innerHTML == slots[8].innerHTML && slots[0].innerHTML != ''){return [true,slots[0].innerHTML]}
    else if(slots[2].innerHTML == slots[4].innerHTML && slots[4].innerHTML == slots[6].innerHTML && slots[2].innerHTML != ''){return [true,slots[2].innerHTML]}

    /* 
        Draw 
    */
   else if(slots[0].innerHTML != '' && slots[1].innerHTML != '' && slots[2].innerHTML != '' &&
         slots[3].innerHTML != '' && slots[4].innerHTML != '' && slots[5].innerHTML != '' && slots[6].innerHTML != '' &&
         slots[7].innerHTML != '' && slots[8].innerHTML != ''){return [true,'No one']}
    
    /*
         Deafault 
    */
    return [false]
    
}


slots.forEach(slot => {
    slot.addEventListener('click',() => {
        if(isGood){
            if(slot.innerHTML != '')return
            slot.innerHTML =turn
            turn = cturn()
            document.querySelector('.turn').innerHTML = `Turn of ${turn}`

            check = checkWin()
            console.log(check)
            if(check[0]){
                document.querySelector('.turn').innerHTML = `${check[1]} Wins`
                isGood = false;
        }}
    })
})


document.querySelector('.reset').addEventListener('click',()=>{
    slots.forEach(slot =>  {
        slot.innerHTML = ''
        turn = 'X'
        isGood = true
        document.querySelector('.turn').innerHTML = `Turn of ${turn}`
    })
})