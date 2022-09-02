
function BMI() {
        let height = document.getElementById('height').value;
        let weight = document.getElementById('weight').value;
        let BMI = (weight/(height/100*height/100)).toFixed(1);
        let kcall = (66 + (13.7*weight) + (5*height) - (6.8*20)).toFixed(0);
        let kcal = (kcall/100).toFixed(0)*100;
        document.getElementById("output").innerHTML = "your bmi equals:"+   BMI + "<br>" + "To hold you wage you should eat : " + kcall + " kcal";
        if (BMI < 18.5) document.getElementById("comment").innerHTML = "You got Underweight";
        if (BMI >= 18.5 && BMI <= 25) document.getElementById("comment").innerHTML = "Your weight is Normal";
        if (BMI >= 25 && BMI <= 30) document.getElementById("comment").innerHTML = "You got Obese";
        if (BMI > 30) document.getElementById("comment").innerHTML = "You got Overweight" ;
        document.getElementById('diet').innerHTML = "Check out our diets for : " + kcal + " kcal" ;
        
}

window.onload = function()
{
        
        document.getElementById('bmi-menu').addEventListener('click',function()
                {
                        document.getElementById('button').setAttribute( "onClick", "BMI()" );
                        document.getElementById('title').textContent= 'BMI Calculator'
                });
        document.getElementById('bmr-menu').addEventListener('click',function()
                {
                        document.getElementById('button').setAttribute( "onClick", "BMR()" );
                        document.getElementById('title').textContent= 'BMR Calculator'
                });
                

}

