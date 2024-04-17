const form = document.querySelector("form");

form.addEventListener("submit", function(e){
    e.preventDefault();

    const height = parseFloat(document.querySelector("#height").value);
    const weight = parseFloat(document.querySelector("#weight").value);
    const result = (document.querySelector("#result"));
    const weightGuide = (document.querySelector("#weightGuide"));

    if(height === "" || height <= 0 || isNaN(height)){
        result.innerHTML = `Please give a valid Height ${height}`;
    } else if(weight === "" || weight <= 0 || isNaN(weight)){
        result.innerHTML = `Please give a valid Weight ${weight}`;
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);

        result.innerHTML = `BMI = <span>${bmi}</span>`;
        
        
        if(bmi <= 18.6){
            weightGuide.innerHTML = `You are under weight ${bmi}`
        } else if( bmi <= 24.9){
            weightGuide.innerHTML = `You are in noraml range ${bmi}`
        } else {
            weightGuide.innerHTML = `You are over weight ${bmi}`
        }
        
    }

})