const board = document.querySelector('#board')
const colors = ['red', 'blue', 'green', 'yellow', 'pink']
const SQUARES_NUMBER = 500

const clearBtn = document.querySelector('#clearBtn')


for(let i = 0; i < SQUARES_NUMBER; i++){
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))

    square.addEventListener('mouseleave', () => removeColor(square))

   /* clearBtn.addEventListener("click", () =>{
        square.classList.remove('addColor')
    })
*/
    board.append(square)
}


function setColor(element){
    const color = getRandomColor()
    element.style.backgroundColor = color
   // element.style.boxShadow = `0 0 2px ${color}, 00 5px 3px 2px ${color}`
}

function  removeColor(element){
    element.style.backgroundColor = "#1d1d1d"
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor(){
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}



/*for(let i = 0; i < SQUARES_NUMBER; i++){
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => {
        
        square.classList.add('addColor')
    })
    clearBtn.addEventListener("click", () =>{
        
        square.classList.remove('addColor')
    })
    board.append(square)
}

*/