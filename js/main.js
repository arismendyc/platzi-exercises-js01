const d = document;

//first challenge

const helloWorldInput = d.getElementById('helloWorldInput');
const helloWorldDone = d.getElementById('helloWorldDone');
const helloWorldResult = d.getElementById('helloWorldResult');

const helloWorld = () => {
    helloWorldDone.addEventListener('click', ()=> {
        helloWorldResult.innerHTML = `Hola, ${helloWorldInput.value}`;
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
        secondResult.innerHTML = `Hola, ${nameInput.value} ${surnameInput.value}`;
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

