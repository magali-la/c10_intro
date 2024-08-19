// color list

let arr = ['#B0DB43', '#12EAEA', '#BCE7FD', '#FF5733', '#FF33F6', '#F3FF33', '#FF8C33','#CAD178', '#754F5B', '#1C448E', '#6461A0', '#DE4D86', '#F29CA3', '#F29CA3', '#FA7E61', '#F00699', '#018E42', '#F7D002', '#81E979', '#98473E', '#754668'];

// 1. make function to choose random colors from color list array / return will give back the HEX codes
function generateBG() {
    return arr[(Math.floor(Math.random() * arr.length))]

};


// 2. Make history log AND post it onto an HTML element

// make an empty list/array to host the log in. I put the base color already so this is 1. on the list and shows on the page already, the functions will add the rest
let colorLog = ['#FFFFFF'];


// 3. link button & color log on HTML side to whatever functions follow in JS by defining them

let buttonOnPage = document.getElementById ("btn");
let colorLogOnPage = document.getElementById("logDiv");

// 4. create the actual events & functions

buttonOnPage.addEventListener("click", () => {
    let bgColor = generateBG();
    document.body.style.backgroundColor = bgColor;
    
    // this pushes the generated bgColor from each click into the empty object/list colorLog behind the scenes. push adds to the end of the list
    colorLog.push(bgColor);

    // innerHTML shows the text within whatever element has been linked to colorLogOnPage (so the div with the list). it's empty so the log starts empty for the purpose of this color generator. (except the FFFFFF)
    colorLogOnPage.innerHTML = ''

    // basically JS needs to know what to do for each data point added to the colorLog array. so basically it needs to identify each data as hexCode. then it needs to represent each of these 'hexCode' data points as a ListItemOnPage, which needs to then be defined as a created element. the text is going to be hexCode simply. Then the color log in HTML will be appended to show each listItemOnPage
    colorLog.forEach(hexCode => {
        let listItemOnPage = document.createElement('li');
        listItemOnPage.textContent = hexCode;
        colorLogOnPage.appendChild(listItemOnPage);
    })
});


// this logs for inspection
console.log(colorLog);
