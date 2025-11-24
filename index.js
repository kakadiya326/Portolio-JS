import { myData, eduData, skillData, projectData, achievementData } from './storage.js';





const menuBtn = document.getElementById("mobile-menu"); //Menu toggle phone view
menuBtn.addEventListener("click", function () {
    nav.classList.toggle("open");
});

//------------------------

// Mydata Code

//------------------------

const myDataObj = myData;

const nav = document.querySelector("nav"); // Navbar Tag
let myDatacontainer = document.querySelector('.mydata');  //Mydata

let myDataH1 = document.createElement('h1');
let myDataH3 = document.createElement('h3');
let myDataP = document.createElement('p');

myDataH1.innerText = myDataObj.name;
myDataH3.innerText = myDataObj.title;
myDataP.innerText = myDataObj.description;

myDatacontainer.append(myDataH1, myDataH3, myDataP);

//------------------------

// Education Code

//------------------------

let eduContainer = document.querySelector('.education');   //Main Container

//Education card using object
eduData.forEach(data => {
    eduContainer.appendChild(createEducationCard(data));   // append card to Main container
});

function createEducationCard(data) {
    const eduCard = document.createElement("div"); //Education Card
    eduCard.className = "eduCard";
    eduCard.setAttribute("data-aos", "fade-up");
    eduCard.setAttribute("data-aos-duration", "1000");

    eduCard.innerHTML = `
        <h2 class="eduTitle" >${data.eduTitle}</h2>
        <div class="uniName" >${data.uniName}</div>
        <div class="per" >${data.per < 10 ? `CGPA : ${data.per}` : `Percentage : ${data.per}`}</div>
    `;


    return eduCard
}


//------------------------

// Skills Code

//------------------------

let skillContainer = document.getElementsByClassName('softSkills')[0]

var softObj = skillData.softSkills

softObj.forEach(data => {
    skillContainer.append(createSkillCard(data.title, data.points));
})

let proSkillContainer = document.getElementsByClassName('proSkills')[0]

var proObj = skillData.proSkills
proObj.forEach(data => {
    proSkillContainer.append(createSkillCard(data.title, data.points));
});

function createSkillCard(title, points) {
    // Main card
    const card = document.createElement("div");
    card.className = "skillCard";
    card.setAttribute("data-aos", "zoom-in-right");

    // Title
    const h2 = document.createElement("h2");
    h2.className = "skillTitle";
    h2.textContent = title;

    // Description wrapper
    const descrip = document.createElement("div");
    descrip.className = "skillDescrip";

    // UL
    const ul = document.createElement("ul");
    ul.setAttribute("type", "disc");

    // Create li points
    points.forEach(text => {
        const li = document.createElement("li");
        li.textContent = text;
        ul.appendChild(li);
    });

    // Append
    descrip.appendChild(ul);
    card.appendChild(h2);
    card.appendChild(descrip);

    return card;
}

//------------------------

// Project Code

//------------------------

let projectContainer = document.getElementsByClassName('projects')[0];

const projectDataObj = projectData;

projectDataObj.forEach((data) => {

    let proCard = document.createElement('div');
    proCard.className = 'projectCard';
    proCard.setAttribute('data-aos', 'flip-up');


    let proTitle = document.createElement('h2');
    proTitle.className = 'projectTitle';
    proTitle.innerText = data.title;

    let proDesc = document.createElement('div');
    proDesc.className = 'projectDescrip';

    let ul = document.createElement('ul');
    data.features.forEach(point => {
        let li = document.createElement("li");
        li.textContent = point;
        ul.appendChild(li);

    });

    proDesc.append(ul);
    proCard.append(proTitle, proDesc)

    projectContainer.append(proCard)
});


const achieData = achievementData;
let achievementContainer = document.getElementsByClassName('achievements')[0];

achieData.forEach(data => {
    let achieCards = document.createElement('div');
    achieCards.className = 'achieCard';
    achieCards.setAttribute('data-aos', 'flip-right');
    achieCards.setAttribute('data-aos-duration', '900');
    achieCards.style.backgroundImage = `url('${data.url}')`
    achieCards.innerHTML = `
        <h2 class="achieTitle">${data.title}</h2>
        <p>${data.description}</p>
    `;
    achievementContainer.append(achieCards);

});
