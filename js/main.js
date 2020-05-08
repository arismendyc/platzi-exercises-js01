const d = document;

//first challenge

const helloWorldInput = d.getElementById('helloWorldInput');
const helloWorldDone = d.getElementById('helloWorldDone');
const helloWorldResult = d.getElementById('helloWorldResult');

const helloWorld = () => {
    helloWorldDone.addEventListener('click', ()=> {
        helloWorldResult.innerHTML = `Hello, ${helloWorldInput.value}`;
    });
};

helloWorld();

//const challenge

const secondDone = d.getElementById('secondDone');
const secondResult = d.getElementById('secondResult');
const nameInput = d.getElementById('nameInput');
const surnameInput = d.getElementById('surnameInput');

const secondChallenge = () => {
    secondDone.addEventListener('click', ()=> {
        secondResult.innerHTML = `Hello, ${nameInput.value} ${surnameInput.value}`;
    });
};

secondChallenge();

// third challenge

const thirdResult = d.getElementById('thirdResult');
var coursesCategories = ["Developing","Design","Marketing","Business","Audiovisual production","Profesional development"];

const thirdChallenge = (array) => {
    for (let i = 0; i < array.length; i++) {
        let categorie = `<li>${array[i]}</li>`
        thirdResult.insertAdjacentHTML('beforeend', categorie);
    }
}

thirdChallenge(coursesCategories);

//fourth challenge

const addNumberA = d.getElementById('addNumberA');
const addNumberB = d.getElementById('addNumberB');
const addButton = d.getElementById('addButton');
const addResult = d.getElementById('addResult');

const fourthButton = () => {
    addButton.addEventListener('click', fourthChallenge);
};

const fourthChallenge = () =>{
    let a = parseFloat(addNumberA.value);
    let b = parseFloat(addNumberB.value);
    // console.log(a,b);

    if (isNaN(a) && isNaN(b)) {addResult.innerHTML = 'None is a number!';}
    else if (isNaN(a)){addResult.innerHTML = '"a" is not a number!';}
    else if (isNaN(b)){addResult.innerHTML = '"b" is not a number!';}
    else {
        let result = a+b;
        addResult.innerHTML = result.toFixed(2);
    }
};

fourthButton();

//fifth challenge

const fifthNumberA = d.getElementById('fifthNumberA');
const fifthNumberB = d.getElementById('fifthNumberB');
const fifthNumberC = d.getElementById('fifthNumberC');
const fifthButton = d.getElementById('fifthButton');
const fifthResult = d.getElementById('fifthResult');

const fifthButtonClick = () => {
    fifthButton.addEventListener('click', fifthChallenge);
};

const fifthChallenge = () =>{
    let a = parseFloat(fifthNumberA.value);
    let b = parseFloat(fifthNumberB.value);
    let c = parseFloat(fifthNumberC.value);

    // console.log(a,b,c);

    if (isNaN(a) && isNaN(b) && isNaN(c)) {fifthResult.innerHTML = 'None is a number!';}
    else if (isNaN(a) && isNaN(b)){fifthResult.innerHTML = '"a" and "b" is not a number!';}
    else if (isNaN(a) && isNaN(c)){fifthResult.innerHTML = '"a" and "c" is not a number!';}
    else if (isNaN(c) && isNaN(b)){fifthResult.innerHTML = '"b" and "c" is not a number!';}
    else if (isNaN(a)){fifthResult.innerHTML = '"a" is not a number!';}
    else if (isNaN(b)){fifthResult.innerHTML = '"b" is not a number!';}
    else if (isNaN(c)){fifthResult.innerHTML = '"c" is not a number!';}
    else {
        let result = (a+b)*c;
        fifthResult.innerHTML = result.toFixed(2);
    }
};

fifthButtonClick();