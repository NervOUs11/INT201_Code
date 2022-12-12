const msg= document.querySelector('#message') 
const display = document.querySelector('p') 

// // dynamic
// msg.addEventListener('input', function () {
//      display.textContent = msg.value
// })

// press enter first
msg.addEventListener('keypress', (event)=>{
     if(event.key === 'Enter'){
          display.textContent = msg.value
     }
})

const H1 = document.createElement('h1')
H1.textContent = 'This is h1'
document.body.appendChild(H1)
