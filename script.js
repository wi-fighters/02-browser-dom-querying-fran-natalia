// 
const body = document.getElementsByTagName("body")[0];
const h1 = document.getElementsByClassName("title")[0];
const category = document.getElementsByClassName("category");
const foodCategory = document.getElementsByClassName("food-category");
const main = document.getElementsByClassName("main");
const warning = document.getElementById("warning");
const allergyInfo = document.getElementsByClassName("allergy-info");
const allergyWarning = document.getElementsByClassName("allergy-warning")[0];
const footer = document.getElementsByClassName("footer")[0];
const foodDesc = document.getElementsByClassName("food-desc");

// const category = document.querySelectorAll(".category").forEach(function (elem) {
//     elem.style.color = "blue";
// });

// color generator
const colorGenerator = () => {
    let o = Math.round;
    let r = Math.random;
    let s = 255;
    return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + r().toFixed(1) + ')';
};


window.onload = function () {
    body.style.fontFamily = "Impact,Charcoal,sans-serif";
    h1.style.textAlign = "center";

    // category
    for (let i = 0; i < category.length; i++) {
        category[i].style.fontStyle = "italic";
        category[i].style.color = "#391285";
    }

    // food category
    for (let i = 0; i < foodCategory.length; i++) {
        foodCategory[i].style.minWidth = "300px";
        // foodCategory[i].style.padding = "5px 0px";
        foodCategory[i].style.backgroundColor = colorGenerator();
    }

    // main
    main[0].style.display = "flex";
    main[0].style.flexWrap = "wrap";
    main[0].style.justifyContent = "space-around";

    // warning
    warning.style.fontSize = "2rem";
    warning.style.color = "#ff0000";

    // allergy info
    for (let i = 0; i < allergyInfo.length; i++) {
        if (i % 2 !== 0) {
            allergyInfo[i].style.backgroundColor = "#88ccec";
            allergyInfo[i].style.width = "400px";
        }
    }

    // allergy warning
    allergyWarning.style.display = "flex";
    allergyWarning.style.flexDirection = "column";
    allergyWarning.style.alignItems = "center";

    // footer
    footer.style.display = "flex";
    footer.style.justifyContent = "center";

    for (let i = 0; i < foodDesc.length; i++) {
        foodDesc[i].style.border = "2px solid black";
        foodDesc[i].style.borderRadius = "50%";
        foodDesc[i].style.width = "100px";
        foodDesc[i].style.height = "100px";
        foodDesc[i].style.margin = "50px";
        foodDesc[i].style.display = "flex";
        foodDesc[i].style.justifyContent = "center";
        foodDesc[i].style.alignItems = "center";


    }

}




console.log(allergyInfo);
