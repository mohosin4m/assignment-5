// function buyTickets(){
//     const anannaSecton = document.getElementById('ananna-seat')
//         //   anannaSecton.classList.add('hidden')

//         const anannaGround = document.getElementById('ananna-ground')
//               anannaGround.classList
// }













// function buyTickets(){
//     hideElementById('ananna-seat')
//     showElementById('ananna-ground')
// }

// function buyTickets(){
//     // showElementById('ananna-ground')
// }























































// const seat = document.getElementById('seat').innerText
// console.log(typeof seat)
























const allBtn = document.getElementsByClassName('add-btn')

for(btn of allBtn){
    btn.addEventListener('click', function(event){
        const sit = event.target.parentNode.childNodes[1].innerText
        const sitContainer = document.getElementById('selected-seat-container')

        const div = document.createElement('div');

        const p = document.createElement('p')
        p.innerText = sit;
        div.appendChild(p)
        sitContainer.appendChild(div)
    })
}



function updateTotal(value){
    const total = getConvertedValue('total')
}





function getConvertedValue(id){
    const seat = document.getElementById(id).innerText
    const convertNum = parseInt(seat)
    // console.log(convertNum)
    return convertNum;
}

