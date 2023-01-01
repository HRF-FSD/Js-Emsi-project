const from = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');



//show input message error 
function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

//show input success message
function showsuccess(input){
    const formControl = input.parentElement;
    formControl.className= 'form-control success';
}

//check required fields
function checkRequired(inputArr){
    inputArr.forEach(function(input){
        if(input.value.trim() === ''){
            showError(input, `${getFieldName(input)} is required`);
        } else {
            showsuccess(input);
        }
    });
}

//check email is valid 
function checkEmail(input){
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(input.value == ''){
        showError(input, `${getFieldName(input)} is required`)
    }
    else if(re.test(input.value.trim())){
        showsuccess(input);
    } else {
        showError(input, 'Email is not valid');
    }
}

// check valid password
function checkValidPassword(input){ 
            
            var str = document.getElementById("password").value; 
            if(input.value == ''){
                showError(input, `${getFieldName(input)} is required`)
            }
            else if (str.match( /[0-9]/g) && 
                    str.match( /[A-Z]/g) && 
                    str.match(/[a-z]/g) && 
                    str.match( /[^a-zA-Z\d]/g) &&
                    str.length >= 8) 
                showsuccess(input);
            else 
                showError(input, 'Weak password ');
        }



//check password match 
function checkPasswordMatch(input1, input2){
    if(input2.value == ''){
        showError(input2, `${getFieldName(input2)} is required`)
    }
    else if(input1.value !== input2.value){
        showError(input2, 'passwords do not match');
    }
}

//check input lenght 
function checkLength(input, min, max){
    if(input.value==""){
        showError(input, `${getFieldName(input)} is required`)
    }
    else if(input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} caracters `);
    } else if(input.value.length > max){
        showError(input, `${getFieldName(input)} must be less than  ${max} caracters `);
    } else {
        showsuccess(input);
    }
}


//uppercase first letter
function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//eventlisners
form.addEventListener('submit', function(e) {
    e.preventDefault();
    checkRequired([username, email, password, password2]);
    checkLength(username, 3, 25);
    checkEmail(email);
    checkValidPassword(password);
    checkPasswordMatch(password,password2);
    
});

form.addEventListener(('submit'), function(e){
    e.preventDefault();
    window.location="../index/index.html"
});
