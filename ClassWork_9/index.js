function getInputTemperature(){
    const temperature = document.getElementById("temperatureInput").value ;
    /* const initialTemp ={
        temperature : temperature
    } */
    return temperature ;
    };

    function celsiusToFahrenheit (inputTemperature){
        return inputTemperature *9/5 + 32 ;
       
       };

    function createOutput(fahrenheitTemperature){
        const finalTemperature = `<div>Temperature in Fahrenheit is ${fahrenheitTemperature} f</div>`;
        return finalTemperature;
    };

    function outputHandler(){
        const inputTemperature = getInputTemperature();
        const fahrenheitTemperature = celsiusToFahrenheit(inputTemperature);
        console.log(fahrenheitTemperature );
        const result = document.getElementById("result");
        result.innerHTML = createOutput(fahrenheitTemperature) 
        

    };

    document.getElementById("submitBtn").addEventListener("click",outputHandler);