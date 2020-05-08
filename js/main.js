const d = document;
const helloWorldInput = d.getElementById('helloWorldInput');
const helloWorldDone = d.getElementById('helloWorldDone');
const helloWorldResult = d.getElementById('helloWorldResult');

const helloWorld = () => {
    helloWorldDone.addEventListener('click', ()=> {
        helloWorldResult.innerHTML = 'Hola, ' + helloWorldInput.value;
    });
}

helloWorld();