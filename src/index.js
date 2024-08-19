
let buttonOnPage = document.getElementById ("btn");

buttonOnPage.addEventListener("click", () => {
    let bgColor = generateBG();
    document.body.style.backgroundColor = bgColor;
    colorLog.push(bgColor);
    console.log(colorLog);

    const listElement = document.getElementById("myLogs")
    listElement.innerHTML = ''
    colorLog.forEach(color => {
        const listItem = document.createElement('li')
        listItem.textContent = color
        listElement.appendChild(listItem)
    })
});

function generateBG() {
    return arr[(Math.floor(Math.random() * arr.length))]
};

let arr = ['#B0DB43', '#12EAEA', '#BCE7FD', '#FF5733', '#FF33F6', '#F3FF33', '#FF8C33','#CAD178', '#754F5B', '#1C448E', '#6461A0', '#DE4D86', '#F29CA3', '#F29CA3', '#FA7E61', '#F00699', '#018E42', '#F7D002', '#81E979', '#98473E', '#754668'];

let colorLog = [];





// function generateColor() {
//     let color = '#';
//     for(let i=0; i < 6; i++) {
//         color += randomColor[Math.floor(Math.random() * 16)];
//         console.log(color);

//     }
//     return color;
// }

// buttonOnPage.addEventListener ('click', ()=> {
//     let bgColor = generateColor();
//     document.body.style.backgroundColor = bgColor;


// });

// end of functioning random generator


// let buttonOnPage = document.getElementById ("btn");

// let colors =['#005F74']
// let colors = ['#F09BG2']

// buttonOnPage.addEventListener ('click', ()=> {
//         const random += "#" + Math.floor(Math.random() * 10 )
//         let backgroundColor = generateColor();
//         document.body.style.backgroundColor = bgColor;

// }

// buttonOnPage.addEventListener('click',console.log("test"))

// uran

// let arr = ['#B0DB43', '#12EAEA', '#BCE7FD'];

// for (let i=0; i < arr.length; i++) {
// console.log (randomColor);
//     colors.push(randomColor);

// }

// arr.map((item)=> {});



// function generateColor () {

//     // choose random color from arr
//     const totalColors = arr.length
//     const randomIndex = Math.floor(Math.random()*3)

//     document.body.style.backgroundColor = arr[randomIndex];


// }

