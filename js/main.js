const d = document;

const helloWorldInput = d.getElementById('helloWorldInput');
const helloWorldDone = d.getElementById('helloWorldDone');
const helloWorldResult = d.getElementById('helloWorldResult');

const secondDone = d.getElementById('secondDone');
const secondResult = d.getElementById('secondResult');
const nameInput = d.getElementById('nameInput');
const surnameInput = d.getElementById('surnameInput');

const helloWorld = () => {
    helloWorldDone.addEventListener('click', ()=> {
        helloWorldResult.innerHTML = 'Hola, ' + helloWorldInput.value;
    });
};

helloWorld();

const secondChallenge = () => {
    secondDone.addEventListener('click', ()=> {
        secondResult.innerHTML = 'Hola, ' + nameInput.value + ' ' + surnameInput.value;
    });
};

secondChallenge();