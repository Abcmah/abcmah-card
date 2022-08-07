function input(para){
    if(para =="name"){
       let output = document.querySelector('#name');
       let inputField = document.querySelectorAll('.form-control')[0].value;
        console.log(inputField.value)
        output.innerHTML=inputField.toUpperCase();
    }
    else if(para ==="cardNumber"){
        let out = document.querySelector('#cardNo');
        let output;
        let inputField = document.querySelectorAll('.form-control')[1];
       if(isNaN(inputField.value)){
        document.querySelectorAll('.error')[1].innerHTML="wrong";
        inputField.classList="form-control invalid";
       }
       else{
       out.innerHTML=inputField.value;
       }

    }
    else if(para == "mm"){
        let inputField = document.querySelectorAll('.form-control')[2].value;
        document.querySelector('#mm').innerHTML=inputField;
    }
    else if(para == "yy"){
        let inputField = document.querySelectorAll('.form-control')[3].value;
        document.querySelector('#yy').innerHTML=inputField;
    }
    // cvc
    else if(para ==="cvc"){
        let inputField = document.querySelectorAll('.form-control')[4];
        console.log(inputField.value)
        document.querySelector("#cvc").innerHTML=inputField.value;

    }
}

function Submit(){
    let inputField = document.querySelectorAll(".form-control");
    console.log(inputField.length)
    for(let i =0; i <inputField.length;i++){
        if(inputField[i].value===''){
            inputField[i].classList="form-control invalid";
            document.querySelectorAll('.error')[i].innerHTML="Can`t be blank"
        }
        else{
            location.href=`/submit.html`
        }
    }
}