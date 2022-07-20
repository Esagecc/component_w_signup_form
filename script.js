let errorIcon = document.querySelectorAll('.error-icon');
let errorMessage = document.querySelectorAll('.error-messages');
let submit = document.querySelector('.submit');
let emailField = document.getElementById('email-field');
let emailIconError = document.querySelector('error-img2');
let emailMessageError = document.querySelectorAll('#error-msg2');

submit.addEventListener('click', checkFields);

function checkFields() {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (document.getElementById('f_name').value.length == '')
    {
     errorIcon[0].style.display = 'inline';
     errorMessage[0].style.display = 'flex';
     document.getElementById('f_name').style.border = '1px solid hsl(0, 100%, 74%)';
    }

    if (document.getElementById('l_name').value.length == '')
    {
    errorIcon[1].style.display = 'inline';
    errorMessage[1].style.display = 'flex';
    document.getElementById('l_name').style.border = '1px solid hsl(0, 100%, 74%)';   
    }

    if (document.getElementById('pass').value.length == '')
    {
    errorIcon[3].style.display = 'inline';
    errorMessage[3].style.display = 'flex';
    document.getElementById('pass').style.border = '1px solid hsl(0, 100%, 74%)';
    event.preventDefault()
    
    }

    if (!emailRegex.test(emailField.value)) 
    {
    console.log('need an email ')
    errorIcon[2].style.display = 'inline';
    errorMessage[2].style.display = 'flex';
    emailField.style.border = '1px solid hsl(0, 100%, 74%)';
    // document.querySelector('form input placeholder').style.display = 'none';

    console.log(emailField.value);
    event.preventDefault()
    }
}
