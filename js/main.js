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

//sixth challenge

const pizzaQuantity = d.getElementById('pizzaQuantity');
const pizzaEat = d.getElementById('pizzaEat');
const pizzaResult = d.getElementById('pizzaResult');
const pizzaButton = d.getElementById('pizzaButton');

const pizza = () => {
    pizzaButton.addEventListener('click', pizzaCalc);
}

const pizzaCalc = () => {
    let a = parseInt(pizzaQuantity.value);
    let b = parseInt(pizzaEat.value);

    if (isNaN(a) && isNaN(b)) {pizzaResult.innerHTML = 'None is a number!';}
    else if (isNaN(a)){pizzaResult.innerHTML = '"a" is not a number!';}
    else if (isNaN(b)){pizzaResult.innerHTML = '"b" is not a number!';}
    else if(a<b){
        pizzaResult.innerHTML = 'Impossible.';
    }
    else if(a>b){
        let result = a-b;
        pizzaResult.innerHTML = `You brought ${a} servings of pizza to the party. You and your friends ate ${b} servings. So you had ${result} servings left :).`
    }
    else if(a=b){
        let result = a-b;
        pizzaResult.innerHTML = `You brought ${a} servings of pizza to the party. You and your friends ate ${b} servings. Therefore, you had no servings left :(.`
    }
}

pizza();

//seventh challenge

const ageName = d.getElementById('ageName');
const ageCurrent = d.getElementById('ageCurrent');
const ageResult = d.getElementById('ageResult');
const ageButton = d.getElementById('ageButton');

const age = () => {ageButton.addEventListener('click', ageCalc);}

const ageCalc = () => {
    let name = ageName.value;
    let age = parseInt(ageCurrent.value);

    if (isNaN(age)) {
        ageResult.innerHTML = 'Please write your age in numbers.';
    }

    else {
        let pastAge = age-1;
        let futureAge = age+1;

        ageResult.innerHTML = `${name} last year you were ${pastAge} years old and next year you will be ${futureAge} years old.`
    }
}

age();

//eighth challenge

const payInput = d.getElementById('payInput');
const payPeople = d.getElementById('payPeople');
const payTipRate = d.getElementById('payTipRate');
const payTaxRate = d.getElementById('payTaxRate');
const payButton = d.getElementById('payButton');
const payResult = d.getElementById('payResult');

const pay = () => {payButton.addEventListener('click', payCalc)}

const payCalc = () => {
    let subtotal = parseFloat(payInput.value);
    let people = parseInt(payPeople.value);
    let tipRate = parseFloat(payTipRate.value);
    let taxRate = parseFloat(payTaxRate.value);

    if (isNaN(subtotal) || isNaN(people) || isNaN(tipRate) || isNaN(taxRate)) {
        payResult.innerHTML = "Please verify the data entered. If you don't want to add a tip or tax value, please put a 0.";
    }
    else if (!isNaN(subtotal) && !isNaN(people) && !isNaN(tipRate) && !isNaN(taxRate)){
        let tips = subtotal*(tipRate/100);
        let taxes = subtotal*(taxRate/100);
        let total = subtotal+tips+taxes;
        total = total.toFixed(2);
        let perCapita = total/people;
        perCapita = perCapita.toFixed(2);
        payResult.innerHTML = `Total to pay ${total}$.<br>Total per capita ${perCapita}$.`;
    }
}

pay();

//nineth challenge

const dayInput = d.getElementById('dayInput');
const dayResult = d.getElementById('dayResult');
const dayButton = d.getElementById('dayButton');

const day = () => {dayButton.addEventListener('click', dayCalc)};

const dayCalc = () => {
    let days = parseFloat(dayInput.value);

    if(isNaN(days)){
        dayResult.innerHTML = 'Please check the data entered.';
    } else{
        let hours = days*24;
        let seconds = hours*3600;
        dayResult.innerHTML = `${hours} hours.<br>${seconds} seconds.`;
    }
};

day();

//tenth challenge

const milesInput = d.getElementById('milesInput');
const milesButton = d.getElementById('milesButton');
const milesResult = d.getElementById('milesResult');

const miles = () => {milesButton.addEventListener('click', milesCalc)};

const milesCalc = () => {
    let a = parseFloat(milesInput.value);
    let rate = 1.609344;

    if (isNaN(a)) {
        milesResult.innerHTML = 'Please check the data entered.'
    } else {
        let result = a*rate;
        milesResult.innerHTML = `${result} km.`;
    }
};

miles();

//eleventh challenge

const eleventhA = d.getElementById('eleventhA')
const eleventhB = d.getElementById('eleventhB')
const eleventhButton = d.getElementById('eleventhButton')
const eleventhResult = d.getElementById('eleventhResult')

const eleventh = () => {eleventhButton.addEventListener('click', eleventhCalc)};

const less100 = (n) =>{
    if (n<100 && n>0) {return true;}
    else {return false}
}

const over1000 = (n) =>{
    if (n>1000) {return true;}
    else {return false}
}

const eleventhCalc = () => {
    let a = parseFloat(eleventhA.value);
    let b = parseFloat(eleventhB.value);
    if (isNaN(a) && isNaN(b)) {eleventhResult.innerHTML = 'None is a number!';}
    else if (isNaN(a)) {eleventhResult.innerHTML = '"a" is not a number!';}
    else if (isNaN(b)) {eleventhResult.innerHTML = '"b" is not a number!';}
    else if (!less100(a) && !over1000(b)){eleventhResult.innerHTML = 'None of them meet the conditions.';}
    else if (!less100(a)){eleventhResult.innerHTML = '"a" does not meet the conditions.';}
    else if (!over1000(b)){eleventhResult.innerHTML = '"b" does not meet the conditions.';}
    else if (less100(a) && over1000(b)){
        let result = b/a;
        eleventhResult.innerHTML = `${result} times.`;
    }
};

eleventh();