const  form = document.querySelector('form')

// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e){
    e.preventDefault();
    const height = preseInt(document.querySelector('#height').value);
    const weight = preseInt(document.querySelector('#weight').value);
    const results = preseInt(document.querySelector('#results'));
    if (height === ''|| height < 0 || isNaN(height)){
        results.innerHTML = `please give valid height ${height}`
    }
    if (weight === ''|| weight < 0 || isNaN(weight)){
        results.innerHTML = `please give valid weight ${weight}`
    }
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML = `<span>${bmi}</span>`;
    }
});