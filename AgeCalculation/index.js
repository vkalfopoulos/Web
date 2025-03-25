const btnEl = document.getElementById("btn");
const birthdayEl = document.getElementById("birthday");
const resultEl = document.getElementById("result");

function calculateAge(){
    const birthdayValue = birthdayEl.value;
    console.log(birthdayValue);
    if(birthdayValue ===""){
        alert("Please enter yout birthday")
    }else{
        const age = getAge(birthdayValue);
        resultEl.innerText = ` your age is ${age} ${age > 1 ? "years" : "year"} old`;
    }
}



function getAge(birthdayValue){
    const currentDate = new Date();
    const birthDate = new Date(birthdayValue);    
    let age = currentDate.getFullYear() - birthDate.getFullYear();
    const month = currentDate.getMonth() - birthDate.getMonth();



    if(month<0 || (month === 0 && currentDate.getDate() < birthDate.getDate())){
        age--
    }   
    
    return age;
}


btnEl.addEventListener("click", calculateAge);